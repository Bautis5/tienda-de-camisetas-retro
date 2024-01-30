let carrito = {};

function agregarAlCarrito(producto, precio, imagenUrl) {
    if (carrito[producto]) {
      carrito[producto].cantidad++;
    } else {
      carrito[producto] = { precio, cantidad: 1, imagen: imagenUrl };
    }
    actualizarCarrito();
  }
  

function actualizarCarrito() {
    const itemsCarrito = document.getElementById('itemsCarrito');
    itemsCarrito.innerHTML = ''; 
  
    Object.keys(carrito).forEach(producto => {
      const div = document.createElement('div');
      div.innerHTML = `
        <img src="${carrito[producto].imagen}" alt="${producto}" style="width:50px; height:auto;"> 
        <span>${producto} - Cantidad: ${carrito[producto].cantidad} - Precio: ${carrito[producto].precio}</span>
        <button onclick="quitarDelCarrito('${producto}')">Quitar uno</button>
      `;
      itemsCarrito.appendChild(div);
    });
  }
  

function vaciarCarrito() {
  carrito = {}; 
  actualizarCarrito();
}
function quitarDelCarrito(producto) {
    if (carrito[producto] && carrito[producto].cantidad > 0) {
        carrito[producto].cantidad--;
        if (carrito[producto].cantidad === 0) {
            delete carrito[producto];
        }
        actualizarCarrito();
    }
}

