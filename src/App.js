//import expres
const express= require('express');
const app= express();

//setting port
app.set('port',process.env.POST||3000);

//Midleware
app.use(express.json());
app.use('/',(req,res)=>{
    res.send("hola mundo form Node.js SERVER");
});

app.listen(app.get('port'),()=>{
    console.log("Starting server NODE.js")
})