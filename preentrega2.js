let productos = [];


let formulario;
let nombreProductos;
let precioProductos;
let cantidadProductos;
let tabla;

class Productos {
    constructor(nombre, precio , cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

function iniciarElementos() {
    formulario =  document.getElementById("formulario");
    nombreProductos =  document.getElementById("nombreProducto");
    precioProductos =  document.getElementById("precioProducto");
    cantidadProductos =  document.getElementById("cantidadProducto");
    tabla =  document.getElementById("tablaProductos");
}

function iniciarEventos(){
    formulario.onsubmit = (event) => validarForm(event);
}

function validarForm(event) {
    event.preventDefault();
    let nombre = nombreProductos.value;
    let precio = parseFloat(precioProductos.value);
    let cantidad = parseInt(cantidadProductos.value);
    let nuevoProducto = new Productos (nombre , precio , cantidad);
    productos.push(nuevoProducto);

    formulario.reset();
    limpiarTabla();
    agregarTabla();
}

function agregarTabla(){
    productos.forEach( (producto) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        `
        tabla.tBodies[0].append(fila)
    })
}

function limpiarTabla() {
    while(tabla.rows.length > 1){
        tabla.deleteRow(1);
    }
}

function main() {
    iniciarElementos();
    iniciarEventos();
}

main();