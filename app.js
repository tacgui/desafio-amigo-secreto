// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function modificarLista(elemento,texto){
    document.querySelector(elemento,texto);
}

function agregarAmigo(){
//Obtiene el nombre sin espacios
    let nuevoAmigo=document.getElementById("amigo").value.trim();

    if (nuevoAmigo == "" ) {
        alert("Por favor, ingrese un nombre válido.");
    }else{
        amigos.push(nuevoAmigo);
        console.log(amigos);
    }
}