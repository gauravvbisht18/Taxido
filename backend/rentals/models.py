from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    aadhar_number = models.CharField(max_length=12)
    aadhar_photo = models.ImageField(upload_to='documents/', null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    user_type = models.CharField(max_length=10, choices=[
        ('renter', 'Renter'),
        ('tourist', 'Tourist')
    ])
    
    def __str__(self):
        return f"{self.user.username} - {self.user_type}"

class Scooter(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    model = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=20, unique=True)
    rent_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_available = models.BooleanField(default=True)
    location = models.CharField(max_length=200, default='Nainital')
    photo = models.ImageField(upload_to='scooters/', null=True, blank=True)
    condition_notes = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.model} - {self.registration_number}"

class Rental(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')
    ]
    
    scooter = models.ForeignKey(Scooter, on_delete=models.CASCADE)
    renter = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    petrol_before = models.ImageField(upload_to='petrol/', null=True, blank=True)
    petrol_after = models.ImageField(upload_to='petrol/', null=True, blank=True)
    condition_before = models.TextField(blank=True)
    condition_after = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.scooter.model} - {self.renter.username}"
