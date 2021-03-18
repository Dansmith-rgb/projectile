from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.views import APIView
from authorization.serializers import RegisterSerializer

class AllUsers(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer