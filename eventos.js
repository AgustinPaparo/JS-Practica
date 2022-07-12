function respuestaClick (){
    console.log ("Tu crush te ama (L)!");
}

function pararseArriba(){
    boton.innerHTML = "Hola crush sew sew"
}

function salirDelBoton(){
    boton.innerHTML = "Volve a mi :'("
}

let boton = document.getElementById ("Boton1");
boton.addEventListener ("click" , respuestaClick);
boton.addEventListener ("mouseover" , pararseArriba);
boton.addEventListener ("mouseout" , salirDelBoton)

