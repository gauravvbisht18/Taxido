from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ScooterViewSet, RentalViewSet, register, login, get_profile,upload_documents

router = DefaultRouter()
router.register(r'scooters', ScooterViewSet)
router.register(r'rentals', RentalViewSet, basename='rental')

urlpatterns = [
    # Auth endpoints
    path('auth/register/', register, name='register'),
    path('auth/login/', login, name='login'),
    
    # Get current user profile
    path('profile/', get_profile, name='profile'),
    path('upload-documents/', upload_documents),

   

    # Viewsets (scooters, rentals)
    path('', include(router.urls)),
]
