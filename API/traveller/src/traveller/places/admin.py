from django.contrib import admin
from places.models import Place, Category, Gallery


class GalleryAdmin(admin.TabularInline):
    list_display = ["id", "place"]
    model = Gallery


class PlaceAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "location", "category"] 
    inlines = [GalleryAdmin]

admin.site.register(Place, PlaceAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]

admin.site.register(Category, CategoryAdmin)