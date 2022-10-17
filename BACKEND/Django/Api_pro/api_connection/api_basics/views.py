from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser
from api_basics.models import Bike
from api_basics.serializers import BikeSerializer


@csrf_exempt
def bike_list(request):
    if request.method == 'GET':
        bikes = Bike.objects.all()
        serializer = BikeSerializer(bikes, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = BikeSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def bike_detail(request, id):
    try:
        bike = Bike.objects.get(id=id)
    except Bike.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = BikeSerializer(bike)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = BikeSerializer(bike, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == "DELETE":
        bike.delete()
        return HttpResponse(status=204)