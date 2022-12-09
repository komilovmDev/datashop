from django.contrib import admin

from .models import Category, Product, BannerHome, TanilganBrendlar, FooterPayBrands, ProductImage

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'price']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product']


admin.site.register(BannerHome)

admin.site.register(TanilganBrendlar)

admin.site.register(FooterPayBrands)


