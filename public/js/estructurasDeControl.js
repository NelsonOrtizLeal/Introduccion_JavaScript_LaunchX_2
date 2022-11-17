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

/**
 * Función que muestra un mensaje de acuerdo a la edad proporcionada por el usuario
 * @param {edad} age 
 */
function validarEdad(age) {
    if (confirm("¿Estas de acuerdo con seguir con esto?")) {
        console.log("Sigue bajo tu propio riesgo");

        if (age >= 18 && age <= 150) {
            console.log("Puedes comprobar cigaritos");
        } else if (age > 150) {
            console.log("Saludame a Cepillin");
        } else if (age >= 0) {
            console.log("Tas muy chiki, vuelve en unos años");
        } else {
            console.log("A caray, tu no deberias existir");
        }
    } else {
        console.log("Que miedosoooo... XD");
    }
}

let age = prompt("Introduce tu edad");

if (age && Number(age) && age > 0 && esEntero(age)) {
    validarEdad(age);
} else {
    console.log("Introduce tu edad");
    location.reload();
}