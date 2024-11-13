# Project Report and Documentation

## Project Title: **E-Commerce Platform Frontend**

## Project Summary

This project is a frontend implementation of an e-commerce platform, built using **React** and **React Router** for routing, along with several additional libraries to enhance functionality and improve the user experience. This platform allows customers to browse products, manage their shopping carts, view individual product details, and manage their profiles. It also includes an **Admin** interface for product, user, and order management.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Libraries Used](#libraries-used)
3. [Folder Structure and Overview](#folder-structure-and-overview)
4. [Component Documentation](#component-documentation)
5. [Context and State Management](#context-and-state-management)
6. [API Integration](#api-integration)
7. [Testing](#testing)
8. [Potential Improvements](#potential-improvements)
9. [Conclusion](#conclusion)


## 1. Project Setup

Ensure that you have **Node.js** installed (version 14+ is recommended).

### Steps to Install

1. Clone the repository:
   git clone <your-repo-url>
   

2. Navigate to the project folder:
   cd frontend
   

3. Install all dependencies:
   npm install
  

4. Start the development server:
   npm start
 

This will start the application on `http://localhost:3000`.


## 2. Libraries Used

This project leverages the following libraries, along with their installation commands:

1. **React** - Core framework.
  npx create-react-app <project-name>


2. **React Router** - For routing and navigation.
  npm install react-router-dom


3. **Axios** - For API requests.
   npm install axios


4. **Context API** - Used for global state management, no additional installation needed as it is included in React.

5. **React Testing Library and Jest** - For testing components.
  npm install --save-dev @testing-library/react @testing-library/jest-dom
   

6. **Web Vitals** - For measuring performance.
   npm install web-vitals
   

7. **dotenv** - Used for managing environment variables.
   npm install dotenv
   


## 3. Folder Structure and Overview
frontend/
├── src/
│   ├── components/       # Reusable components
│   │   └── Navbar.jsx
│   ├── context/          # Context for global state
│   │   └── GeneralContext.js
│   ├── pages/            # Main page components
│   │   ├── Home.jsx
│   │   ├── Authentication.jsx
│   │   ├── customer/     # Customer-specific pages
│   │   │   ├── Profile.jsx
│   │   │   ├── Cart.jsx
│   │   └── admin/        # Admin-specific pages
│   │       ├── Admin.jsx
│   │       ├── AllProducts.jsx
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
└── public/
    └── index.html


- **components/** - Contains reusable components like `Navbar`.
- **context/** - Contains global state management using React’s Context API.
- **pages/** - Contains main pages for the app, divided into **customer** and **admin** functionalities.


## 4. Component Documentation

### `Navbar.jsx`
This component is a reusable navigation bar. It utilizes `useNavigate` from React Router for navigation to different routes such as `/profile`, `/cart`, and `/admin`.

### `Home.jsx`
Displays the homepage with general product categories or featured products. Links to different product categories using the router.

### `Authentication.jsx`
Handles user authentication (login and registration).

### `Profile.jsx` (Customer)
Displays the customer’s profile, including order history and personal information. Integrates with `useContext` for accessing global user data.

### `Cart.jsx` (Customer)
Allows users to view items in their cart and proceed to checkout. Uses Context API for cart state management.

### `Admin.jsx`
Admin dashboard that links to all administrative functionalities.

### `AllProducts.jsx` (Admin)
Displays all products in the database with options to edit or delete each product.


## 5. Context and State Management

### `GeneralContext.js`
This file in the `context` folder creates a React Context to manage global states, such as:
- User authentication state
- Cart items
- Any other global settings or data

### Usage
Wrap the `App` component in `GeneralContextProvider` (in `index.js`) to make the global state accessible across the application.


## 6. API Integration

APIs are managed using `axios`. The base URL is defined in each component where it’s used, making it possible to switch between development and production URLs if needed. 

### Example
In `Product.js`:

useEffect(() => {
  axios.get('http://localhost:6001/api/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}, []);




## 7. Testing

Tests are written using **Jest** and **React Testing Library**.

- **App.test.js** - A basic test to check that the app renders.
- **setupTests.js** - Configures Jest with DOM matchers from `@testing-library/jest-dom`.

To run tests:
npm test



## 8. Potential Improvements

- **Error handling**: Add comprehensive error handling to provide feedback to users during API failures.
- **User roles and permissions**: Improve the admin and user separation, with more robust access controls.
- **Styling**: Use a CSS preprocessor like SASS or a library like Tailwind CSS for better style management and design consistency.
- **Environment Variables**: Use `.env` files to manage API URLs and other configurations more effectively.


## 9. Conclusion

This frontend project provides a robust starting point for an e-commerce platform, with customer and admin functionalities clearly separated and modularized. It is designed to be scalable and flexible, supporting future feature additions and easy maintenance. 

By following this documentation, developers can easily set up, understand, and contribute to the project.
