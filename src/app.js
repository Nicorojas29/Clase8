const express = require('express')
const { productosRuta } = require('./rutas/productosRuta')
const PORT = 3001

const app = express() /* ejecuto la funcion express */

app.use(express.json()) // es una linea para poder trabajar con json 

app.use("/api/productos", productosRuta) // app.use(productosRuta) me hace la importacion del archivo const productosRuta



app.listen(PORT, ()=> (console.log(`A romperla en el puerto ${PORT}`))) // corro la aplicacion que corre en el puerto 3001

