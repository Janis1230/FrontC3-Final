//$(document).ready(function () {
//carga la librería javascript de jquery cuando se carga la página barcos.html por completo
//cuando carga la página html se ejecuta la función: listar()
$(document).ready(function () {
    //configura el aspecto inicial de la pagina
    estadoInicial();
    //ejecuta función para enviar petición al ws
    listar();
});

//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo GET
function listar() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://localhost:8080/api/Reservation/all",
        //url: "http://129.151.111.224:8080/api/Reservation/all",
        
        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        //data : { id : 1, ...},

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);

            //recibe el arreglo 'items' de la respuesta a la petición
            listarRespuesta(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de mensajes...");
            $("#mensajes").hide(1000);
        }
    });
}

/* 
    Esta función se encarga de recorrer el listado de datos 'items' recibido como parametro,
    construir una tabla html en la variable javascript 'tabla',
    acceder al elemento elemento identificado con el id 'listado'
    y modificar su html agregando el contenido de la variable 'tabla'.
    
*/
function listarRespuesta(items) {
    $("#listado").html("");
    $("#listado").show(500);
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var tabla = `<table border="1" class="table">
    <thead class="thead-dark">
                  <tr>
                  <th>#</th>
                    <th>Inicio</th>
                    <th>Devolución</th>
                    <th>Cliente</th>
                    <th>Cabaña</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
        <tr><td>${i}</td>
                   <td>${(items[i].startDate).substr(0, 10)}</td>
                   <td>${(items[i].devolutionDate).substr(0,10)}</td>
                   <td>${items[i].client.name}</td> 
                   <td>${items[i].cabin.name}</td> 
                   <td id="id-boton"><button id="boton-primary" class="btn btn-primary btn-sm" onclick="editarRegistro(${items[i].idReservation})">Editar</button></td>
                   <td id="id-boton"><button  class="btn btn-dark btn-sm" onclick="borrarMensaje(${items[i].idReservation})">Borrar</button></td>
                   </tr>`;
    }

    //cierra tabla agregando el tag adecuado
    tabla +=`</table>`;

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#listado").html(tabla);
}


function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500);
    $("#reportes").hide();
    $("#reportes_btn").show(500);

    //limpia el contenido de los campos del formulario nuevo
    $("#startDate").val(""),
    $("#devolutionDate").val(""),
    $("#client").val(""),
    $("#cabin").val(""),
    listar();
}

function activarReportes(){
    // alert("Opción no implementada hasta el reto 4...")
    $("#listado").hide(500);
    $("#reportes").show(500);
}

function mostrarInformes(){
    var startDate = $("#startDate_rep").val();
    var devolutionDate = $("#devolutionDate_rep").val();

    console.log(startDate);
    console.log(devolutionDate);


$.ajax({
    // la URL para la petición (url: "url al recurso o endpoint")
    url: "http://localhost:8080/api/Reservation/report-dates/"+startDate+"/"+devolutionDate,
    //url: "http://129.151.111.224:8080/api/Reservation/report-dates/"+startDate+"/"+devolutionDate,
    
    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
    //data : { id : 1, ...},

    // especifica el tipo de petición http: POST, GET, PUT, DELETE
    type: 'GET',

    // el tipo de información que se espera de respuesta
    dataType: 'json',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function (respuesta) {
        //escribe en la consola del desarrollador para efectos de depuración
        //console.log(respuesta);

        //recibe el arreglo 'items' de la respuesta a la petición
        listarRespuesta(respuesta);
    },

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error: function (xhr, status) {
        $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        //$("#mensajes").hide(1000);
    },

    // código a ejecutar sin importar si la petición falló o no
    complete: function (xhr, status) {
        $("#mensajes").html("Obteniendo listado de mensajes...");
        $("#mensajes").hide(5000);
    }
});



}

function mostrarStatus(){
$.ajax({
    // la URL para la petición (url: "url al recurso o endpoint")
    url: "http://localhost:8080/api/Reservation/report-status",
    //url: "http://129.151.111.224:8080/api/Reservation/report-status",
    
    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
    //data : { id : 1, ...},

    // especifica el tipo de petición http: POST, GET, PUT, DELETE
    type: 'GET',

    // el tipo de información que se espera de respuesta
    dataType: 'json',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function (respuesta) {
        //escribe en la consola del desarrollador para efectos de depuración
        //console.log(respuesta);

        //recibe el arreglo 'items' de la respuesta a la petición
        listarRespuesta(respuesta);
        pintarStatus(respuesta);
        console.log(respuesta);
    },

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error: function (xhr, status) {
        $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        //$("#mensajes").hide(1000);
    },

    // código a ejecutar sin importar si la petición falló o no
    complete: function (xhr, status) {
        $("#mensajes").html("Obteniendo listado de mensajes...");
        $("#mensajes").hide(5000);
    }
});

}

function pintarStatus(respuesta){
$("#mostrarReportes").show(500);
var status =`<li>`+"Completadas :"+respuesta["completed"]+`</li>`+ 
            `<li>`+"Canceladas :"+respuesta["cancelled"]+`</li>`;
$("#mostrarReportes").html(status);     
$("#mostrarReportes").hide(5000);
}

function mostrarclientes(){

$.ajax({
    // la URL para la petición (url: "url al recurso o endpoint")
    url: "http://localhost:8080/api/Reservation/report-clients",
    //url: "http://129.151.111.224:8080/api/Reservation/report-clients",
    
    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
    //data : { id : 1, ...},

    // especifica el tipo de petición http: POST, GET, PUT, DELETE
    type: 'GET',

    // el tipo de información que se espera de respuesta
    dataType: 'json',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function (respuesta) {
        //escribe en la consola del desarrollador para efectos de depuración
        //console.log(respuesta);

        //recibe el arreglo 'items' de la respuesta a la petición
        pintarReporteClientes(respuesta);
        
        console.log(respuesta);
    },

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error: function (xhr, status) {
        $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        //$("#mensajes").hide(1000);
    },

    // código a ejecutar sin importar si la petición falló o no
    complete: function (xhr, status) {
        $("#mensajes").html("Obteniendo listado de mensajes...");
        $("#mensajes").hide(5000);
    }
});

}

function pintarReporteClientes(items){
//  $("#mostrarReportes").show();
var mejoresclientes = `<table border="1" class="table">
<thead class="thead-dark">
              <tr>
              <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Total Reservas</th>
              
              </tr>`;

for (var i=0; i < items.length; i++) {
                mejoresclientes+=`<tr>
                <tr><td>${i+1}</td>
                       
                           <td>${(items[i]["client"]["name"])}</td>
                           <td>${(items[i]["client"]["email"])}</td> 
                           <td>${(items[i].total)}</td> 
                           
                           </tr>`;
            }

  $("#mostrarReportes").html(mejoresclientes);    
  $("#mostrarReportes").toggle("callback");
     
}