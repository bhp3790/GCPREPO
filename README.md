# Endpoints :

1.https://sturdy-sentry-243203.appspot.com/getcustomers
This endpoint provides all customer details which are stored in database.
Input:
 https://sturdy-sentry-243203.appspot.com/getcustomers
Output:
 [{"last_name":"Patel","first_name":"Hardik","email":"hardik@gmail.com"},{"email":"ramu@gmail.com","last_name":"Babu","first_name":"Ramu"},  {"last_name":"Kumar","first_name":"Rahul","email":"rahul@gmail.com"},{"last_name":"Babu","first_name":"Raju","email":"raju@gmail.com"}]


2.https://sturdy-sentry-243203.appspot.com/getcustomer?id=<id_no>
This endpoint provides the requested customer details.
Input :
 https://sturdy-sentry-243203.appspot.com/getcustomer?id=5633378543992832
Output:
 [{"first_name":"Ramu","last_name":"Babu","email":"ramu@gmail.com"}]


3.https://sturdy-sentry-243203.appspot.com/addcustomer
This is post based request endpoint to add new customer details into database.
Input : 
 {
  "first_name": "Raju"
  "last_name": "Babu",
  "email":"raju@gmail.com",
 }
Output:
 [{"first_name":"Raju","last_name":"Babu","email":"raju@gmail.com"}]
