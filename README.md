# Ecommerce-Store
Angular Course at SoftUni - Final Project

This is an ecommerce store. The user has the ability 
to authenticate and do plenty of actions like adding products, 
increse or decrease their quantity and get useful information 
about their purchases and profile.

# Structure

* /src/assets

Contains all the images and static files needed for the app to run properly.

* src/app/auth

A module which includes the needed login for a user to authenticate

* src/app/catalogue

The products which the store offers to its customers can be found in 
the catalogue component and module. This module is responsible for
giving more details to the customers about the items.

* src/app/core

Essential components like the nav bar and the footer are included in it.
They have links and paths to the other parts of the application which makes
it possible for the user to check out the rest of the project.

* src/app/profile

It provides details about the user account

* src/app/purchase

This is a module which takes care of the purchases and desired products

# Endpoints

* Register User

https://localhost:3000/api/register

* Login User

https://localhost:3000/api/login

* Get User

http://localhost:3000/api/users/profile
