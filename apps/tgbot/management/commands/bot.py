import telebot

from django.core.management.base import BaseCommand
from django.conf import settings
from apps.order.models import Order, OrderItem


ADMIN = "984573662"

bot = telebot.TeleBot(
            token=settings.TOKEN,    
)

def log_errors(f):

    def inner(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except Exception as e:
            error_message = f"Xatolig sodir bo'ldi: {e}"
            print(error_message)
            raise e

    return inner

@bot.message_handler(commands=['help', 'start'])
def send_welcome(message):
    orderlar = Order.objects.all()[::-1]

    for order in orderlar:
        name = order.first_name
        fm = order.last_name


    bot.reply_to(message, f"Ismi:{name}\nFamiliya: {fm}")


@bot.message_handler(commands=['order'])
def order_admin_answer(message):
    orderlar = Order.objects.all()[::-1]
    item_order = OrderItem.objects.all()[::-1]

    for item in item_order:
        i_order = item.order
        product = item.product
        price = item.price
        miqdori = item.quantity
        if item.product.image:
            image = item.product.image
        else:
            image = "https://avatars.mds.yandex.net/i?id=1f5d62da19df745b2ad992a9a50f9e0b904a36e4-5358581-images-thumbs&n=13&exp=1"

    
    for order in orderlar:
        name = order.first_name
        fm = order.last_name
        email = order.email

        
        msg = f"❗️❗️❗️ <b>Mahsulot sotiladi</b>\n\n"
        msg += f"Ism: {name}\n"
        msg += f"Sharif: {fm}\n"
        # msg += f"Miqdori: {miqdori}\n"
        msg += f"Email: {email}\n"
        
        for item in item_order:
            price = item.price
        msg += f"Narxi: {price}\n"
        photo = "https://avatars.mds.yandex.net/i?id=1f5d62da19df745b2ad992a9a50f9e0b904a36e4-5358581-images-thumbs&n=13&exp=1"
        # for a in ADMIN:
        bot.send_photo(message.chat.id, photo, caption=msg)

@log_errors
@bot.message_handler(func=lambda message: True)
def echo_message(message):
    bot.reply_to(message, message.text)

class Command(BaseCommand):
    help = 'Telegram-Bot'

    def handle(self, *args, **options):
        

        bot.infinity_polling()