from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Category,Product,ProductImages


class ProductImagesAdmin(admin.TabularInline):
    model =  ProductImages

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImagesAdmin]
    list_display = ['user','title','product_image','category','vendor','featured','product_status']
    
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title','category_image']
    

# Register your models here.

admin.site.register(Product,ProductAdmin)
admin.site.register(Category,CategoryAdmin)
