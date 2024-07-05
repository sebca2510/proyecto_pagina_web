"use strict";
//variables
const url = "https://jsonplaceholder.typicode.com/users"; // URL de la API para obtener los datos de usuarios
const respuesta = document.querySelector("#respuesta"); // Selecciona el elemento del DOM con el id 'respuesta'
//evento
document.addEventListener("DOMContentLoaded", llamarAPI); // Agrega un evento que llama a la función 'llamarAPI' cuando el contenido del documento ha sido completamente cargado

//funciones
async function llamarAPI() {// Define una función asincrónica llamada 'llamarAPI'
  const respuesta = await fetch(url); // Espera a que la promesa de 'fetch' se resuelva y guarda la respuesta
  const data = await respuesta.json(); // Convierte la respuesta en formato JSON y la guarda en la variable 'data'
  mostrarHTML(data); // Llama a la función 'mostrarHTML' pasando los datos obtenidos
}
function mostrarHTML(datos) {                // Define una función llamada 'mostrarHTML' que recibe 'datos' como parámetro
  datos.forEach((item) => {
    const row = document.createElement("tr");// Crea un nuevo elemento 'tr' (fila de tabla)
    row.innerHTML = ` 
            <td>${item.website}</td> 
            <td>${item.name}</td> 
            <td>${item.email}</td> 
            <td>${item.phone}</td>`; // Define el contenido HTML de la fila con los datos del usuario
    respuesta.appendChild(row);     // Agrega la fila al elemento 'respuesta'
  });
}
//Codigo para la funcion del buscador 
document.getElementById('searchForm').addEventListener('submit', function(event) {//adjunta un escuchador de eventos de envío. Cuando se envía el formulario, se ejecuta la función anónima pasada como argumento.
      event.preventDefault();//evita el comportamiento de envío de formulario predeterminado, que recargaría la página.
      var searchTerm = document.getElementById('input_buscar').value.toLowerCase();//recupera el valor del elemento de entrada con el ID input_buscar 
      var containers = document.querySelectorAll('.containers');//selecciona todos los elementos con la clase containers 
      containers.forEach(function(container) {//itera sobre cada elemento contenedor en la colección containers utilizando forEach  
          var textContent = container.textContent.toLowerCase();//recupera el contenido de texto del elemento contenedor actual y lo convierte a minúsculas
          if (textContent.includes(searchTerm)) {//comprueba si el contenido de texto del contenedor incluye el término de búsqueda
              container.style.display = 'block';//establece el estilo de visualización del contenedor en block, haciéndolo visible.
          } else {
              container.style.display = 'none'; //establece el estilo de visualización del contenedor en none, ocultándolo.
          }
      });
  });

// Función para activar el botón "Arriba"
document.addEventListener("DOMContentLoaded", function () {
  var upButtons = document.querySelectorAll(".up");     // Seleccionar todos los elementos con la clase 'up' y almacenarlos en la variable upButtons
  upButtons.forEach(function (button) {                 // Iterar sobre cada botón seleccionado
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Cuando se hace clic en el botón, hacer scroll hasta la parte superior de la página de manera suave
    });
  });
});
