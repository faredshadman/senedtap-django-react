from django.contrib import admin
from .models import Categories,Statistics,Reviews,Docs,Companies

admin.site.register(Categories)
admin.site.register(Statistics)
admin.site.register(Reviews)
admin.site.register(Docs)
admin.site.register(Companies)