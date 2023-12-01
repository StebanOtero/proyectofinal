## Proyecto Final – Desarrollo de aplicaciones web.
Esteban
<p>
Este proyecto final de asignatura busca fomentar la creatividad, innovación y la resolución de problemas, al tiempo que ofrece una visión de los procesos de desarrollo de software y sus implicaciones en un contexto educativo.

La línea de trabajo utilizada en este proyecto es una línea de trabajo un poco más industrial, en este caso se utiliza una base de datos de 50 productos, todo ellos envases los cuales cuentan con propiedades como un sku, nombre, categoría, material, capacidad, cuello, proveedor, lote, cantidad y color.

Dentro de este orden de ideas, el presente proyecto busca la codificación de un sistema el cual sea capaz de almacenar los 50 elementos anteriormente mencionados, con el fin del poder visualizarlos en una vista o tabla la cual podrá contar con las opciones de filtrado, eliminado, actualización, además de la creación de nuevos elementos mediante interacción del usuario con diferentes vistas.
</p>

##### Documentos HTML
<ul>
<li>index.html</li>
<li>formulario.html</li>
<li>detalle.html</li>
</ul>

##### Documentos javaScript
<ul>
<li>scrpit.js</li>
<li>formulario.js</li>
<li>detalle.js</li>
<li>data.js</li>
</ul>

##### Documentos css
<ul>
<li>styles.css</li>
<li>formularioStyles.css</li>
</ul>

### index.html
<p>
En el documento index.html codificaremos toda la estructura grafica de nuestra primera vista y con la cual el usuario tendrá la primera interacción. 
Se compone de un header en cual almacenera un logo en su parte superior izquierda y un titulo en su parte superior derecha. Tendremos un botón de agregar nuevo producto el cual nos dirigirá a una nueva vista con el propósito de agregar un nuevo elemento a nuestra base de datos.

En la parte de derecha de nuestra pantalla encontraremos una sección de filtros, en este caso contamos con tipos de filtros, por categoría y por proveedor, esta misma sección cuenta con dos botones unos para aplicar los filtros y otro para limpiar las casillas de filtro.

En nuestra parte central encontraremos una tabla con seis columnas, la cual cuenta con los siguientes encabezados, sku, categoría, nombre, material, proveedor y opciones. La columna de opciones nos mostrara por cada fila dos botones, un boto eliminar que desplegara un modal con la confirmación para la eliminación de un elemento de la tabla y un botón ver mas que nos direccionara a nuestra vita detalle.html.

Al final de nuestra página encontraremos dos botones de paginación, anterior y siguiente que nos permitirá navegar y visualizar todos los elementos dado a que la tabla esta paginada para que solo muestre 10 elementos.
</p>

### formulario.html
<p>
En el documento formulario.html como su nombre lo indica codificaremos un formulario que busca la creación de un nuevo elemento y así poder agregar este nuevo elemento a nuestra base de datos existente.

El archivo cuenta con 10 campos inputs en los cuales se digitará la información de cada una de las 10 propiedades de un nuevo envase y cuenta con dos botones los cuales cumplen las funciones de registrar la información y vaciar los campos inputs de ser solicitado.
</p>

### detalle.html
<p>
En el documento detalle.html vamos a tener la posibilidad de ver los cada una de las propiedades del elemento seleccionado desde la tabla principal, dichas propiedades serán visualizadas en campos inputs con el fin de poder ser modificadas.

Este formulario dispone de dos botones los cuales llevaran a cabo las funciones de actualizar la información de las propiedades de nuestro elemento y visualizar los cambios en la vista principal y ejerce las funciones de regresar a la vista principal mediante un redireccionamiento en caso de ser requerido por el usuario.
</p>

### script.js
<p>
En el documento script.js vamos a localizar nuestra base de datos la cual es un array de objectos llamada data, al igual ubicaremos todos aquellos eventos y funciones que estén relacionadas con la vista principal en este caso nuestro index.html.

En este archivo codificaremos aquellas funciones y eventos que nos permitirán tener una paginación en nuestra tabla donde se cargara de a 10 elementos en ella. Al igual se crearán las diferentes funciones para la redirección de páginas como lo es botón de agregar nuevo elemento y el botón de ver más.

Además, cuenta con las funciones para ejecutar el filtrado de los elementos y en borrado del mismo.
</p>

### formulario.js
<p>
En el documento formulario.js vamos a localizar los eventos y funciones que se relacionan con el archivo formulario.html y que tiene como principal objetivo la creación de un nuevo elemento el array de objetos data, mediate la digitación de todos los campos en el formulario.hmtl.
</p>

### detalle.js
<p>
En el documento datelle.js vamos a localizar los eventos y funciones que se relacionan con el archivo deetalle.html y que tiene como principal objetivo la visualización de todos los datos del producto seleccionado con el fin de ser modificados. El propósito del código en este archivo es que una vez el usuario modifique la información del producto seleccionado oprima el botón actualizar y este ejecute una promesa que tarde dos segundos en redirigrise a la vista principal para visualizar los cambios.

Ejemplificacion promesa:
</p>

```javascript
// Simulamos un retraso de 2 segundos antes de redirigir a la vista principal (index.html)
        const delay = 2000; // 2 segundos
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
```

### documentos css
<p>
Como archivos css tenemos styles.css y formularioStyles.css, en los cuales tendremos una codificación básica de estilos css para dar color y formas a nuestra vista principal y los formularios. Se emplea una plantilla css de Bootstrap para todas las vistas a la cual se le agregan diferentes colores relacionados con el color representativo de la universidad.
</p>