from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('login/', views.MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', views.UserList.as_view(), name='auth_users'),
    path('users/<int:id>', views.UserDetails.as_view(), name='auth_user_details'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('categories', views.CategoriesList.as_view(),name='categories'),
    path('categories/<int:id>', views.CategoryDetails.as_view(),name='category_details'),
    path('statistics', views.StatisticList.as_view(),name='statistics'),
    path('statistics/<int:id>', views.StatisticDetails.as_view(),name='statistic_details'),
    path('reviews', views.ReviewsList.as_view(),name='reviews'),
    path('reviews/<int:id>', views.ReviewDetail.as_view(),name='review_details'),
    path('docs', views.DocsList.as_view(),name='docs'),
    path('docs/<int:id>', views.DocDetails.as_view(),name='doc_details'),
    path('companies', views.CompanyList.as_view(),name='companies'),
    path('companies/<int:id>', views.CompanyDetails.as_view(),name='company_details')
]
