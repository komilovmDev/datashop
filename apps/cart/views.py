import random
from django.shortcuts import render, get_object_or_404

from .cart import Cart
from apps.store.models import Product



def cart_detail(request):
    cart = Cart(request)
    productsstring = ''

    for item in cart:
        product = item['product']
        b = "{'id': '%s', 'title': '%s', 'price': '%s', 'quantity': '%s', 'total_price': '%s'}," % (product.id, product.title, product.price, item['quantity'], item['total_price'])

        productsstring = productsstring + b

    context = {
        'cart': cart,
        'productsstring': productsstring.rstrip(','),

    }
    return render(request, 'cart.html', context)


# def req_product(request):
#     product = get_object_or_404(Product)

#     related_products = list(product.category.products.exclude(id=product.id))
#     if len(related_products) >= 3:
#         related_products = random.sample(related_products, 3)

#     context = {
#         'req_products': related_products,
#     }

#     return render(request, 'cart.html', context)