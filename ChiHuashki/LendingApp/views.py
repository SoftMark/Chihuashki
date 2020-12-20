from django.shortcuts import render
from .models import *


def home(request):
    chihuahuas = Chihuahua.objects.order_by("-id")
    return render(request, "LendingApp/index.html", {"chihuahuas": chihuahuas})
