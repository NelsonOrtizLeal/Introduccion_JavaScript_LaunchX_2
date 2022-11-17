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

/**
 * Funcion que muestra mensajes de acuerdo a la edad, pero usando la estructura de switch
 * @param {edad} age 
 */
function mandarMensajes(age) {
    switch (age) {
        case 13:
            console.log("Deberias estar en la secundari.");
            break;
        case 17:
            console.log("Espera un año mas.");
            break;
        default:
            console.log("No pues no se que decirte");

    }
}

let age = prompt("Introduce tu edad");

if (age && Number(age) && age > 0 && esEntero(age)) {
    validarEdad(age);
    age = parseInt(age);
    mandarMensajes(age);
} else {
    console.log("Introduce tu edad");
    location.reload();
}