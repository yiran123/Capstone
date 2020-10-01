from django.urls import path

from .views import ProjectDetailView, ProjectListView, BondListView, BondDetailView


urlpatterns = [
    path('project', ProjectListView.as_view()),
    path('project/<pk>', ProjectDetailView.as_view()),
    path('bond', BondListView.as_view()),
    path('bond/<pk>', BondDetailView.as_view()),
]
