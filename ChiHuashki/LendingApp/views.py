from django.shortcuts import render
from .models import *


def home(request):
    chihuahuas = Chihuahua.objects.order_by("-id")[:3]
    return render(request, "LendingApp/index.html", {"chihuahuas": chihuahuas})
