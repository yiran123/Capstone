from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.decorators import api_view
from django.http import JsonResponse

from greenBondApp.models import Project, Bond, Contractor, SDG
from .serializers import ProjectSerializerForDetail, ProjectSerializer, BondSerializerForList, BondSerializerForDetail, \
    ProjectSerializerForCreation, BondSerializerForCreation


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


def create_projects(projects):
    for project in projects:
        contractor_name = project['Contractor']
        
        print("contractor name: " + contractor_name)

        query = Contractor.objects.filter(name=contractor_name)
        
        if not query:
            # TODO: throw error.
            print('no contractor:')
            print(contractor_name)
        else:
            contractor = query[0]
            project_serializer = ProjectSerializerForCreation(data=project)
            if project_serializer.is_valid():
                # save project.
                project_serializer.save(contractor=contractor)
            else:
                print(project)
                print(': project is not valid!')


def create_bonds(bonds):
    for bond in bonds:
        bond_serializer = BondSerializerForCreation(data=bond)
        if bond_serializer.is_valid():
            bond_serializer.save()
        else:
            print('bond validation: --------')
            print(bond_serializer.error_messages)
            print(bond)
            print(': bond is not valid!')


@api_view(['POST'])
def create_data(request):
    if request.method == 'POST':
        print('json array: -------7')
        #print(request.data)

        projects = request.data['projects']
        bonds = request.data['bonds']

        create_projects(projects)
        create_bonds(bonds)
        #print(bonds)

        # for json_obj in request.data:
        #     contractor_name = json_obj['Contractor']
            
        #     print("contractor name: " + contractor_name)

        #     query = Contractor.objects.filter(name=contractor_name)
            
        #     if not query:
        #         # TODO: throw error.
        #         print('no contractor:')
        #         print(contractor_name)
        #     else:
        #         contractor = query[0]
        #         project_serializer = ProjectSerializerForCreation(data=json_obj)
        #         if project_serializer.is_valid():
        #             # save project.
        #             project_serializer.save(contractor=contractor)
        #         else:
        #             print('json is not valid!')

    return JsonResponse({'errorMessage': 'no error'})
