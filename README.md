# Capstone Project: Green Bonds

## Start the Program.
0. **Make sure python version in your mac is python3**. Install pip3.
```
python3 -m pip install --user --upgrade pip
```

1. Enter virtual environment.
In backend folder, enter the command below:
```
source env/bin/activate
```
2. Make migrations to database.
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

3. For backend, the APIs of Project and Bonds are provided. If run locally, the program provides APIs like below:

```
http://127.0.0.1:8000/api/bond
http://127.0.0.1:8000/api/bond/1

http://127.0.0.1:8000/api/project
http://127.0.0.1:8000/api/project/1
```
4. For frontend, installation and start


Impact Green made with [Material UI's](https://material-ui.com) components, [React](https://reactjs.org)

## Getting Started:
# Prerequisties:
nodejs version10.15.3 or up
npm version 6.14.8 or up
Web framework
Reactjs version 16.13.1

# Installation:
cd frontend/sdg-project
`npm install`

Run UI frontend locally:
`npm start`

View on
`localhost:3000`

## Documentation

The documentation for the React Material Kit is can be found [here](https://material-ui.com).

## Design Files

[Figma file](https://www.figma.com/file/bYmf0LYkPu8db0GXhpmUDT/Impact-Green?node-id=1177%3A216)


File Structure


## Wishlist:

Issuer sign up

-  Bond issuer input and filtering select
-  Bond rating data
-  Different bond enterprises pages (Water, Power, WwasteWater)
-  Responsive web design
-  Search function through the whole platform