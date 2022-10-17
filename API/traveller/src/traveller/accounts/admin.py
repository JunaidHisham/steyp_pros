from django.contrib import admin
from accounts.models import UserProfile


class ProfileAdmin(admin.ModelAdmin):
    list_display = ["id", "username", "first_name", "last_name"]

admin.site.register(UserProfile, ProfileAdmin)
