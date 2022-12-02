from django.shortcuts import render
from apps.store.models import Product
from apps.store.models import BannerHome, TanilganBrendlar, FooterPayBrands

def frontpage(request):
    products = Product.objects.all()
    is_featured_products = Product.objects.filter(is_featured=True)
    banner_image = BannerHome.objects.all()
    brand_image = TanilganBrendlar.objects.all()

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'products': products,
        'is_featured_products': is_featured_products,
        'pay_images_footer': footer_brand_pay_images,
        'banner_image': banner_image,
        'brand_image': brand_image,
        
    }

    return render(request, 'frontpage.html', context)



def contact(request):
    return render(request, 'contact.html')


def about(request):
    return render(request, 'about.html')