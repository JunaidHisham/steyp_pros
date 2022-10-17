from django.contrib import admin
from posts.models import Author, Category, Post


class AuthorAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]

admin.site.register(Author, AuthorAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ["id","title" ]
admin.site.register(Category, CategoryAdmin)


class PostAdmin(admin.ModelAdmin):
    list_display = ["id", "title","author", "published_date", "short_description"]

admin.site.register(Post, PostAdmin)