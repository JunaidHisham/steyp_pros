# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated


# class HelloView(APIView):
# 	permission_classes = (IsAuthenticated, )

# 	def get(self, request):
# 		content = {'message': 'Hello, GeeksforGeeks'}
# 		return Response(content)

from rest_framework import generics, permissions, mixins
from rest_framework.response import Response
from api.v1.accounts.serializers import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User

from rest_framework_simplejwt import views as jwt_views


#Register API
class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
            # "message": jwt_views.TokenObtainPairView() 
        })