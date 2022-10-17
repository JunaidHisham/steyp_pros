from django.contrib import admin
from web.models import Blog, Customer, Feature \
    , MarketingFeature, Subscribe, Testimonial, VideoBlog, Product, Contact


class SubscribeAdmin(admin.ModelAdmin):
    list_display = ["id", "email"]


admin.site.register(Subscribe, SubscribeAdmin)


class CustomerAdmin(admin.ModelAdmin):
    list_display = ["id", 'image']


admin.site.register(Customer, CustomerAdmin)


class FeatureAdmin(admin.ModelAdmin):
    list_display = ["id", "image", "testimonial_author"]


admin.site.register(Feature, FeatureAdmin)


class VideoBlogAdmin(admin.ModelAdmin):
    list_display = ["id", "image", "title"]


admin.site.register(VideoBlog, VideoBlogAdmin)


class TestimonialAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "company_name"]


admin.site.register(Testimonial, TestimonialAdmin)


class MarketingFeatureAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "image"]


admin.site.register(MarketingFeature, MarketingFeatureAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "image"]


admin.site.register(Product, ProductAdmin)


class BlogAdmin(admin.ModelAdmin):
    list_display = ["id", "title","content_type", "image"]


admin.site.register(Blog, BlogAdmin)


class ContactAdmin(admin.ModelAdmin):
    list_display = ["id", "email", "first_name", "job_role", "company"]


admin.site.register(Contact, ContactAdmin)