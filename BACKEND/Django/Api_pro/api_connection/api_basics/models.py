from django.db import models

# Create your models here.

class Bike(models.Model):
    name = models.CharField(max_length=100)
    mileage = models.IntegerField()
    price = models.IntegerField()

    def __str__(self):
        return self.name


