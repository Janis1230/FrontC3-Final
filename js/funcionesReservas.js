function validaesVacio(dato) {
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar() {
    //obtiene valores
    let startDate = $("#startDate").val();
    let devolutionDate = $("#devolutionDate").val();
    let client = $("#client").val();
    let cabin = $("#cabin").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(startDate)) {
        errores = "Debe seleccionar la fecha de inicio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    }else if (validaesVacio(devolutionDate)) {
        errores = "Debe seleccionar la fecha de final<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#devolutionDate").focus();
        return false;
    }else if (validaesVacio(client)) {
        errores = "Debe seleccionar un cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#client").focus();
        return false;
    } else if (validaesVacio(cabin)) {
        errores = "Debe seleccionar un Cabaña<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#cabin").focus();
        return false;
    } else {
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
function validarEditar() {
    //obtiene valores
    let startDate = $("#startDate").val();
    let devolutionDate = $("#devolutionDate").val();
    let client = $("#client").val();
    let cabin = $("#cabin").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(startDate)) {
        errores = "Debe seleccionar la fecha de inicio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    }else if (validaesVacio(devolutionDate)) {
        errores = "Debe seleccionar la fecha de final<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#devolutionDate").focus();
        return false;
    }else if (validaesVacio(client)) {
        errores = "Debe seleccionar un cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#client").focus();
        return false;
    } else if (validaesVacio(cabin)) {
        errores = "Debe seleccionar un Cabaña<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#cabin").focus();
        return false;
    } else {
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