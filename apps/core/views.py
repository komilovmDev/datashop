from django.shortcuts import render
from apps.store.models import Product
from apps.store.models import BannerHome, TanilganBrendlar

def frontpage(request):
    products = Product.objects.all()
    is_featured_products = Product.objects.filter(is_featured=True)
    banner_image = BannerHome.objects.all()
    brand_image = TanilganBrendlar.objects.all()

    context = {
        'products': products,
        'is_featured_products': is_featured_products,
        'banner_image': banner_image,
        'brand_image': brand_image,
        
    }

    return render(request, 'frontpage.html', context)



def contact(request):
    return render(request, 'contact.html')


def about(request):
    return render(request, 'about.html')