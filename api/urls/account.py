



from django.urls import path

from api.views.account.create import create

urlpatterns = [
    path("create", create.CreateAccountAPI.as_view()),
]
