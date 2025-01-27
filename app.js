// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


//Funcion que modifica un elemento id de HTML
function modificarLista(elemento,texto){
    let muestraLista = document.getElementById(elemento);
    return muestraLista.innerHTML = texto;
}

//Funcion que muestra elementos en una lista HTML
function mostrarElementosLista(lista) {
    let mostrarElementos = "";
    for (let indice = 0; indice < lista.length; indice++) {
        mostrarElementos += `<li>${lista[indice]}</li>`;        
    }
    return mostrarElementos
}

function agregarAmigo(){
    //Obtiene el nombre sin espacios
    let nuevoAmigo=document.getElementById("amigo").value.trim();

    if (nuevoAmigo == "" ) {
        alert("Por favor, ingrese un nombre válido.");
    }else{
        amigos.push(nuevoAmigo);
        modificarLista("listaAmigos",mostrarElementosLista(amigos));
    }   
}