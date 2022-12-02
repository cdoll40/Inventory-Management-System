Inventory Management System

A full stack web application used to view and manage a store's inventory. Based on the role of the user logged into the system different permissions are granted. Store associates can only view the inventory while store managers can edit the inventory. Updates can be made to the inventory. Products can be added and deleted products must be justified.

##########################################

How to setup the development environment:

Getting Started:

There are two main folders in the project (client and server) client is the frontend and server is the backend. To get started with this I used MySQL workbench as the database to test things. 

Required installations:

MySQL Workbench:
Workbench needs to be installed and the MySQL workbench server must be running to interact with data in the database.

Node.js:
Link shows how to install. 
https://nodejs.dev/en/download/

For the following, download in the specified folder. If you are using vscode use the terminal in vscode, cd into the folder, and install the packages using "npm install *insertpackagename*"

In server folder:
- cors, express, mysql2, nodemon, sequelize, sequelize-cli, bcrypt, body-parser, cookie-parser

In client folder:
- axios, @mui/material @emotion/react @emotion/styled

##########################################

Running the project:

If you are using vscode open a split terminal. Change directory ("cd") into the server folder in one terminal and run "node index.js" to start the server, and in the other terminal "cd" into the client folder and run "npm start". Press "ctrl+c" in the terminals make it stop running.
This starts the server and webpage.
Both should be running for the project to function properly.

When you make changes to the client code make sure to save the file and refresh the webpage to see changes.
When you make changes to the server code make sure to save the file and restart the node server to see changes.
