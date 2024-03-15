fetch('menu.json')
//Que ase? Esta linea inicia la carga del archivo menu.json. fetch es una funcion de Javascritp que facilita la realizacion de solicitudes de red como obtener datos de un archivo o un endpoint de API.
//Como funciona? fetch  devuelve una promesa que cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta que incluye vartios detalles sobre la respuesta misma.
.then (responde=>.json{})
//Que ase? Esta linea toma el objetivo de respuesta obteniendo del fetch  y utiliza el metodo .json ) para convertir el cuerpo de la respuesta en un objetivo JavaScript (esto asume que el cuerpo de la respuesta esta en formato Json).
//Como funciona? el metodo .Json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en el formato .Json.
then(data=>
    const menuContainer = document.grtElementById
    ('menu-container');
    //Que hace aqui?  aqui se procesan los datos Json ya convertidos se obtiene una referencia al contenedos del menu en .HTML mediante GetElementById('menu-container') y luego se itera sobre los elementos (categorias) del menu.
    data.items.array.forEach(category =>
        const categoryTitle = document.createElement('h2');
        //Que ase? Aqui se crea un elemento h2, se asigna el nombre de la categoria como contenido de texto, y luego se añadde este titulo en el contenedor del menu/.
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);
        const  tablehead = </tr>;
        const table =
 //Como funciona? Para cada categoria en los datos , se realizan  varios pasos : crear un titulo  para la categoria (se crea un elemento <h2>= para el titulo de tu categoria, se establece su contenido de texto al nombre de la categoria (category.category),luego se agrega al contenedor del menu).      
//crear una tabla para los elementos de esas categorias se genera una tabla por cada categoria (primero se define el encabezado de la tabla <th>Foto</
th><Descripcion</th></th>Precio</th>.

category.items.forEach item =>

    });
        
    });
    )
