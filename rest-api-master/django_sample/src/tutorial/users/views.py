from django.http import HttpResponse
from django.shortcuts import render



# Create your views here.
def createuser(request):
    return HttpResponse("#")


def listusers(request):
    return HttpResponse("List Users")