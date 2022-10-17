import json

from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404, render

from web.models import Contact, Feature, Subscribe, Customer, Testimonial, VideoBlog, MarketingFeature, Product, Blog
from web.forms import ContactForm


def index(request):
    customers = Customer.objects.all()
    latest_customers = Customer.objects.all()[:4]
    features = Feature.objects.all()
    video_blogs = VideoBlog.objects.all()[:3]
    featured_peoples = Testimonial.objects.filter(is_featured=True)[:2]
    testimonial_posts = Testimonial.objects.filter(is_featured=False)
    marketing_features = MarketingFeature.objects.all()
    products = Product.objects.all()
    blogs = Blog.objects.all()

    form = ContactForm()

    # print(blogs.content_type)

    context = {
        "customers": customers,
        "features": features,
        "video_blogs": video_blogs,
        "featured_peoples": featured_peoples,
        "testimonial_posts": testimonial_posts,
        "marketing_features": marketing_features,
        "products": products,
        "blogs": blogs,
        "form": form,
        "latest_customers": latest_customers,
    }

    return render(request, "index.html", context)


def subscribe(request):
    email = request.POST.get("email-id")

    if not Subscribe.objects.filter(email=email).exists():

        Subscribe.objects.create(
            email=email
        )

        response_data = {
            "status": "success",
            "message": "Successfully Registered to our newsletter.",
            "title": "Successfully Subscribed"
        }
    else:
        response_data = {
            "status": "error",
            "message": "mail already exists.",
            "title": "Already Subscribed "
        }

    return HttpResponse(json.dumps(response_data), content_type="application/javascript")


def contact(request):
    form = ContactForm(request.POST)

    if form.is_valid():
        form.save()

        response_data = {
            "status": "success",
            "message": "Successfully Submitted data. We will contact you soon",
            "title": "Successfully Submitted."
        }
    else:
        response_data = {
            "status": "error",
            "message": "mail already exists.",
            "title": "Already Subscribed "
        }

    return HttpResponse(json.dumps(response_data), content_type="application/javascript")


def product(request, pk):
    product = get_object_or_404(Product.objects.filter(pk=pk))  
    customers = Customer.objects.filter(product = product)

    context = {
        "product": product,
        "customers": customers
    }
    return render(request, "product.html", context)
