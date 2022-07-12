function respuestaClick (){
    console.log ("Tu crush te ama (L)!");
}

function pararseArriba(){
    boton.innerHTML = "Hola crush sew sew"
}

function salirDelBoton(){
    boton.innerHTML = "Volve a mi :'("
}

function pararseEnTitulo() {
    titulo.innerText = "COMO ELLA CON TU CORA BRO xD"
}

function salirDeTitulo(){
    titulo.innerText = "JUGANDO con Eventos."
}

let boton = document.getElementById ("Boton1");
boton.addEventListener ("click" , respuestaClick);
boton.addEventListener ("mouseover" , pararseArriba);
boton.addEventListener ("mouseout" , salirDelBoton);

let titulo = document.getElementById("Titulo");
titulo.addEventListener ("mouseover" , pararseEnTitulo);
titulo.addEventListener ("mouseout" , salirDeTitulo);
