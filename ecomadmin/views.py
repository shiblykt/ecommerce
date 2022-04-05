from django.shortcuts import render

# Create your views here.
def addseller(request):
    return render(request,'administrator/admin-addseller.html')