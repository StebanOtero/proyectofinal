function submitInfo() {
  const sku = document.getElementById('sku').value;
  const categoria = document.getElementById('categoria').value;
  const nombre = document.getElementById('nombre').value;
  const material = document.getElementById('material').value;
  const capacidad = document.getElementById('capacidad').value;
  const cuello = document.getElementById('cuello').value;
  const lote = document.getElementById('lote').value;
  const cantidad = document.getElementById('cantidad').value;
  const proveedor = document.getElementById('proveedor').value;
  const color = document.getElementById('color').value;

  if (sku.trim() === '' || categoria.trim() === '') {
    document.getElementById('mensaje').innerText = 'Por favor, complete todos los campos.';
    return;
  }

  const existeSKU = data.find(item => item.sku === parseInt(sku));
  if (existeSKU) {
    document.getElementById('mensaje').innerText = 'El SKU ya existe en la lista.';
    return;
  }

  const nuevoProducto = {
    sku: parseInt(sku),
    categoria: categoria,
    nombre: nombre,
    material: material,
    capacidad: capacidad,
    cuello: cuello,
    lote: lote,
    cantidad: parseInt(cantidad),
    proveedor: proveedor,
    color: color
  };

  data.push(nuevoProducto);
  document.getElementById('mensaje').innerText = 'Creando...';

  setTimeout(async () => {
    await delay(4000);
    window.location.href = 'index.html';
    document.getElementById('envaseForm').reset();
  }, 0);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// function renderizarTabla(data) {
//     const tableBody = document.getElementById('table-body');
//     tableBody.innerHTML = '';

//     data.forEach(producto => {
//         const row = tableBody.insertRow();
//         row.innerHTML = `
//             <td>${producto.sku}</td>
//             <td>${producto.categoria}</td>
//             <td>${producto.nombre}</td>
//             <td>${producto.material}</td>
//             <td>${producto.proveedor}</td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

function limpiarCampos() {
  document.getElementById('sku').value = '';
  document.getElementById('categoria').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('material').value = '';
  document.getElementById('capacidad').value = '';
  document.getElementById('cuello').value = '';
  document.getElementById('lote').value = '';
  document.getElementById('cantidad').value = '';
  document.getElementById('proveedor').value = '';
  document.getElementById('color').value = '';
}

function volverIndex() {
  window.location.href = 'index.html';
}