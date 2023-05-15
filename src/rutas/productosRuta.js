const express = require ('express') // configuro la ruta con el router
const { getProductos, getProductosById } = require('../controladores/productosController')

const productosRuta = express.Router()

productosRuta.get("/", getProductos)
productosRuta.get("/:id", getProductosById)
                 
module.exports = {productosRuta} // atributo y valor en un mismo nombre

