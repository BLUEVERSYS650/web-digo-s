const productos = [
    {
        nombre: "Pan de molde integral sin semillas",
        imagen: "assets/pan molde.jpeg",
        alt: "Pan de molde integral",
        precio: "$ 3.000"
    },
     {
        nombre: "Pan de molde integral con semillas",
        imagen: "assets/pan molde.jpeg",
        alt: "Pan de molde integral",
        precio: "$ 3.500"
    },
    {
        nombre: "Pan amasado Integral",
        imagen: "assets/pan amasado integral.jpeg",
        alt: "Pan amasado integral",
        precio: "$ 1.000"
    },
    {
        nombre: "Empanadas de Pino masa Integral",
        imagen: "assets/empanadas.jpeg",
        alt: "Empanada de Pino masa Integral",
        precio: "$ 1.000"
    },
    {
        nombre: "Queque casero",
        imagen: "assets/queque.jpeg", // Asume que tienes una imagen para el queque
        alt: "Queque de naranja y vainilla",
        precio: "$ 2.500"
    },
    {
        nombre: "Galletas de avena",
        imagen: "assets/galletas.jpeg", // Asume que tienes una imagen para las galletas
        alt: "Galletas de avena con chispas de chocolate",
        precio: "$ 800"
    }
];

const contenedorProductos = document.getElementById('lista-productos');

productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto-item');

    productoDiv.innerHTML = `
        <img class="foto_producto" src="${producto.imagen}" alt="${producto.alt}">
        <h2 class="texto_producto">${producto.nombre}</h2>
        <p class="valor_producto">${producto.precio}</p>
    `;

    // AÑADIR ESCUCHADOR DE EVENTOS A CADA IMAGEN
    const imagenProducto = productoDiv.querySelector('.foto_producto');
    imagenProducto.addEventListener('click', () => {
        mostrarImagenAmpliada(producto.imagen, producto.alt);
    });

    contenedorProductos.appendChild(productoDiv);
});

// FUNCIÓN PARA MOSTRAR LA IMAGEN AMPLIADA (MODAL)
function mostrarImagenAmpliada(src, alt) {
    // 1. Crear el fondo oscuro del modal
    const modalFondo = document.createElement('div');
    modalFondo.classList.add('modal-fondo'); // Clase para estilos del fondo

    // 2. Crear el contenedor de la imagen dentro del modal
    const modalContenido = document.createElement('div');
    modalContenido.classList.add('modal-contenido'); // Clase para estilos del contenido

    // 3. Crear la imagen grande
    const imagenAmpliada = document.createElement('img');
    imagenAmpliada.src = src;
    imagenAmpliada.alt = alt;
    imagenAmpliada.classList.add('imagen-ampliada'); // Clase para estilos de la imagen

    // 4. Crear un botón de cierre (opcional, pero mejora UX)
    const botonCerrar = document.createElement('span');
    botonCerrar.classList.add('modal-cerrar');
    botonCerrar.innerHTML = '&times;'; // Símbolo 'x'

    // 5. Ensamblar el modal
    modalContenido.appendChild(botonCerrar); // Agrega el botón de cerrar primero
    modalContenido.appendChild(imagenAmpliada);
    modalFondo.appendChild(modalContenido);

    // 6. Añadir el modal al body del documento
    document.body.appendChild(modalFondo);

    // 7. AÑADIR ESCUCHADORES PARA CERRAR EL MODAL
    // Cierra si se hace clic en el fondo oscuro
    modalFondo.addEventListener('click', (e) => {
        // Asegúrate de que el clic fue en el fondo, no en la imagen misma
        if (e.target === modalFondo) {
            document.body.removeChild(modalFondo);
        }
    });
    // Cierra si se hace clic en el botón 'x'
    botonCerrar.addEventListener('click', () => {
        document.body.removeChild(modalFondo);
    });
}

console.log('Productos cargados dinámicamente con JavaScript.');