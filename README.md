# Capstone Project: Green Bonds
## Getting Started:

> Impact Green made with [Material UI's](https://material-ui.com) components, [React](https://reactjs.org) and Django.


## Runtime:

-   Nodejs 10.15.3 or up

-   npm 6.14.8 or up

-   Python 3.8.5 or up

## Web Framework

-   Reactjs version 16.13.1

-   Django version 3.1.1

## Packages Installation:

Create Python virtual environment for package management.
`pip install virtualenv`
`python3 -m venv env`

And install all backend packages:
`pip3 freeze > requirements.txt`

Frontend packages are referred in [package.json file](./package.json). When you run the following command, the frontend packages will be installed automatically.
`npm install`

## Running
-   Frontend
    cd frontend/sdg-project
    `npm install`

    Run UI frontend locally:
    `npm start`

    View on
    `localhost:3000`

-   Backend
    `python3 manage.py runserver`


## Documentation

The documentation for the React Material Kit is can be found [here](https://material-ui.com).

## Design Files

[Figma file](https://www.figma.com/file/bYmf0LYkPu8db0GXhpmUDT/Impact-Green?node-id=1177%3A216)


## Start the Program.
0. 
1. **Make sure python version in your mac is python3**. Install pip3.
```
python3 -m pip install --user --upgrade pip
```

2. Enter virtual environment.
In backend folder, enter the command below:
```
source env/bin/activate
```
3. Make migrations to database.
Go to the the project folder:
```
cd greenBondProject
```

Every time a change is made to the database, run the command line below:
```
python3 manage.py makemigrations
python3 manage.py migrate
```
Actually, the database will constantly update. Remember to run these commands everytime you pull new changes from git.

4. For backend, the APIs of Project and Bonds are provided. If run locally, the program provides APIs like below:

```
http://127.0.0.1:8000/api/bond
http://127.0.0.1:8000/api/bond/1

http://127.0.0.1:8000/api/project
http://127.0.0.1:8000/api/project/1
```
5. For frontend, installation and start





## File Structure


## Further:

-  Issuer sign up

-  Bond issuer input and filtering select
-  Bond rating data
-  Different bond enterprises pages (Water, Power, WwasteWater)
-  Responsive web design
-  Search function
