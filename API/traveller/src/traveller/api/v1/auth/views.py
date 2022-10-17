import requests
import json

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.contrib.auth.models import User
from accounts.serializers import UserProfileSerializer
from accounts.models import UserProfile


@api_view(["POST"])
@permission_classes([AllowAny])
def create_new_user(request):
    email = request.data["email"]
    password = request.data["password"]
    username = request.data["username"]
    first_name = request.data["first_name"]
    last_name = request.data["last_name"]

    if not User.objects.filter(username=username).exists():
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(
                username = username,
                password = password,
                first_name = first_name,
                last_name= last_name,
                email=email
            )
           
            UserProfile.objects.create(user=user, username=username, first_name=first_name, last_name=last_name, email=email)

            headers = {
                "Content-Type":"application/json"
            }

            data = {
                "username": username,
                "password" :password
            }

            protocol = "http://"
            if request.is_secure():
                protocol = "https://"

            host = request.get_host()
            url = protocol + host  + "/api/v1/auth/token/"

            response = requests.post(url, headers=headers, data=json.dumps(data))

            if response.status_code == 200:

                response_data = {
                    "status_code":6000,
                    "message":"Account created successfully",
                    "data": response.json()
                }
            else:
                response_data = {
                    "status_code":6001,
                    "message":"something went wrong",
                    "data": "Something happened while creating your account"
                }
            return Response(response_data)
        else:
            response_data = {
                "status_code":6001,
                "message":"something went wrong",
                "data": serializer.errors
            }
            return Response(response_data)
    else:
        response_data = {
            "status_code":6001,
            "data":"User already Exists !!"
        }
        return Response(response_data)
