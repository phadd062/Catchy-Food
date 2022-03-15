from django.urls import include, path

from api.views.context import ContextAPIView

urlpatterns = [
    path("", include("rest_framework.urls")),
    path("account/", include("api.urls.account")),
    path("context", ContextAPIView.as_view()),
]
