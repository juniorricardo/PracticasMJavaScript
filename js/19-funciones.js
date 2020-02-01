'use strict'

// Funcioness

function nuevaFuncion(flag = false) {
    if (!flag) {
        document.write("Este es un mensaje. flag = true" + "<br/>");
    } else {
        document.write("Estamos en el else. flag = false" + "<br/>");
    }
}

nuevaFuncion();
nuevaFuncion(true);