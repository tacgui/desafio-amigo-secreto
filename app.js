// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


//
function borrarListaAmigos() {
    amigos=[];
    modificarElementoHTML("amigo","");
    modificarElementoHTML("listaAmigos","");
    modificarElementoHTML("resultado","");
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
        mostrarElementos += `<li class="lista_amigos" onclick="eliminarAmigo(this)"><img src="${lista[indice][0]}" alt="Avatar de ${lista[indice][1]}" width="50" height="50">${lista[indice][1]}</li>`;        
    }
    return mostrarElementos;
}


function eliminarAmigo(elemento){
    amigos=amigos.filter(amigos => amigos[1] !== elemento.textContent);
    modificarElementoHTML("listaAmigos",mostrarElementosLista(amigos));
}


//Funcion que agrega a un amigo a la lista de amigos
function agregarAmigo(){
    modificarElementoHTML("resultado","");
    //Obtiene el nombre sin espacios
    let nuevoAmigo=document.getElementById("amigo").value.trim();

    if (nuevoAmigo == "" ) {
        alert("Por favor, ingrese un nombre válido.");
    }else{
        amigos.push([generarAvatar(nuevoAmigo),nuevoAmigo]);
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
    numeroAleatorio= numeroRandom(amigos);
    modificarElementoHTML("resultado",`El amigo secreto sorteado es: <li class="resultado_amigo_elegido"><img src="${amigos[numeroAleatorio][0]}">${amigos[numeroAleatorio][1]}</li>`);
    //limpiar();
    return ;      
}

function generarAvatar(nombreAmigo) {
    return `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(nombreAmigo)}`;
    }
