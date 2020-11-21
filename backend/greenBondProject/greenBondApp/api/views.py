from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.decorators import api_view
from django.http import JsonResponse

from greenBondApp.models import Project, Bond, Contractor
from .serializers import ProjectSerializerForDetail, ProjectSerializerForList, BondSerializerForList, BondSerializerForDetail, \
    ProjectSerializerForCreation, BondSerializerForCreation, FinancialInfoSerializerForCreation


class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializerForList


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


def create_financial_info(financial_info):
    for financial_data in financial_info:
        # TODO: if bond and projects does not exist in json.
        bond_name = financial_data['bond']
        projects = financial_data['projects']

        bond_query = Bond.objects.filter(name=bond_name)
        if not bond_query:
            print('no such bond:')
            print(bond_name)
            continue

        bond = bond_query[0]
        for project_info in projects:
            # TODO: 
            project_name = project_info['project']

            project_query = Project.objects.filter(name=project_name)
            if not project_query:
                print('no such project:')
                print(project_name)
                continue

            project = project_query[0]
            financial_info_serializer = FinancialInfoSerializerForCreation(data=project_info)
            if financial_info_serializer.is_valid():
                financial_info_serializer.save(bond=bond, project=project)
            else:
                print('financial info not valid:')
                print(financial_info_serializer.error_messages)


@api_view(['POST'])
def create_data(request):
    if request.method == 'POST':
        print('json array: -------7')
        print(request.data)
        print('json array: -------7')

        projects        = request.data['projects']
        bonds           = request.data['bonds']
        financial_info  = request.data['financialInfo']

        create_projects(projects)
        create_bonds(bonds)
        create_financial_info(financial_info)

    return JsonResponse({'errorMessage': 'no error'})
