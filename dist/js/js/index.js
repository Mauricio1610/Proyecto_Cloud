//Autor: 
//Fecha: 20/04/2023

//Cifrado Cesar
exports.handler = async (event, context) => {

const function1 = async () => {
  //const url = "https://desencriptador.com/"
  const url = "/.netlify/functions/jokes";
  const jokeStream = await fetch(url);

  const jsonJoke = await jokeStream.json();
  const joke = jsonJoke.joke;
  return joke;
};

$(document).ready(function() {
    $("#btn-encripta").click(function() { 
      const texto = $("#user-input").val();
      if(texto===""){
        alert("El campo esta vacio");
      }else{
        const msgDesifrado= cifradoCesar(texto, 13);
        $("#msg-res").val(msgDesifrado);
      }
      return false;
    });
  });



function cifradoCesar(texto, desplazamiento) {
    // Convertir el texto a mayúsculas para facilitar el cifrado
    texto = texto.toUpperCase();
    
    let resultado = "";
    
    // Iterar por cada letra del texto
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      
      // Ignorar caracteres que no sean letras
      if (!letra.match(/[A-Z]/)) {
        resultado += letra;
        continue;
      }
      
      // Aplicar el desplazamiento al valor ASCII de la letra
      let ascii = letra.charCodeAt(0);
      let desplazado = (ascii - 65 + desplazamiento) % 26 + 65;
      
      // Convertir el valor ASCII desplazado a letra
      resultado += String.fromCharCode(desplazado);
    }
    return resultado;
  }

  return{
    statusCode: 200,
    body: JSON.stringify(jsonJoke)
};

}