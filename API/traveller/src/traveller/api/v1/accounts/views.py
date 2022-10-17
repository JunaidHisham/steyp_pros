from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.models import UserProfile
from accounts.serializers import UserProfileSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def view_user_profile(request):
    instance = UserProfile.objects.get(user=request.user)
    context = {
        "request":request
    }
    user_serialized = UserProfileSerializer(instance, context=context)
    response_data = {
        "title":"User Profile",
        "user": user_serialized.data
    }
    return Response(response_data)