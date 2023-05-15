const getProductos = (req, res) =>{
    res.status(200).json({"Mensaje": "Hola Mundo!"})
}

const getProductosById = (req, res) => {
    const id = req.params.id  // params sirve para recuperar el id
    res.status(200).json({"Mensaje": `Consulto el producto ${id}`})
}


module.exports = {getProductos, getProductosById}