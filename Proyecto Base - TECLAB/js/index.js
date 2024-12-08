const productos = []
const URL = "js/productos.json"

const container = document.querySelector('div.container')

retornarCardHtml = (producto) => {
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="producto-${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('button.button-outline.button-add');
    if (botonesAgregar !== null) {
        botonesAgregar.forEach((button) => {
            // Cambiamos el listener para usar el id del botón
            button.addEventListener('click', (e) => {
                // Extraemos el ID del producto desde el ID del botón
                const frutaId = e.target.id.split('-')[1]; // "producto-1" -> "1"
                agregarAlCarrito(frutaId);
            })
        })
    }
}

const cargarProductos = (array) => {
    if(array.length > 0){
        array.forEach(producto => {
            container.innerHTML += retornarCardHtml(producto)
        });
        activarClickEnBotones()
    }
}

const obtenerProductos = () => {
    fetch(URL)
    .then((Response) => Response.json())
    .then((data) => productos.push(...data))

    .then(() => cargarProductos(productos))
}

//cargarProductos(productos)

obtenerProductos()