let numeroSecreto;
let numeroUsuario

let listanumerosSecretos = [];
let intentos;
let numeroMax = 10;
let maxIntentos = 4;

function mostrarVariables(){

    console.log("Intentos: ", intentos)
    console.log("Numero secreto: ", numeroSecreto, typeof(numeroSecreto));
    console.log("Numero de usuario: ",numeroUsuario, typeof(numeroUsuario), '\n');

    //El triple igual es mas restrictivo, no solo compara valores si no que 
    //espera que tambien sean del mismo tipo de dato, como el "is" de python
    console.log("Adivino? ", numeroSecreto === numeroUsuario);       

}

function verificarIntento(){
    
    intentos++;

    numeroUsuario = document.getElementById('numeroUsuario').value; //Aqui buscamos elemento por ID
    numeroUsuario = parseInt(numeroUsuario);
    // mostrarVariables()
    limpiarCaja()
    
    if (numeroUsuario === numeroSecreto){

        textoAcertar = `Acertaste, el numero secreto es ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos > 1 ? "intentos." : "intento."}`
        asignarTextoElemento('p', textoAcertar);

        estadoBoton('reiniciar', 'enabled')
        estadoBoton('intento', 'disabled')   

    } else {
        
        if (intentos >= maxIntentos){
            textoFallar = `Se te acabaron los intentos, el numero era ${numeroSecreto}`
            asignarTextoElemento('p', textoFallar)
            estadoBoton('reiniciar', 'enabled')
            estadoBoton('intento', 'disabled')
        } else if (numeroUsuario > numeroSecreto){
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
}

function condicionesIniciales(){
    asignarTextoElemento('p', `Elige un numero del 1 al ${numeroMax}.</br> Tienes ${maxIntentos} ${maxIntentos > 1 ? "intentos." : "intento."}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}

function estadoBoton(ID, estado){
    if (estado == 'disabled'){
        //Esto al contrario del removeAttribute, crea un atributo, 
        //en donde le colocaremos el nombre del atributo y su valor
        document.querySelector(`#${ID}`).setAttribute('disabled', true)
    } else if (estado == 'enabled'){
        document.querySelector(`#${ID}`).removeAttribute('disabled')
    }
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
        estadoBoton('intento','disabled')
        estadoBoton('reiniciar','disabled')
    } else {
        estadoBoton('intento','enabled')
        estadoBoton('reiniciar','disabled')
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


