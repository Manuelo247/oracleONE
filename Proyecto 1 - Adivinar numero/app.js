// #######################################################################
// Funciones que uso en este codigo que use para aprenderlas
// - alert(#string)
//      Despliega una alerta que dira lo que contenga la string dada

// - promtp(#string)
//      Solicita un valor al usuario, sera desplegado con el mensaje colocado en la string

// - console.log(#variable)
//      Muestra en la consola cualquier variable que le coloquemos

// - parseInt(#string)
//      Convierte una string que tenga valores numericos en un numero, ademas de eliminar la parte decimal

// - Math.floor(#number)
//      Elimina la parte decimal de un numero para convertirlo en un entero

// - Math.random()
//      Genera un numero pseudo-aleatorio entre 0 y 1

// - typeof(#variable)
//      Muestra el tipo de variable que coloquemos dentro de la funcion
//
// Tambien considerar:
//
// - Condicionales reducidas
//      numero1 > numero2 ? numero1 : numero2
//      Esta es una condicional del numero mayor, primero pondremos una condicional, seguido de un 
//      signo de interrogacion, despues 2 valores separados por dos puntos, el primero sera en el caso
//      de que sea positivo, el segundo sera el caso en el que sea negativo
// #######################################################################
let maxIntentos = 3;
let numeroSecreto = parseInt(Math.random()*10)+1;

console.log("numero secreto: " + numeroSecreto + " " + typeof(numeroSecreto))

let numeroUsuario
let intentos = 0
// let palabraIntentos = " intento"

while(numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt("Adivina mi numero del 1 al 10, tienes " + maxIntentos + " intentos!"));
    console.log("numero de usuario: " + numeroUsuario + " " + typeof(numeroUsuario))
    intentos++;

    if (numeroUsuario == numeroSecreto){

        // alert(`Acertaste, el numero es ${numeroSecreto}. Lo hiciste en ${intentos} intentos`);
        // alert("Acertaste, el numero secreto es " + numeroSecreto + ". Lo hiciste en " + intentos + palabraIntentos);
        alert("Acertaste, el numero secreto es " + numeroSecreto + ". Lo hiciste en " + intentos + (intentos > 1 ? " intentos." : " intento."));

    } else {

        if (intentos >= maxIntentos){
            alert("Se te acabaron los intentos, el numero era " + numeroSecreto )
            break;
        }

        if (numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        // palabraIntentos = " intentos"
    }
}
