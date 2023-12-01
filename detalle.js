// Obtener SKU del producto
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sku = urlParams.get('sku');

const skuInput = document.getElementById('sku');
const categoriaInput = document.getElementById('categoria');
const nombreInput = document.getElementById('nombre');
const materialInput = document.getElementById('material');
const capacidadInput = document.getElementById('capacidad');
const cuelloInput = document.getElementById('cuello');
const loteInput = document.getElementById('lote');
const cantidadInput = document.getElementById('cantidad');
const proveedorInput = document.getElementById('proveedor');
const colorInput = document.getElementById('color');

// Función para buscar el producto por SKU
function buscarProductoPorSKU(sku) {
    const producto = data.find(item => item.sku === parseInt(sku)); // Encontrar el producto por SKU

    if (producto) {
        // Llenar los campos del formulario con la información del producto encontrado
        skuInput.value = producto.sku;
        categoriaInput.value = producto.categoria;
        nombreInput.value = producto.nombre;
        materialInput.value = producto.material;
        capacidadInput.value = producto.capacidad;
        cuelloInput.value = producto.cuello;
        loteInput.value = producto.lote;
        cantidadInput.value = producto.cantidad;
        proveedorInput.value = producto.proveedor;
        colorInput.value = producto.color;
    } 
}
buscarProductoPorSKU(sku);

function updateForm() {
    const index = data.findIndex(item => item.sku === parseInt(sku)); // Encuentra el índice del producto por SKU

    if (index !== -1) {
        // Actualizar los valores del producto en el array 'data' con los valores ingresados en los inputs
        data[index].sku = skuInput.value;
        data[index].categoria = categoriaInput.value;
        data[index].nombre = nombreInput.value;
        data[index].material = materialInput.value;
        data[index].capacidad = capacidadInput.value;
        data[index].cuello = cuelloInput.value;
        data[index].lote = loteInput.value;
        data[index].cantidad = cantidadInput.value;
        data[index].proveedor = proveedorInput.value;
        data[index].color = colorInput.value;

        //simulacion de retraso por segundos antes de redirigir a la vista principal (index.html)
        const delay = 2000; 
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });

        // Una vez transcurridos los 2 segundos, redirecciona a la vista de lista (index.html)
        promesa.then(() => {
            window.location.href = 'index.html'; // Cambia 'index.html' vista principal
        });
    }
}
function atrasForm() {
    window.location.href = 'index.html'; // Cambia 'index.html' vista principal
}

