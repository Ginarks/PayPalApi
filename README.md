# PayPalApi
make query Strings for paypal 

Set the variables in a .env file (see .env.example)

start the server with: node index.js

with the routes: /pass-check: if it get the password it generate a JWT that last for 24 hours

example:
  request:
     curl -X POST -H "Content-Type: application/json" -d '{ "password": "password" ,"amount": 5}' http://localhost:3000/paypal 
  response:
    {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeVN0cmluZyI6Imh0dHBzOi8vd3d3LnBheXBhbC5jb20vY2dpLWJpbi93ZWJzY3I_Y21kPV94Y2xpY2smYnVzaW5lc3M9ZXhhbXBsZSU0MG1haWwuY29tJml0ZW1fbmFtZT1hbitpdGVtJml0ZW1fbnVtYmVyPTEmYW1vdW50PTUmY3VycmVuY3lfY29kZT1FVVImcmV0dXJuPWh0dHAlM0ElMkYlMkZsb2NhbGhvc3QlMkZzdWNjZXNzLnBocCZjYW5jZWxfcmV0dXJuPWh0dHAlM0ElMkYlMkZsb2NhbGhvc3QlMkZjYW5jZWwucGhwJm5vdGlmeV91cmw9aHR0cCUzQSUyRiUyRmxvY2FsaG9zdCUyRnBheW1lbnQucGhwIiwiaWF0IjoxNzIzNDgyNjU4LCJleHAiOjE3MjM0ODMyNTh9.2IE4TLoFkE07AMAbsliNpOJOvXVOQB2Anxd8pVXxDqI"}

you can use https://jwt.io/ to decode the token 

