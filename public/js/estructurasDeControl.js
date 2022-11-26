for (let i = 0; i < 15; i++){
    if((i % 2) != 0 ){
        console.log(i , "No es par");
        continue;
    }

    if(i == 10){
        console.log("Llegaste al tope 10");
        break;
    }
};
console.log("For terminado");

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

//While
let boletosDisponibles = 10;
while (boletosDisponibles > 0){
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles --;
    console.log("Quedan: " + boletosDisponibles);
}

//Do While
//Al menos se ejecuta 1 vez
do{
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles --;
    console.log("Quedan: " + boletosDisponibles);
}while(boletosDisponibles > 0);

// TRY CATCH finally
try{
    // Código susetible a fallar
    console.log("Holi");
    throw "Se acabo la fiesta 666";
}catch(error){
    console.info("Validar edad no existe");
}finally{
    console.warn("Tu crush no te quiere: -.-");
}