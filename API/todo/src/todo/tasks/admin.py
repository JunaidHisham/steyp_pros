from django.contrib import admin
from tasks.models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "is_completed", "is_deleted"]

admin.site.register(Task, TaskAdmin )