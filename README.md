# Inventory Management System
This Inventory Management System is a web application developed as a group senior project. It is built using React.js, Material-UI, Node.js, Express, and MySQL. The system allows users to sign in with different roles, such as manager or associate. Managers have full control over the inventory, including the ability to add, delete, and edit items. Associates, on the other hand, have read-only access and can only view the inventory.

## Features
- User Authentication: The system provides a user authentication mechanism where users can sign in with their credentials. The authentication process ensures that only authorized users can access the system.

- User Roles: The system supports two roles: manager and associate. Managers have additional privileges, such as adding, deleting, and editing items in the inventory, while associates have read-only access.

- Inventory Management: Managers can perform various operations on the inventory, including adding new items, deleting existing items, and editing item details. These actions help keep the inventory up to date.

- Categories Table: The system includes a categories table that organizes items into different categories. This feature allows for efficient organization and categorization of inventory items.

- Products Table: The products table displays all the items in the inventory along with their details, such as name, description, quantity, and price. This table provides a comprehensive view of the inventory.

- Edit History Table: The edit history table keeps track of changes made to the inventory. It records details such as the user who made the change, the timestamp of the change, and the specific action performed.

- Printable View: The system includes a page that allows users to generate printable reports of the information from the categories table, products table, and edit history table. This feature facilitates the creation of physical copies for record-keeping purposes.

## Installation
To set up the Inventory Management System on your local machine, follow these steps:

Clone this repository or download the source code.
Navigate to the project directory.
Install the required dependencies for the frontend and backend by running the following command:
shell
Copy code
npm install
Configure the database connection in the backend. Update the MySQL database credentials in the configuration files to ensure proper connectivity.

Run the backend server using the following command:

Run "node index.js" in the backend directory to start the server.
Then navigate to the frontend directory and start the React development server by running "npm run start"
Access the application by visiting http://localhost:3000 in your web browser.

## Usage
Once the application is set up and running, users can access the system and sign in with their credentials. Depending on their role, they will have different permissions and access levels.

- Managers: Managers have full control over the inventory. They can add new items, delete existing items, and edit item details. Managers can also view the categories table, products table, edit history table, and generate printable reports.

- Associates: Associates have read-only access to the inventory. They can view the categories table, products table, edit history table, and generate printable reports. However, they cannot add, delete, or edit items.
