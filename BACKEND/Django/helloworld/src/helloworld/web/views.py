from django.shortcuts import render



# Create your views here.
def index(request):
    my_name = "Junaid Hisham"
    context = {
        "name": my_name
    }
    return render(request, "index.html", context=context)


def about(request):
    return render(request, "about.html")


