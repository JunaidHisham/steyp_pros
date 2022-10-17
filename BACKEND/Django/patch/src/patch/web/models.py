from tabnanny import verbose
from django.db import models


FAQ_TYPE = (
    ("rent_tracking", "Rent Tracking"),
    ("new_deposit", "New Deposit"),
    ("existing_deposit", "Existing Deposit"),
)


class Testimonial(models.Model):
    name = models.CharField(max_length=255, default="Client")
    designation = models.CharField(max_length=254)
    description = models.TextField()
    image = models.ImageField(upload_to="testimonials/")

    def __str__(self):
        return self.name


class Promoters(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="promoters/")

    class Meta():
        verbose_name ="Promoter"
        verbose_name_plural ="Promoters"
        ordering = ["name", 'id']
        db_table = "web_Promoters"

    def __str__(self):
        return self.name


class Faq(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    faq_type = models.CharField(max_length=128, choices=FAQ_TYPE)


class Subscribe(models.Model):
    email = models.EmailField()

    def __str__(self):
        return self.email