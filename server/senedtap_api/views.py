from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.views import APIView
# Create your views here.
from .serializers import CategoriesSerializer,StatisticsSerializer,ReviewsSerializer,DocsSerializer,CompanySerializer,RegisterSerializer,UserSerializer,MyTokenObtainPairSerializer
from .models import Categories,Statistics,Reviews,Docs,Companies
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
class UserList(APIView):
    def get(self,request):
        users = User.objects.all()
        serializer = UserSerializer(users,many=True)
        return Response(serializer.data)
    def post(self,request):
        username = request.data['username']
        email = request.data['email']
        first_name = request.data['first_name']
        last_name = request.data['last_name']
        password = request.data['password']
        user = User.objects.create(username=username,email=email,first_name=first_name,last_name=last_name,password=password)
        serializer = UserSerializer(user,many=False)
        return Response(serializer.data)
    
class UserDetails(APIView):
    def get(self,request,id):
        user = User.objects.get(id=id)
        serializer = UserSerializer(user,many=False)
        return Response(serializer.data)
    def put(self,request,id):
        user = User.objects.get(id=id)
        serializer = UserSerializer(instance=user,data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    
    
    
class CompanyList(APIView):
    def get(self,request):
        companies = Companies.objects.all()
        serializer = CompanySerializer(companies,many=True)
        return Response(serializer.data)
    def post(self,request):
        name = request.data['name']
        company = Companies.objects.create(name=name)
        serializer = CompanySerializer(company,many=False)
        return Response(serializer.data)
    
class CompanyDetails(APIView):
    def get(self,request,id):
        company = Companies.objects.get(id=id)
        serializer = CompanySerializer(company,many=False)
        return Response(serializer.data)
    def put(self,request,id):
        company = Companies.objects.get(id=id)
        serializer = CompanySerializer(instance=company,data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class DocsList(APIView):    
    def get(self,request):
        category = request.query_params.get('category')
        if category != None:
            docs = Docs.objects.filter(category=category)
            serializer = DocsSerializer(docs,many=True)
            return Response(serializer.data)
        else:
            docs = Docs.objects.all()
            serializer = DocsSerializer(docs,many=True)
            return Response(serializer.data)
        
    def post(self,request):
        title = request.data['title']
        body = request.data['body']
        price = request.data['price']
        category = request.data['category']
        language = request.data['language']
        fav = request.data['fav']
        doc = Docs.objects.create(title=title,body=body,price=price,category=category,language=language,fav=fav)
        serializer = DocsSerializer(doc,many=False)
        return Response(serializer.data)
    
class DocDetails(APIView):
    def get(self,request,id):
        doc = Docs.objects.get(id=id)
        serializer = DocsSerializer(doc,many=False)
        return Response(serializer.data)
        

class ReviewsList(APIView):
    def get(self,request):
        reviews = Reviews.objects.all()
        serializer = ReviewsSerializer(reviews,many=True)
        return Response(serializer.data)
    def post(self,request):
        name = request.data['name']
        job = request.data['job']
        stars = request.data['stars']
        body = request.data['body']
        image_url = request.data['image_url']
        review = Reviews.objects.create(name=name,job=job,stars=stars,body=body,image_url=image_url)
        serializer = ReviewsSerializer(review,many=False)
        return Response(serializer.data)
    
class ReviewDetail(APIView):
    def get(self,request,id):
        review = Reviews.objects.get(id=id)
        serializer = ReviewsSerializer(review,many=False)
        return Response(serializer.data)
    def put(self,request,id):
        review = Reviews.objects.get(id=id)
        serializer = ReviewsSerializer(instance=review,data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
        
# /api/statistics
class StatisticList(APIView):
    def get(self,request):
        statistics = Statistics.objects.all()
        serializer = StatisticsSerializer(statistics,many=True)
        return Response(serializer.data)
    def post(self,request):
        title = request.data['title']
        count = request.data['count'] if 'count' in request.data else 0
        statistic = Statistics.objects.create(title=title,count=count)
        serializer = StatisticsSerializer(statistic,many=False)
        return Response(serializer.data)

    
# /api/statistics/1
class StatisticDetails(APIView):
    def get(self,request,id):
        statistic = Statistics.objects.get(id=id)
        serializer = StatisticsSerializer(statistic,many=False)
        return Response(serializer.data)
    def put(self,request,id):
        statistic = Statistics.objects.get(id=id)
        statistic.title = request.data['title']
        statistic.count = int(request.data['count']) if 'count' in request.data else statistic.count
        statistic.save()
        serializer = StatisticsSerializer(statistic,many=False)
        return Response(serializer.data)
    def delete(self,request,id):
        statistic = Statistics.objects.get(id=id)
        statistic.delete()
        return Response('Statistic Deleted')

# /api/categories
class CategoriesList(APIView):
    def get(self,request):
        categories = Categories.objects.all()
        serializer = CategoriesSerializer(categories,many=True)
        return Response(serializer.data)
    def post(self,request):
        name = request.data['name']
        body = request.data['body']
        category = Categories.objects.create(name=name,body=body)
        serializer = CategoriesSerializer(category,many=False)
        return Response(serializer.data)
    
    
# /api/categories/1
class CategoryDetails(APIView):
    def get(self,request,id):
        category = Categories.objects.get(id=id)
        serializer = CategoriesSerializer(category,many=False)
        return Response(serializer.data)
    def put(self,request,id):
        category = Categories.objects.get(id=id)
        serializer = CategoriesSerializer(instance=category,data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
       
    def delete(self,request,id):
        category = Categories.objects.get(id=id)
        category.delete()
        return Response('Category Deleted')