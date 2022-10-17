from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.v1.places.serializers import PlaceSerializer, PlaceDetailSerializer
from places.models import Place
from django.db.models import Q

from api.v1.places.pagination import StandardResultSetPagination

@api_view(["GET"])
@permission_classes([AllowAny])
def list_places(request):
    instances = Place.objects.filter(is_deleted = False)
    q = request.GET.get("q")
    fil = request.GET.get("fil")
    if q:
        instances = instances.filter(Q(name__icontains=q) | Q(location__icontains=q))

    if fil:
        # instances = instances.filter(Q(category__name__icontains=fil))
        ids = fil.split(",")
        instances = instances.filter(Q(category__in=ids))

    paginator = StandardResultSetPagination()
    paginated_result = paginator.paginate_queryset(instances, request)

    context = {
        "request":request
    }
    serializer = PlaceSerializer(paginated_result, many=True, context=context)
    
    response_data = {
        "status_code" : 6000,
        "total_items": paginator.page.paginator.count,
        "links": {
            "next":paginator.get_next_link(),
            "previous":paginator.get_previous_link()
        },
        "data" : serializer.data
    }
    return Response(response_data)



@api_view(["GET"])
@permission_classes([AllowAny])
def list_place(request, pk):
    if Place.objects.filter(pk=pk).exists():
        instance = Place.objects.get(pk=pk)
        context = {
            "request":request
        }
        serializer = PlaceDetailSerializer(instance, context=context)

        response_data = {
            "status_code": 6000,
            "data": serializer.data
        }
        return Response(response_data)
    else:
        response_data={
            "status_code" : 6001,
            "message" : "!!!Place Not Found!!!"
        }
        return Response(response_data)



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def list_protected_place(request, pk):
    if Place.objects.filter(pk=pk).exists():
        instance = Place.objects.get(pk=pk)
        context = {
            "request":request
        }
        serializer = PlaceDetailSerializer(instance, context=context)

        response_data = {
            "status_code": 6000,
            "data": serializer.data
        }
        return Response(response_data)
    else:
        response_data={
            "status_code" : 6001,
            "message" : "!!!Place Not Found!!!"
        }
        return Response(response_data)