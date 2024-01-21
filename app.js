let numeroSecreto;
let listanumerosSecretos = [];
let intentos;
let numeroMax = 10;

function mostrarVariables(numeroUsuario){
    console.log("Intentos: ", intentos)
    console.log("Numero secreto: ", numeroSecreto, typeof(numeroSecreto));
    console.log("Numero de usuario: ",numeroUsuario, typeof(numeroUsuario), '\n');
    console.log("Adivino? ", numeroSecreto === numeroUsuario);       //El triple igual es mas restrictivo, no solo compara valores si no que 
    //                                                  //espera que tambien sean del mismo tipo de dato, como el "is" de python
}

function verificarIntento(){
    let numeroUsuario
    intentos++;

    numeroUsuario = document.getElementById('numeroUsuario').value; //Aqui buscamos elemento por ID
    numeroUsuario = parseInt(numeroUsuario);
    mostrarVariables(numeroUsuario)
    limpiarCaja()
    
    if (numeroUsuario === numeroSecreto){

        textoAcertar = "Acertaste, el numero secreto es " + numeroSecreto + ". Lo hiciste en ";
        textoAcertar += intentos + (intentos > 1 ? " intentos." : " intento.");
        asignarTextoElemento('p', textoAcertar);

        document.getElementById('reiniciar').removeAttribute('disabled'); //removera e atributo disabled para que pueda ser usado

    } else {
        
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', "El numero secreto es <b>menor</b>");
        } else {
            asignarTextoElemento('p', "El numero secreto es <b>mayor</b>");
        }

    }
    return;
}

function reiniciarJuego(){
    //Reiniciar las condiciones iniciales
    condicionesIniciales()
    //Reiniciar caja
    limpiarCaja();
    //Deshabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled', true);    //Esto al contrario del removeAttribute, crea un atributo, 
                                                                            //en donde le colocaremos el nombre del atributo y su valor

}

function condicionesIniciales(){
    asignarTextoElemento('p', `Elige un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '' 
    //Si colocamos un # representa que buscaremos por ID, 
    //como si usaramos la funcion getElementById
    return;
}

function asignarTextoElemento(elemento, texto){ 
    //Creamos una funcion para asignar textos dentro de nuestra pagina
    document.querySelector(elemento).innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroAleatorio = parseInt(Math.random()*numeroMax)+1;

    console.log(listanumerosSecretos);

    if (listanumerosSecretos.length >= numeroMax){
        asignarTextoElemento('p', "Ya se sortearon todos los numeros posibles");
        document.querySelector('#intento').setAttribute('disabled', true);
    } else {
        if (listanumerosSecretos.includes(numeroAleatorio)){
            return generarNumeroSecreto();
        } else {
            listanumerosSecretos.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }
}

asignarTextoElemento('h1', "Juego del numero secreto");
condicionesIniciales()


