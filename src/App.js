//import expres
const express= require('express');
const app= express();

//setting port
app.set('port',process.env.POST||3000);

//Midleware
app.use(express.json());

//Importing route
const employeeRouters=require('./routes/EmployeeRoute');
//Route
app.use('/employee',employeeRouters);

app.use('/test',(req, res)=>{
    res.send("Test route");
});

app.use('/',(req,res)=>{
    res.send("hola mundo from Node.js SERVER");
});


app.listen(app.get('port'),()=>{
    console.log("Starting server NODE.js")
})