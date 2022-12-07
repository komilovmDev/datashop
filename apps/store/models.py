from io import BytesIO
from django.core.files import File
from django.db import models
from PIL import Image
from ckeditor_uploader.fields import RichTextUploadingField 
from ckeditor.fields import RichTextField




class Category(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    ordering = models.IntegerField(default=0)

    image = models.ImageField(upload_to='uploads/', blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Kategoriyalar'
        ordering = ('ordering',)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    
    # description = models.TextField(blank=True, null=True)
    sotuvfda_mavjud = models.CharField(max_length=45, verbose_name='Sotuvda Mavjudmi?')
    description = RichTextUploadingField(verbose_name="Qisqacha malumot")
    maxsulot_haqida = RichTextUploadingField(blank=True, null=True)
    # xususiyatlari = RichTextUploadingField(blank=True, null=True, verbose_name="Maxsulot Xususiyatlari")
    num_visits = models.IntegerField(default=0)
    last_visit = models.DateTimeField(blank=True, null=True)


    # price = models.DecimalField(max_digits=35, decimal_places=0)
    price = models.FloatField()
    is_featured = models.BooleanField(default=False)

    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date_added',)

    def __str__(self):
        return self.title


class BannerHome(models.Model):

    title = models.CharField(max_length=255)
    chegirma = models.CharField(max_length=13)
    bg_image = models.ImageField(upload_to='banners/')
    image = models.ImageField(upload_to='banners/', blank=True, null=True)

    def __str__(self):
        return self.title


class TanilganBrendlar(models.Model):
    image = models.ImageField(upload_to='brands/', blank=True, null=True)

    # def __str__(self):
    #     return self.image


class FooterPayBrands(models.Model):
    title = models.CharField(max_length=244)
    image = models.ImageField(upload_to='paybrandsfooter/', blank=True, null=True)

    class Meta:
        verbose_name = 'Tolov turlari, Footerqismi'

    def __str__(self):
        return self.title


