from rest_framework.serializers import ModelSerializer,EmailField,CharField,ValidationError
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import Categories,Statistics,Reviews,Docs,Companies
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls,user):
        token = super(MyTokenObtainPairSerializer,cls).get_token(user)
        
        token['username'] = user.username
        return token
    

class RegisterSerializer(ModelSerializer):
    email = EmailField(
        required=True, 
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = CharField(write_only=True, required=True, validators=[validate_password])
    password2 = CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise ValidationError({"password": "Password fields didn't match."})
        return attrs
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        
        return user

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name','is_staff') 
         
    

class CategoriesSerializer(ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'
class StatisticsSerializer(ModelSerializer):
    class Meta:
        model = Statistics
        fields = '__all__'
        
class ReviewsSerializer(ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'

class CompanySerializer(ModelSerializer):
    class Meta:
        model = Companies
        fields = '__all__'

class DocsSerializer(ModelSerializer):
    category = CategoriesSerializer(read_only=True)
    company = CompanySerializer(read_only=True)
    class Meta:
        model = Docs
        fields = ['id','title','body','price','language','fav','category','company']