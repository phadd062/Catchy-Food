from django.conf import settings  # TODO: Remove in prod
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)

from .views import RevokeJWT, ValidateJWT

urlpatterns = [
    re_path(
        r"^(?!(api/)|(token/login/)|(catchyfoodmain/jwt/api/token/)|(static/)|(__debug__/)).+$",
        TemplateView.as_view(template_name="index.html"),
    ),
    path("token/login", TokenObtainPairView.as_view()),
    path("catchyfoodmain/jwt/api/token/refresh", TokenRefreshView.as_view()),
    path("catchyfoodmain/jwt/api/token/validate", ValidateJWT.as_view()),
    path("catchyfoodmain/jwt/api/token/revoke", RevokeJWT.as_view()),
    path("api/", include("api.urls.root_urls"))]

if settings.DEBUG:  # TODO: Remove in prod
    import debug_toolbar

    urlpatterns += [
        path("__debug__/", include(debug_toolbar.urls)),
    ]
