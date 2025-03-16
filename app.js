// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
const campoNombreAmigo=document.getElementById("amigo");

//
function borrarListaAmigos() {
    amigos=[];
    modificarElementoHTML("amigo","");
    modificarElementoHTML("listaAmigos","");
    modificarElementoHTML("resultado","");
}

//Funcion que modifica un elemento id de HTML
function modificarElementoHTML(elemento,texto){
    muestraLista = document.getElementById(elemento);
    return muestraLista.innerHTML = texto;
}

//Funcion que muestra elementos en una lista HTML
function mostrarElementosLista(lista) {
    mostrarElementos = "";
    for (let indice = 0; indice < lista.length; indice++) {
        mostrarElementos += `<li class="lista_amigos" onclick="eliminarAmigo(this)"><img src="${lista[indice][0]}" alt="Avatar de ${lista[indice][1]}" width="50" height="50">${lista[indice][1]}</li>`;        
    }
    return mostrarElementos;
}


function eliminarAmigo(elemento){
    amigos=amigos.filter(amigos => amigos[1] !== elemento.textContent);
    modificarElementoHTML("listaAmigos",mostrarElementosLista(amigos));
}

function verificarNombreAmigo(amigos,nombreAmigo){
    existe = amigos.some(nombre => nombre[1] ===  nombreAmigo);
    return existe;
}

//Funcion que agrega a un amigo a la lista de amigos
function agregarAmigo(){
    modificarElementoHTML("resultado","");
    //Obtiene el nombre sin espacios
    nuevoAmigo=document.getElementById("amigo").value.trim().toUpperCase();

    if (nuevoAmigo == "" ) {
        alert("Por favor, ingrese un nombre válido.");
    }else if(verificarNombreAmigo(amigos,nuevoAmigo)){
        alert("Por favor, no ingrese nombres repetidos");
    }else{
        amigos.push([generarAvatar(nuevoAmigo),nuevoAmigo]);
        modificarElementoHTML("listaAmigos",mostrarElementosLista(amigos));
    }
    //Limpiamos el casillero de texto
    document.getElementById("amigo").value="";
    return ;
}

//Funcion que permite que al presionar enter agregue el nombre del amigo
campoNombreAmigo.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
    agregarAmigo();    
    }
});

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


function sortearAmigoSecreto(amigos) {
    amigosRestantes=amigos;
    amigosSorteados=[];
    resultado=[];
    if(amigos.length<2){
        return alert("Ingresa mas nombres de amigos!");
    }else{
        for (let inicio = 0 ; inicio < amigos.length; inicio++)   {
            //Guardamos informacion sobre el amigo premiado
            nombreAmigoPremiado=amigos[inicio][1];
            imagenAmigoPremiado=amigos[inicio][0];
            
            //Sortea a los amigos que le deben dar regalo
            listaAmigoSortear=amigosRestantes.filter(nombreAmigo => nombreAmigo[1] !== nombreAmigoPremiado);

            numeroAleatorio=numeroRandom(listaAmigoSortear);
            nombreAmigoSeleccionado=listaAmigoSortear[numeroAleatorio][1];
            imagenAmigoSeleccionado=listaAmigoSortear[numeroAleatorio][0];

            //Almacena a los amigos que ya tienen a quien entregar el regalo
            amigosSorteados.push(nombreAmigoSeleccionado);

            //Almacena al amigo premiado como al amigo que le debe dar el regalo
            resultado.push([nombreAmigoPremiado,imagenAmigoPremiado,nombreAmigoSeleccionado,imagenAmigoSeleccionado]);

            //Filtra a los amigos que falta a quien les va entregar los regalos.
            amigosRestantes=amigos.filter(nombreAmigo => !amigosSorteados.includes(nombreAmigo[1]));
        }
        return resultado;
    }
}


function sorteoEntreAmigos(){
    lista_entrega=sortearAmigoSecreto(amigos);
    console.log(lista_entrega);
    resultado="<h2 class='resultado_lista_regalos_titulo'>La entrega de los regalos del amigo secreto va de la siguiente manera:</h2>"+
               "<h4 class ='resultado_lista_regalos_subtitulo'>RECIBE<img src='./assets/flecha_izquierda.png'>ENTREGA</h4>" ;
    for (let indice = 0; indice< lista_entrega.length; indice++) {
        resultado+= '<li class="resultado_lista_regalos_texto">'+
        `<img src="${lista_entrega[indice][1]}">`+
        `${lista_entrega[indice][0]}`+
        `<img src="./assets/flecha_izquierda.png">`+
        `<img src="${lista_entrega[indice][3]}">`+
        `${lista_entrega[indice][2]}`+
        '</li>';
    }
   return modificarElementoHTML("resultado",resultado);
}

    
