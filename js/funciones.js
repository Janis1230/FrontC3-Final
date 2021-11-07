function validaesVacio(dato){
    return !dato.trim().length;
} 

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let name = $("#name").val();
    let brand = $("#brand").val();
    let room = $("#room").val();
    let description = $("#description").val();
    let category = $("#category").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debe ingresar la marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brand").focus();
        return false;
    }else if( validaesVacio(room)) {  
        errores="Debe ingresar el año<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#room").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="Debe seleccionar la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
 function validarEditar(){
    //obtiene valores
    let name = $("#nameEdit").val();
    let brand = $("#brandEdit").val();
    let room = $("#roomEdit").val();
    let description = $("#descriptionEdit").val();
    let category = $("#categoryEdit").val();
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debe ingresar la marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(room)) {  
        errores="Debe ingresar el año<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#roomEdit").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="Debe seleccionar la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#categoryEdit").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#descriptionEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}

var logout = function() {
    $.post("/logout", function() {
        $("#user").html('');
        $(".unauthenticated").show();
        $(".authenticated").hide();
    })
    return true;
}