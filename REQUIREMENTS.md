
==> API endpoints :-

    --> localhost:3000/users        -->     method get  --> should return all users [token required] 
    --> localhost:3000/users/:id    -->     method get  --> should return one user [token required]
    --> localhost:3000/users        -->     method post  --> should create one user --> set the body obj 
    --> localhost:3000/users/signin -->     method post  --> should auth the user   --> set the body obj

        --> body :-
            {
                "firstname":"Ahmed",        // for example
                "lastname":"Youssef",       // for example
                "password":"2192000"        // for example
            }


    --> localhost:3000/products       --> method get  --> should return all products
    --> localhost:3000/products/:id   --> method get  --> should return one product
    --> localhost:3000/products       --> method post  --> should create a product [token required] --> set the body obj
    
        --> body :-
            { 
                "name":"cup",   // for example
                "price":50      // for example
            }

    
    -->localhost:3000/orders        --> method post  ---> should create order [token required] --> set the body obj

        --> body :-
            {
                "status":"active",  // for example
                "user_id":1         // for example
            }
        
    -->localhost:3000/orders        --> method get  ---> should return orders maked by the user [token required]
                                    --> set the body obj    
        --> body :-
            {
                "user_id":1         // for example
            }

    -->-->localhost:3000/orders/:orderId/products        --> method post  ---> should add products to the order [token required]
                                                         --> set the body obj 
        --> body :-
            {
                "quantity":5,  // for example
                "product_id":1         // for example
            }







<!-- ----------------------------------------------------------------------------------------------------------------------- -->
# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)




