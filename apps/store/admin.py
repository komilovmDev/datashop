from django.contrib import admin

from .models import Category, Product, BannerHome

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug']
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Product)

admin.site.register(BannerHome)

