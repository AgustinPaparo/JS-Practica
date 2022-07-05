// Inicio Opciones de compra
class Opciones {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

const remera = new Opciones("Remera", 3000);
const camisa = new Opciones("Camisa", 5000);
const jean = new Opciones("Jean", 8000);
const buzo = new Opciones("Buzo", 7000);
const gorro = new Opciones("Gorro", 2000);
let total = 0;

let carrito = [];
let cantidad = [];

// Fin Opciones de comrpra

// Inicio Operaciones

function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}

// Fin Operaciones

function main() {
    let opcion = 0;

    do {
        opcion = parseInt(prompt("Seleccione una opcion para continuar. \nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Ir a pagar\n 3. Salir "));

        if (opcion === 1) {
            agregarOpcion();
            return main();
        }
        if (opcion === 2) {
            revisarCarrito();
            return main();
        }
        if (opcion > 3) {
            alert("Seleccione una opcion valida")
        }

    } while (opcion !== 3);
}

function agregarOpcion() {
    let seleccionarOpcion = 0
    do {
        seleccionarOpcion = parseInt(prompt("¿Qué desea comprar?.\n Monto a pagar = $" + total + "\n Actualmente hay " + carrito.length + " productos en el carrito.\n 1.Remera $3000\n 2.Camisa 5000\n 3.Jean $8000\n 4.Buzo $7000\n 5.Gorro $2000\n 0.Atras."));

        if (seleccionarOpcion === 1) {
            total = suma(total, remera.precio)
            carrito.push('Remera $3000')
            cantidad.push(remera)
        }
        if (seleccionarOpcion === 2) {
            total = suma(total, camisa.precio)
            carrito.push('Camisa 5000')
            cantidad.push(camisa)
        }
        if (seleccionarOpcion === 3) {
            total = suma(total, jean.precio)
            carrito.push('Jean $8000')
            cantidad.push(jean)
        }
        if (seleccionarOpcion === 4) {
            total = suma(total, buzo.precio)
            carrito.push('Buzo $7000')
            cantidad.push(buzo)
        }
        if (seleccionarOpcion === 5) {
            total = suma(total, gorro.precio)
            carrito.push('Gorro $2000')
            cantidad.push(gorro)
        }
        if (seleccionarOpcion > 5) {
            alert("Seleccione por favor una opción válida")
        }

    } while (seleccionarOpcion !== 0)

}

function revisarCarrito() {

    alert("Carrito:\n" + carrito.join("\n") + "\n Total a pagar: $" + total)
}

// Para saber por consola cuantas camisas vendí:
function cantidades() {
    const cCamisa = cantidad.filter((cantidad) => cantidad.nombre.includes('Camisa'))
    console.log("Camisas vendidas")
    console.log(cCamisa)
}  //Hace falta usar la opcion 3 (Salir) para poder ver en la consola. 

main();
cantidades();