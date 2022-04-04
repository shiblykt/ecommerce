from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return render(request,'myapp/index.html')

def login(request):
    return render(request,'myapp/cust_login.html')

def signup(request):
    return render(request,'myapp/cust_signup.html')

def forgotpassword(request):
    return render(request,'myapp/forgotpassword.html')

def changepassword(request):
    return render(request,'myapp/cust_changepass.html')

def customerprofile(request):
    return render(request,'myapp/cust_profile.html')

def store(request):
    return render(request,'myapp/store.html')

def productview(request):
    return render(request,'myapp/view_product.html')