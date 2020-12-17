from django.shortcuts import render, redirect
from .models import Chihuahua
from .forms import ChihuahuaForm


def index(request):
    chihuahuas = Chihuahua.objects.all()
    return render(request, 'main/index.html', {"title": "Главная", "chihuahuas": chihuahuas})


def gallery(request):
    chihuahuas = Chihuahua.objects.all()
    return render(request, 'main/gallery.html', {"title": "Галлерея", "chihuahuas": chihuahuas})


def add(request):
    error = ''
    if request.method == 'POST':
        form = ChihuahuaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            error = 'Форма заполнена не верно'


    chihuahuas = Chihuahua.objects.all()
    form = ChihuahuaForm()
    context = {
        "title": "Добавление пёсика",
        "form": form,
        "error": error,
        "chihuahuas": chihuahuas
    }

    return render(request, 'main/add.html', context)


