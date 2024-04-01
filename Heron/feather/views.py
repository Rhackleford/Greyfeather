from django.shortcuts import render

from django.http import HttpResponse

def test_page(request):
    return HttpResponse("This is a test page.")

def landing_page(request):
    return render(request, 'landing.html')