Warehouse Management App
This is a web application for managing warehouses. It allows users to view a list of warehouses, search for specific warehouses, and filter warehouses based on various criteria such as city, cluster, and available space. Users can also view and edit the details of a specific warehouse.

Technologies Used
React: Front-end JavaScript library for building user interfaces.
Redux: State management library for managing the application state.
React Router: Library for handling routing and navigation in the application.
Axios: Library for making HTTP requests to the server.
CSS: Stylesheets for styling the components.

Getting Started
Clone the repository:

git clone https://github.com/your-username/warehouse-management-app.git
Navigate to the project directory:


cd warehouse-management-app
Install the dependencies:

npm install
Start the development server:

npm start
The application will be running at http://localhost:3000.

Folder Structure

warehouse-management-app/
  ├── src/
  │   ├── components/
  │   │   ├── WarehouseList.js
  │   │   ├── WarehouseDetails.js
  │   │   ├── WarehouseForm.js
  │   │   ├── WarehouseCard.js
  │   ├── pages/
  │   │   ├── ListingPage.js
  │   │   ├── DetailsPage.js
  │   ├── redux/
  │   │   ├── actions.js
  │   │   ├── reducers.js
  │   │   ├── store.js
  │   ├── data/
  │   │   ├── warehouses.json
  │   ├── App.js
  │   ├── index.js
  ├── public/
  │   ├── index.html
  ├── package.json
  ├── package-lock.json
  ├── README.md
  
Features:
View a list of warehouses with warehouse cards.
Search warehouses by name.
Filter warehouses by city, cluster, and available space.
View detailed information about a specific warehouse.
Edit warehouse details, including name, city, cluster, space available, and live status.
Add custom fields to a warehouse.

Data Source:
The data for the warehouses is stored in the warehouses.json file under the data folder. You can add more warehouses or modify the existing ones in this file.

Customization:
You can customize the application by modifying the CSS files in the src folder to change the styling of the components.

Contributing:
Contributions to this project are welcome. If you find any bugs or have suggestions for new features, feel free to open an issue or submit a pull request.
