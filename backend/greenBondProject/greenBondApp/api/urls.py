from django.urls import path

from .views import ProjectDetailView, ProjectListView, BondListView, BondDetailView


urlpatterns = [
    path('', BondListView.as_view()),
    path('<pk>', BondDetailView.as_view()),
    path('project', ProjectListView.as_view()),
    path('project/<pk>', ProjectDetailView.as_view())
]
