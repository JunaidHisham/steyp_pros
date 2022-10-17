from django.db import models


class Sample(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

    


