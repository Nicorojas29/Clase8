const express = require ('express') // configuro la ruta con el router
const { getProductos, getProductoById, postProducto } = require('../controladores/productosController')

const productosRuta = express.Router()

productosRuta.get("/", getProductos)
productosRuta.get("/:id", getProductoById)
productosRuta.post("/", postProducto)
                 
module.exports = {productosRuta} // atributo y valor en un mismo nombre

