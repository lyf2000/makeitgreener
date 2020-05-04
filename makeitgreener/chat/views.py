from django.shortcuts import render

# Create your views here.


def chat(request):
    return render(request, 'chat/exp.html')
def page(request):
    return render(request, 'chat/user.html')