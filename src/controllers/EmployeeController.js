const controllers={}

controllers.test=(req, res)=>{
    const data={
        name: "Byron Rea",
        age: "24",
        city: "Guaranda"
    }

    console.log("Ejecutado desde Controlador EMployee");
    res.json(data);
}

module.exports= controllers;