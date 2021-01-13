from django.shortcuts import render
from .models import *


def home(request):
    config = SiteConfigurations.objects.order_by("id")[0]
    chihuahuas = Chihuahua.objects.order_by("-id").all()
    gallery = GalleryImage.objects.order_by("-id").all()
    return render(request, "LendingApp/index.html",
                      {
                          "chihuahuas": chihuahuas,
                          "gallery": gallery,
                          "config": config
                      }
                  )
