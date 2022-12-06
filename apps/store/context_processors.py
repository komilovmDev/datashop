import random

from .models import Category, Product

def menu_categories(request):
    categories = Category.objects.all()

    return {'menu_categories': categories}


# def req_product(request):
#     product = Product.objects.all()

#     related_products = list(product.category.products.exclude(id=product.id))
#     if len(related_products) >= 3:
#         related_products = random.sample(related_products, 3)

#     return {'req_products': related_products}