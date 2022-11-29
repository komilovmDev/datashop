from django.shortcuts import render, get_object_or_404

from .models import Product, Category, BannerHome
from django.db.models import Q

def search(request):

    query = request.GET.git('query')
    products = Product.objects.filter(Q(title__icontains=query) | Q(description__icontains=query))

    context = {
        'query': query,
        'products': products

    }

    return render(request, 'search.html', context)


def product_detail(request, category_slug, slug):
    product = get_object_or_404(Product, slug=slug)

    context = {
        'product': product,

    }

    return render(request, 'product_detail.html', context)


def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = category.products.all()

    context = {
        'category': category,
        'products': products,
    }

    return render(request, 'category_detail.html', context)


def product_list(request):
    products = Product.objects.all()
    category = Category.objects.all()

    context = {
        'products': products,
        'category': category,

    }

    return render(request, 'product_list.html', context)


def product_list_colm(request):
    products = Product.objects.all()
    category = Category.objects.all()
    is_featured_products = Product.objects.filter(is_featured=True)

    context = {
        'products': products,
        'category': category,
        'is_featured_products': is_featured_products,

    }

    return render(request, 'product_colm.html', context)

