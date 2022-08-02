**Application made for ioasys selective process

# ERP

Backend code for a ERP system

Here is a collection with one test per route: [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/22481545-92cfaf49-c2b9-45a2-aa52-acad6f3eec51?action=collection%2Ffork&collection-url=entityId%3D22481545-92cfaf49-c2b9-45a2-aa52-acad6f3eec51%26entityType%3Dcollection%26workspaceId%3D1e745637-312a-4f29-8747-b6483abd3b8e)

## About

This is a backend code that has the following functions:

 - SignUp and Login routes for users
 - Hiring and Firing of employees
 - Creation of a company in the database and getting it's balance
 - Getting employees of a company, as well as getting the payroll
 - Paying the employees based on the payroll and having that be reflected on the company balance
 - Creating branches for a company, as well as getting them with their sales of not, or getting a specific branch information
 - Create and delete products tied to a branch
 - Update the names and price of a product, as well as changing it's stock
 - Get quantity of itens by company or by branch
 - Get items based on name and company
 - Post sales with it being reflected on the company balance
 - Get sales by product

## Technologies

![node js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) 

## How to run localy

1. Clone this repository
2. Open it in your preferred coding platform
3. Run the npm i command to install dependencies
4. Create a .env file based around the .env.example
5. Run npx prisma dev in order to create database locally
6. Run npm run start to start running the app
7. Use thunderclient or similar to try out the paths
8. Enjoy 🙂
