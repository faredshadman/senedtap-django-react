from django.db import models
from datetime import datetime

def upload_to(instance, filename):
    now  = datetime.now()
    return 'images/{filename}'.format(filename=f"{now}{filename}")

# Create your models here.


class Categories(models.Model):
    name = models.CharField(max_length=100)
    body = models.TextField(default='',blank=True,null=True)
    def __str__(self):
        return self.name
    
class Statistics(models.Model):
    title = models.CharField(max_length=100)
    count = models.IntegerField(default=0)
    def __str__(self):
        return self.title

class Reviews(models.Model):
    name = models.CharField(max_length=100)
    job = models.CharField(max_length=100)
    stars = models.IntegerField(default=0)
    body = models.TextField()
    image_url = models.ImageField(upload_to=upload_to,blank=True,null=True)
    def __str__(self):
        return self.name

class Companies(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    
class Docs(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    price = models.IntegerField(default=0)
    category = models.ForeignKey(Categories,on_delete=models.SET_NULL,null=True,blank=True)
    company = models.ForeignKey(Companies,on_delete=models.SET_NULL,null=True,blank=True)
    language = models.CharField(max_length=100)
    fav = models.BooleanField(default=False)
    def __str__(self):
        return self.title

