from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True)
    