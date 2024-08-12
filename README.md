# PayPalApi
make query Strings for paypal 

Set the variables in a .env file (see .env.example)

start the server with: node index.js

with the routes: /pass-check: if it get the password it generate a JWT that last for 24 hours

example:
  request:
     curl -X POST -H "Content-Type: application/json" -d '{ "password": "password" ,"amount": 5}' http://localhost:3000/paypal 
  response:
    

