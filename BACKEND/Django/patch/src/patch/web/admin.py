from django.contrib import admin
from web.models import Faq, Subscribe, Testimonial, Promoters


class TestimonialAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "designation","image", "description"]


admin.site.register(Testimonial, TestimonialAdmin)


class PromotersAdmin(admin.ModelAdmin):
    list_display = ["id", 'name', 'image']


admin.site.register(Promoters,  PromotersAdmin)


class FaqAdmin(admin.ModelAdmin):
    list_display = ["id", 'title', 'faq_type', "description"]


admin.site.register(Faq,  FaqAdmin)


admin.site.register(Subscribe)
