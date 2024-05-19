from django.http import JsonResponse
from .models import Message

def message_list(request):
    messages = Message.objects.all().values('id', 'text')
    return JsonResponse(list(messages), safe=False)