from django.shortcuts import render

from web.models import Sample


# Create your views here.

def index(request):
    samples = Sample.objects.all()

    context = {
        "samples": samples
    }
    return render(request, "index.html", context)