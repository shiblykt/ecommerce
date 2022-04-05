from django.shortcuts import render

def seller(request):
    return render (request,'reseller/reseller_home.html')

def products(request):
    return render (request,'reseller/reseller_products.html')

def addproduct(request):
    return render (request,'reseller/reseller_addproduct.html')