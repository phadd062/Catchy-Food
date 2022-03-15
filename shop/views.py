import jwt
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken


class ValidateJWT(APIView):
    permission_classes = ()
    authentication_classes = ()

    def post(self, request):
        encoded = request.data.get("tokenRefresh")
        try:
            jwt.decode(encoded, settings.SECRET_KEY, algorithms="HS512")
            return Response("Success")
        except Exception as e:
            return Response(e, status.HTTP_401_UNAUTHORIZED)


class RevokeJWT(APIView):
    def post(self, request):
        token = RefreshToken(request.data.get("tokenRefresh"))
        token.blacklist()
        return Response("Success")
