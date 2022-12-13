# storefront-backend
building e-commerce api

==> make sure to install the package in package.json :-
    --> $ npm intall 

==> my environment variables are as following :- 
    - PORT=3000
    - DB_SERVER_HOST=localhost
    - DB_NAME_DEV=e-commerce
    - DB_NAME_TEST=commerce_test
    - DB_SERVER_USER=postgres
    - DB_SERVER_PASSWORD=<make sure to put your own password>
    - DB_SERVER_PORT=5432
    - PEPPER=JUST_A_STRING
    - SALT=10
    - TOKEN_SECRET=01230123
    - NODE_ENV=dev

==> I use posgresql version (postgresql-15.1-1-windows-x64) in my local machine.

==> please, make sure to install postgre in your local machine 

==> how to connect to db :- 

    --> after your installation just run the followin command :-
        --> $ npm run createDB  // this will create e-commerce DB 
        --> $ npm run test      // this will run the tests 
        --> npm run dbMigrateup     // to run the migration up 
        --> npm run dbMigratedown     // to run the migration down 

        --> npm run start       // to compile typescript to commonjs and run the server then you can test the end point in thunder
                                    or postman
        -->npm run lint         // to check if there are errors in the code 
        --> npm run prettier    // to format the code
        --> npm run nodemon     // to keep watching the server
        
