# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select productname, categoryname from products join categories on products.categoryid = categories.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select orderid, shippername, orderdate from orders join shippers on orders.shipperid = shippers.shipperid where orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select productname, quantity from orderdetails join products on orderdetails.productid = products.productid where orderdetails.orderid = 10251 order by productname asc

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select orderid, customername, lastname as 'EmployeeLastName' from orders join customers on orders.customerid = customers.customerid join employees on orders.employeeid = employees.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select categoryname, count(products.categoryid) as 'Count' from categories join products on products.categoryid = categories.categoryid group by categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

select orderid, count(productid) as "ItemCount" from orderdetails group by orderid
