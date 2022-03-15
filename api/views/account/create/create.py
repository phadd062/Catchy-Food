from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models.users import User
from api.serializers.account.account import UserSerializer


class CreateAccountAPI(APIView):
    def post(self, request):
        return Response({'data': 'peter'})


class CreateAccountAPI(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            obj_id = serializer.data["id"]
            user_obj = User.objects.get(id=obj_id)
            user_obj.set_password(serializer.data["password"])
            user_obj.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response({"errors": serializer.errors})