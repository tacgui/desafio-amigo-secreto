// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


//
function limpiar() {
    amigos=[];
    modificarElementoHTML("amigo","");
    modificarElementoHTML("listaAmigos","");
}

//Funcion que modifica un elemento id de HTML
function modificarElementoHTML(elemento,texto){
    let muestraLista = document.getElementById(elemento);
    return muestraLista.innerHTML = texto;
}

//Funcion que muestra elementos en una lista HTML
function mostrarElementosLista(lista) {
    let mostrarElementos = "";
    for (let indice = 0; indice < lista.length; indice++) {
        mostrarElementos += `<li>${lista[indice]}</li>`;        
    }
    return mostrarElementos;
}

//Funcion que agrega a un amigo a la lista de amigos
function agregarAmigo(){
    modificarElementoHTML("resultado","");
    //Obtiene el nombre sin espacios
    let nuevoAmigo=document.getElementById("amigo").value.trim();

    if (nuevoAmigo == "" ) {
        alert("Por favor, ingrese un nombre válido.");
    }else{
        amigos.push(nuevoAmigo);
        modificarElementoHTML("listaAmigos",mostrarElementosLista(amigos));
    }
    //Limpiamos el casillero de texto
    document.getElementById("amigo").value="";
    return ;
}

//Funcion que obtiene un numero ramdom segun la cantidad de elementos de la lista amigos
function numeroRandom(lista){
    return Math.floor(Math.random()*lista.length);
}

//Funcion que sortea para obtener al amigo elegido.
function sortearAmigo(){
    let amigoElegido=amigos[numeroRandom(amigos)];
    modificarElementoHTML("resultado",`El amigo secreto sorteado es: ${amigoElegido}`);
    limpiar();
    return ;      
}