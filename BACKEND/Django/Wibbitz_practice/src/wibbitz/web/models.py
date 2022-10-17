from django.db import models


CONTENT_TYPE = (
    ("Blog Post", 'Blog Post'),
    ("webinar", "Webinar"),
    ("report", "Report")
)
COMPANY_SIZE = (
    ("1", "1- 10"),
    ("2", "11- 50"),
    ("3", "51- 200"),
    ("4", "201- 500")
)
INDUSRTY = (
    ("1", "Agriculture"),
    ("2", "Banking & Finance"),
    ("3", "Bussiness Service & Software")
)
JOB_ROLE = (
    ("1", "C-Suite"),
    ("2", "VP")
)
COUNTRY = (
    ("us", "UNITED STATES"),
    ("albania", "Albania"),
    ("afghanistan", "Afghanistan"),
    ("algeria", "Algeria"),
    ("american_samoa", "American Samoa")
)

class Subscribe(models.Model):
    email = models.EmailField()

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.email


class Customer(models.Model):
    product = models.ForeignKey("web.Product", on_delete=models.CASCADE)
    image = models.FileField(upload_to="customers/")

    class Meta:
        ordering = ["id"]
        db_table = "web_Customers"
        verbose_name = "Customer"

    def __str__(self):
        return str(self.image)


class Feature(models.Model):
    image = models.ImageField(upload_to="features/")
    icon = models.FileField(upload_to="features/icons/")
    icon_background = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    description = models.TextField()
    testimonial_des = models.TextField()
    testimonial_author = models.CharField(max_length=255)
    author_designation = models.CharField(max_length=255)
    testimonial_logo = models.FileField(
        upload_to="features/testimonial_logos/")

    class Meta:
        ordering = ["id"]
        db_table = "web_Features"

    def __str__(self):
        return str(self.image)


class VideoBlog(models.Model):
    image = models.FileField(upload_to="videoBlogs/images/")
    title = models.CharField(max_length=255)
    logo = models.FileField(upload_to="videoBlogs/logos/")

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return str(self.image)


class Testimonial(models.Model):
    image = models.ImageField(upload_to="testimonial/images/")
    logo = models.FileField(
        upload_to="testimonial/logos/", blank=True, null=True)
    description = models.TextField()
    name = models.CharField(max_length=128)
    designation = models.CharField(max_length=128)
    company_name = models.CharField(max_length=128)
    is_featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["id"]
        db_table = "web_Testimonial"

    def __str__(self):
        return self.name


class MarketingFeature(models.Model):
    image = models.FileField(upload_to="marketing/")
    title = models.CharField(max_length=128)
    description = models.TextField()

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.title


class Product(models.Model):
    image = models.ImageField(upload_to="products/images/")
    hero_image = models.ImageField(upload_to="products/hero_images/")
    title = models.CharField(max_length=128)
    description = models.TextField()
    name = models.CharField(max_length=255) 
    logo = models.FileField(upload_to="products/logos")
    background_color = models.CharField(max_length=128, default="#") 
    button_bg = models.CharField(max_length=128, default="#") 

    class Meta:
        ordering = ["id"]
        db_table = "web_Product"

    def __str__(self):
        return self.name


class Blog(models.Model):
    image = models.ImageField(upload_to="blogs/")
    title = models.CharField(max_length=255)
    content_type = models.CharField(max_length=128, choices=CONTENT_TYPE)

    class Meta:
        ordering = ["id"]
        db_table = "web_Blogs"

    def __str__(self):
        return str(self.image)


class Contact(models.Model):
    email = models.EmailField()
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    company = models.CharField(max_length=128)
    company_size = models.CharField(max_length=128, choices=COMPANY_SIZE)
    industry = models.CharField(max_length=128, choices=INDUSRTY)
    job_role = models.CharField(max_length=128, choices=JOB_ROLE)
    country = models.CharField(max_length=128, choices=COUNTRY)
    user_agreement =  models.BooleanField(default=False)

    class Meta:
        ordering = ["id"]
        db_table = "web_Contact"

    def __str__(self):
        return str(self.first_name)