# code-assignment 
A coding challenge consisting of three phases migration,backend and frontend.
The application will display tree layout of the data having parent and their children.
If you will click on a parent node, then their child nodes will be highlighted. Also,
you will be able to see the node's extra information by clicking on it in a notification tab
and you can close the notification tab as well.

## Project setup
```
First clone the code by using the below mentioned command
git clone https://github.com/hemanshu14/ABN-AMRO-code-assignment.git
```

### Pre-requisites
```
You should have MYSQL installed in your system
You should have Node installed in your system
Make sure your MYSQL properties should be present in migration/database.json file
```


### To create database and migrate data into database
```
cd ABN-AMRO-code-assignment/migration
npm install   (To install all the dependencies)
Make sure your MYSQL properties should be present in database.json file
npm run migrate  (This will create database, table and insert data)
```

### To start front end application
```
cd ../backend
npm install  (To install all the dependencies)
node server.js  (To start the local server)
You can then access the application by http://localhost:3000/
```

### To do any changes in front end application
```
cd ../frontend
npm install  (To install all the dependencies)
npm run serve (To start front end application in standalone mode)

Do any additional required changes in the code
Then build the code using 'npm run build' command
Then copy the dist folder from frontend project and paste it in
public folder in backend project
Then run 'node server.js' to run backend and frontend application together.
```
