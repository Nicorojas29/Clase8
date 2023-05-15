const express = require('express')
const PORT = 3001

const app = express() /* ejecuto la funcion express */

app.get("/", (req, res)=> {
    res.status(200).json({"Mensaje": "Hola Mundo!"})
})


app.listen(PORT, ()=> (console.log(`A romperla en el puerto ${PORT}`))) // corro la aplicacion que corre en el puerto 3001

