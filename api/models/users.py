from django.contrib.auth.models import AbstractUser, Group
from django.db import models


class User(AbstractUser):
    class Meta:
        db_table = "user_accounts"
        ordering = ["last_name"]

    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(max_length=254, unique=True)
    user_group = models.ForeignKey(
        Group, on_delete=models.PROTECT, related_name="user_group_set"
    )
    account_notes = models.TextField(blank=True, null=True)

