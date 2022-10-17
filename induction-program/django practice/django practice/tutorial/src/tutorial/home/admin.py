from django.contrib import admin
from .models import Students

class StudentsAdmin(admin.ModelAdmin):
    list_display = ('name',"student_class", "father_name", "phone_number" )

admin.site.register(Students, StudentsAdmin)

