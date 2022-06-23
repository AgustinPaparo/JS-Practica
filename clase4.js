// CALCULADORA PARA SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR DOS NÚMEROS

function suma(x, y) {
    let resultado = x + y;
    return resultado;
}

function resta(x, y) {
    let resultado = x - y;
    return resultado;
}

function multiplicacion(x, y) {
    let resultado = x * y;
    return resultado;
}

function division(x, y) {
    let resultado = x / y;
    return resultado;
}

function mostrarResultado(resultado) {
    alert("El resultado es " + resultado);
}

function menu() {
    let opcion = parseInt(prompt("Seleccione una operación o la letra mayusculas B para salir: \n1. Suma \n2. Resta \n3. Multiplicación \n4. Dividisión \n5. Salir"));
    return opcion;
}

function calculadora() {
    let seleccion = menu();
    while (seleccion !== 5) {
        let x = parseFloat(prompt("Ingrese el primer número"));
        let y = parseFloat(prompt("Ingrese el segundo número"));
        switch (seleccion) {
            case 1:
                let resultadoSuma = suma(x, y);
                mostrarResultado(resultadoSuma);
                break;
            case 2:
                let resultadoResta = resta(x, y);
                mostrarResultado(resultadoResta);
                break;
            case 3:
                let resultadoMultiplicacion = multiplicacion(x, y);
                mostrarResultado(resultadoMultiplicacion);
                break;
            case 4:
                let resultadoDivision = division(x, y);
                mostrarResultado(resultadoDivision);
                break;
            default:
                alert("Algo salió mal, intente con un número entero del 1 al 4 para seleccionar alguna operación y con números para realizarlas.");
                break;
        }
        seleccion = menu();
    }
}
calculadora()