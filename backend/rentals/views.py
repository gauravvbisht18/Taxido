from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import UserProfile, Scooter, Rental
from .serializers import UserSerializer, UserProfileSerializer, ScooterSerializer, RentalSerializer

# ----------- Register API -----------
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    phone = request.data.get('phone')
    user_type = request.data.get('user_type')

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=400)

    user = User.objects.create_user(username=username, password=password, email=email)
    UserProfile.objects.create(user=user, phone=phone, user_type=user_type)

    return Response({'message': 'User created successfully'}, status=201)

# ----------- Login API -----------
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user:
        return Response({
            'message': 'Login successful',
            'user_id': user.id,
            'username': user.username,
            'user_type': user.userprofile.user_type
        })
    return Response({'error': 'Invalid credentials'}, status=400)

# ----------- Get Profile of Current User -----------
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    profile = UserProfile.objects.get(user=request.user)
    serializer = UserProfileSerializer(profile)
    return Response(serializer.data)

# ----------- Upload Documents (Aadhar / scooter / petrol) -----------
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_documents(request):
    profile = UserProfile.objects.get(user=request.user)
    if 'aadhar_photo' in request.FILES:
        profile.aadhar_photo = request.FILES['aadhar_photo']
    profile.save()

    if profile.user_type == 'renter':
        scooter = Scooter.objects.filter(owner=request.user).first()
        if scooter:
            if 'photo' in request.FILES:
                scooter.photo = request.FILES['photo']
            if 'petrol_before' in request.FILES:
                scooter.petrol_before = request.FILES['petrol_before']
            scooter.save()

    return Response({'message': 'Documents uploaded successfully'}, status=200)


# ----------- Scooter CRUD (for renters) -----------
class ScooterViewSet(viewsets.ModelViewSet):
    queryset = Scooter.objects.all()
    serializer_class = ScooterSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# ----------- Rental CRUD (for tourists) -----------
class RentalViewSet(viewsets.ModelViewSet):
    serializer_class = RentalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Rental.objects.filter(renter=self.request.user)

    def perform_create(self, serializer):
        serializer.save(renter=self.request.user)
