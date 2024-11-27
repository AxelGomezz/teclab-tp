const carritoFrutas = []

const agregarAlCarrito = (frutaId)=>{
    if(frutaId > 0){
        let productoEncontrado = productos.find((producto)=> producto.id === parseInt(frutaId))
        if(productoEncontrado !== undefined){
            carritoFrutas.push(productoEncontrado)
            console.table(carritoFrutas)
        }
    }
}
