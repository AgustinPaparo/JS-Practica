// Clase 5. Objetos------
/*function Persona (x , y , z) {
    this.nombre = x;
    this.edad = y;
    this.calle = z;
}

const persona1 = new Persona ("agustin","25","viedma");

for(const propiedad in persona1){
    console.log(persona1[propiedad])
} */


// Clase 6. Arrays

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
for( indice = 0 ; indice <9 ; indice++){
    console.log (numeros[indice]);
} */


const producto1 = { id: 1 , producto: "Leche"};
const productos = [ producto1 , {id:2 , producto:"Arroz"}];
productos.push ({id:3 , producto: "Fideo"});

for(const producto of productos){
    console.log(producto.id)
    console.log(producto.producto)
}
