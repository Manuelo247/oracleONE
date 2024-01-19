function buttonConsole(){
    console.log("El botón fue clicado")
}
function buttonPrompt(){
    ciudad = prompt("Menciona una ciudad de Brasil")
    alert("Estuve en "+ ciudad +" y me acordé de ti")
}
function buttonAlert(){
    alert("Yo amo JS")
}
function buttonSuma(){
    numero1 = parseInt(prompt("Ingrese el primer numero"))
    numero2 = parseInt(prompt("Ingrese el segundo numero"))
    resultado = numero1 + numero2
    alert("La suma de ambos numeros es " + resultado)

}

let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío"
