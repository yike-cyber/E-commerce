from django.contrib import admin
from .models import Wishlist,WishlistItem

# Register your models here.
admin.site.register(WishlistItem)
admin.site.register(Wishlist)
