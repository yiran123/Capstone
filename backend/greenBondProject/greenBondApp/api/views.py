from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.decorators import api_view
from django.http import JsonResponse
import json

from greenBondApp.models import Project, Bond, Contractor
from .serializers import ProjectSerializerForDetail, ProjectSerializer, BondSerializerForList, BondSerializerForDetail, \
    ProjectSerializerForCreation


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


@api_view(['POST'])
def create_data(request):
    if request.method == 'POST':
        print('json array: -------7')
        print(request.data)

        for json_obj in request.data:
            contractor_name = json_obj['Contractor']
            print("contractor name: " + contractor_name)

            query = Contractor.objects.filter(name=contractor_name)
            if not query:
                # TODO: throw error.
                print('no contractor:')
                print(contractor_name)
            else:
                contractor = query[0]
                project_serializer = ProjectSerializerForCreation(data=json_obj)
                if project_serializer.is_valid():
                    # save project.
                    project_serializer.save(contractor=contractor)
                else:
                    print('json is not valid!')

        # contractor_name = request.data['Contractor']
        # query = Contractor.objects.filter(name=contractor_name)
        # if not query:
        #     # TODO: throw error.
        #     print('no such contractor')
        # else:
        #     request_data = request.data
        #     #del request_data['Contractor']
        #     #del request_data['Enterprise']
        #     #del request_data['SDG']

        #     contractor = query[0]  
        #     project_serializer = ProjectSerializerForCreation(data=request_data)

        #     if project_serializer.is_valid():
        #         # save project.
        #         project_serializer.save(contractor=contractor)

    return JsonResponse({'errorMessage': 'no error'})  