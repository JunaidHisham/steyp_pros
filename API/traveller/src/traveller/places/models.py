from django.db import models


class Place(models.Model):
    name = models.CharField(max_length=250)
    featured_image = models.ImageField(upload_to="places/images/featured/")
    location = models.CharField(max_length=250)
    category = models.ForeignKey("places.Category", on_delete=models.CASCADE)
    description = models.TextField()
    is_deleted = models.BooleanField(default=False)

    class Meta:
        db_table = "places_place"
    
    def __str__(self):
        return self.name


class Category(models.Model):
    image = models.ImageField(upload_to="places/images/category/")
    name = models.CharField(max_length=250)

    class Meta:
        db_table = "places_category"
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Gallery(models.Model):
    place = models.ForeignKey("places.Place", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="places/images/gallery/")
    
    class Meta:
        db_table = "places_gallery"
        verbose_name_plural = "Gallery"

    def __str__(self):
        return str(self.id)