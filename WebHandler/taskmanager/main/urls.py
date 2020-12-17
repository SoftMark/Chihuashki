from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='home'),
    path('gallery', views.gallery, name='gallery'),
    path('add', views.add, name='add')
]
