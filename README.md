Getting Started:

There are two main folders in the project (client and server) client is the frontend and server is the backend. To get started with this I used MySQL workbench as the database to test things. 
Everything in this is subject to change depending on how people want to do things for their part I just started it this way because this is a way I know to do this.

Required installations:

Node.js:
Link shows how to install. 
https://nodejs.dev/en/download/

For the following, download in the specified folder. If you are using vscode use the terminal in vscode, cd into the folder, and install the packages using "npm install *insertpackagename*"

In server folder:
- cors, express, mysql2, nodemon, sequelize, sequelize-cli

In client folder:
- axios, formik

If I missed anything let me know, you will get errors when trying to test the code without all the packages.

##########################################

Running the project:
If you are using vscode open a split terminal. cd into the server folder in one terminal and run "node index.js" to start the server, and in the other terminal cd into the client folder and run "npm start".
This starts the server and webpage.
Both should be running for the project to function properly.
When you make changes make sure to save the file and refresh the webpage to see changes.
