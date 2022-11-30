from django.contrib import admin

from .models import Category, Product, BannerHome, TanilganBrendlar

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug']
    prepopulated_fields = {'slug': ('title',)}



@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'price']
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(BannerHome)

admin.site.register(TanilganBrendlar)
