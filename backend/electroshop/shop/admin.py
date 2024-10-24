from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User,Profile,Product,Vendor,Category,CartOrder,CartOrderItems,Wishlist,ProductImages,ProductReviews,Address

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('name','email','is_staff','is_active')
    ordering = ('email',)

class ProductImagesAdmin(admin.TabularInline):
   model=ProductImages

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImagesAdmin]
    list_display = ['user','title','product_image','category','vendor','featured','product_status']
    
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title','category_image']
    
class VendorAdmin(admin.ModelAdmin):
    list_display = ['title','vendor_image']
    
class CartOrderAdmin(admin.ModelAdmin):
    list_display = ['user','price','paid_status','order_date','product_status']
    
class CartOrderItemsAdmin(admin.ModelAdmin):
    list_display = ['order','invoice_no','item','image','quantity','price','total_price']
    
class ProductReviewAdmin(admin.ModelAdmin):
    list_display = ['user','product','review','rating']
    
class WishlistAdmin(admin.ModelAdmin):
    list_display = ['user','product','date']
    
class AddressAdmin(admin.ModelAdmin):
    list_display = ['user','address','status']
    

# Register your models here.
admin.site.register(User,CustomUserAdmin)
admin.site.register(Profile)
admin.site.register(Product,ProductAdmin)
admin.site.register(Category,CategoryAdmin)
admin.site.register(CartOrderItems,CartOrderItemsAdmin)
admin.site.register(CartOrder,CartOrderAdmin)
admin.site.register(Vendor,VendorAdmin)
admin.site.register(ProductReviews,ProductReviewAdmin)
admin.site.register(Address,AddressAdmin)
admin.site.register(Wishlist,WishlistAdmin)