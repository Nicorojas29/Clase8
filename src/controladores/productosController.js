const productos = require('../../data/productos.json') // importo los productos
const tipoProducto = require('../../data/tipoProducto.json') // importo para buscar los tipo de prod

const getProductos = (req, res) => {
    res.status(200).json({"Mensaje": "Hola Mundo!"})
}

const getProductoById = (req, res) => {
    const id = req.params.id  // params sirve para recuperar el id
    const idx = productos.findIndex ( prod => prod.idProducto ==id)
    if (idx >= 0) {  // si es mayor a 0 el producto existe
        const idxtp = tipoProducto.findIndex(  // para saber si tiene categoria y esta habilitada
            tp => tp.idTipoProducto == productos[idx].idTipoProducto && tp.enable)
        if (idxtp >= 0) {
                const producto = productos[idx]
                const tipo = tipoProducto[idxtp]
                delete producto.idTipoProducto
                delete tipo.enable
                res.status(200).json({...producto, tipo})
         } else {
            res.status(404).json({mensaje:`No se encontro o esta deshabiliatdo el tipo de producto asociado ${productos[idx].idTipoProducto}`})
         }
    } else {
        res.status(404).json({mensaje:`No se encontro el producto ${id}`})
    }
}
 
const postProducto = (req, res) => {
    const bodyRecibido = req.body  //lo que recibo en el req.body es el objeto que voy a recibir
    const idxtp = tipoProducto.findIndex(  // para saber si tiene categoria y esta habilitada
        tp => tp.idTipoProducto==bodyRecibido.idTipoProducto && tp.enable)
    if ( idxtp >=0 ) {
        let maxId = 1
        if (productos.length > 0)  {  //length es una propiedad para ver si esta vacio
            const idsProducto = productos.map (p => p.idProducto) 
            maxId = Math.max(...idsProducto) + 1 
        }
        const producto =  { 
            idProducto: maxId,
            descripcion: bodyRecibido.descripcion,
            stock: bodyRecibido.stock,
            idTipoProducto: bodyRecibido.idTipoProducto
        }
        productos.push(producto)  // push para agregar un elemento dentro de la coleccion de productos
        res.status(201).json(producto)
    } else {
        res.status(400).json({mensaje: `Error en el codigo en el tipo de producto. No existe el codigo ${bodyRecibido.idTipoProducto}`})
    }
}

module.exports = {getProductos, getProductoById, postProducto}