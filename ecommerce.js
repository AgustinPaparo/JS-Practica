class Productos {
    constructor(id , tipo , nombre , foto, precio){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.foto = foto
        this.precio = precio;
    }
}

class Carrito{
    constructor(id){
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i =0 ; i< this.productos.length ; i++){
            total = total + this.productos[i].precio;
        }
        return total;
    }

}

// Declaro el array del catalogo
let catalogo = [];

// Creo los productos que voy a utilizar
let producto1 = new Productos (1 , "Camisas" , "Camisa manga corta" , "img/camisamcorta.webp", 5000);
let producto2 = new Productos (2 , "Camisas" , "Camisa manga larga" , "img/camisamlarga.webp", 7000);
let producto3 = new Productos (3 , "Remeras" , "Remera basica" , "img/remerabasica.webp", 3000);
let producto4 = new Productos (4 , "Remeras" , "Remera con estampa" , "img/remeracestampa.webp", 3500);
let producto5 = new Productos (5 , "Remeras" , "Remera manga larga" , "img/remeramlarga.webp", 4000);
let producto6 = new Productos (6 , "Abrigos" , "Parka" , "img/parka.webp", 22000);
let producto7 = new Productos (7 , "Abrigos" , "Sweater" , "img/sweter.webp", 15000);
let producto8 = new Productos (8 , "Abrigos" , "Buzo" , "img/buzo.webp", 17000);

// Agrego los productos al CATALOGO
catalogo.push(producto1);
catalogo.push(producto2);
catalogo.push(producto3);
catalogo.push(producto4);
catalogo.push(producto5);
catalogo.push(producto6);
catalogo.push(producto7);
catalogo.push(producto8);

// Funciones:
function renderCard (producto) {
    let cardRendered = `
            <div class="card my-5 col-md-3 text-center" style="width: 18rem;">
                <img src="${producto.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}- ${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <a href="#" class="btn btn-primary botonCompra" id="${producto.id}">Agregar a carrito</a>
                </div>
            </div>
            `
    return cardRendered;
}

function limpiarCarrito(){
    let carritoDiv = document.querySelector("#carrito");
    carritoDiv.innerHTML = ""
}

function actualizarCarrito(carrito){
    let carritoDiv = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
        carritoDiv.innerHTML += renderCard(producto);
    })
    carritoDiv.innerHTML +=  `<h3>Total a pagar: $${carrito.calcularTotal()}</h3>`
}

function limpiarLS(){
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito" , JSON.stringify(carrito));
}

// CArgar carrito existente:
window.addEventListener("DOMContentLoaded" , (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id , storage.productos);
    storage.productos.forEach(producto =>{
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
})

// Generar tarjetas para cada producto
let cardsDiv = document.querySelector("#cards");


catalogo.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
})

// Inicializar el carrito:
let carrito = new Carrito(1);
let botones = document.querySelectorAll(".botonCompra");
let arrayBotones = Array.from(botones);

arrayBotones.forEach(boton => {
    boton.addEventListener("click" , (e) => {
        let seleccion = catalogo.find(producto => producto.id == e.target.id);
        carrito.productos.push(seleccion);
        limpiarCarrito();
        actualizarCarrito(carrito);
        limpiarLS();
    })
});