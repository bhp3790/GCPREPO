# Endpoints :
1.https://sturdy-sentry-243203.appspot.com/getcustomers
This endpoint provides all customer details which are stored in database.
Input:
https://sturdy-sentry-243203.appspot.com/getcustomers
Output:
[{"firstName":"Hardik","lastName":"Patel","email":"hardik@gmail.com"},{"firstName":"Rajesh","lastName":"Kumar","email":"rajesh@outlook.com"}]


2.https://sturdy-sentry-243203.appspot.com/getcustomer?id=<id_no>
This endpoint provides the requested customer details.
Input :
https://sturdy-sentry-243203.appspot.com/getcustomer?id=5714080711049216
Output:
[{"firstName":"Rajesh","lastName":"Kumar","email":"rajesh@outlook.com"}]


3.https://sturdy-sentry-243203.appspot.com/addcustomer
This is post based request endpoint to add new customer details into database.
Input : 
 {
  "firstName": "Andy"
  "lastName": "Kumar",
  "email":"andy@gmail.com",
 }
Output:
[{"firstName":"Andy","lastName":"Kumar","email":"andy@gmail.com"}]
