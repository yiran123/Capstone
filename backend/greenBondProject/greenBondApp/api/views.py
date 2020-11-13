from rest_framework.generics import ListAPIView, RetrieveAPIView

from greenBondApp.models import Project, Bond
from .serializers import ProjectSerializerForDetail, ProjectSerializer, BondSerializerForList, BondSerializerForDetail


class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectDetailView(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializerForDetail


class BondListView(ListAPIView):
    queryset = Bond.objects.all()
    serializer_class = BondSerializerForList


class BondDetailView(RetrieveAPIView):
    queryset = Bond.objects.all()
    serializer_class = BondSerializerForDetail
 