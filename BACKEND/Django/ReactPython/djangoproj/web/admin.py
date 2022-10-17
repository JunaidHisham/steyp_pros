from django.contrib import admin

from web.models import Sample


# Register your models here.
class SampleAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]


admin.site.register(Sample, SampleAdmin)