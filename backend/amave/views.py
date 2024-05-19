from django.http import JsonResponse

from .models import Message


# Create your views here.

def index(request):
    messages = Message.objects.all()
    return JsonResponse({'messages': list(messages.values())})
