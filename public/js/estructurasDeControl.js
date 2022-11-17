//IF - ELSE

/**
 * Recibe un numero y pregunta si es entero.
 * @param {entero} numero 
 * @returns true | false
 */
function esEntero(numero) {
    let result = false;

    if (numero % 1 === 0) {
        result = true;
    }

    return result;
}

let age = prompt("Introduce tu edad");

if (age && Number(age) && age > 0 && esEntero(age)) {
    console.log("Podemos continuar con la validaciones");
} else {
    console.log("Introduce tu edad");
    location.reload();
}


// let confirmation = confirm("¿Estás de acuerdon con seguir con esto?");

// console.log("Tu edad es %s y has %s la pregunta", age, confirmation);
// console.log(`Tu edad es ${age} y has ${confirmation} la pregunta`);