let numeroSecreto = generarNumeroSecreto();

function verificarIntento(){
    let numeroUsuario
    numeroUsuario = document.getElementById('numeroUsuario').value; //Aqui buscamos elemento por ID
    numeroUsuario = parseInt(numeroUsuario)
    console.log(numeroSecreto, typeof(numeroSecreto));
    console.log(numeroUsuario, typeof(numeroUsuario));
    console.log(numeroSecreto === numeroSecreto);   //El triple igual es mas restrictivo, no solo compara valores si no que 
                                                    //espera que tambien sean del mismo tipo de dato, como el "is" de python
    return;
}
function asignarTextoElemento(elemento, texto){ //Creamos una funcion para asignar textos dentro de nuestra pagina

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function generarNumeroSecreto(){
    return parseInt(Math.random()*10)+1;
}

asignarTextoElemento('h1', "Juego del numero secreto");
asignarTextoElemento('p', "Elige un numero del 1 al 10");


