console.log("- - - - - - - - - - Ejercicios extras - - - - - - - - - -\n")

        // *********** Función UpperConvert ***********
console.log("*********** Función UpperConvert ***********\n\n");

function upperConverter(string){
        string = string.toUpperCase();
        return string;
}

// console.log(upperConverter("Master\n"));
// console.log(upperConverter("Pasantia\n"));
// console.log(upperConverter("American\n"));
// console.log(upperConverter("Banda XXI\n"));
// console.log(upperConverter("Surrender\n"));


        // *********** Función dataType ***********

console.log("*********** Función dataType ***********\n\n");

function dataType(variable){
        let tipoDato = typeof variable;
        return tipoDato;
}

// console.log("La variable es de tipo: "+dataType(123));
// console.log("La variable es de tipo: "+dataType(true));
// console.log("La variable es de tipo: "+dataType("lalala"));
// console.log("La variable es de tipo: "+dataType("164"));
// console.log("La variable es de tipo: "+dataType(false));

        // *********** Función dogAge ***********

console.log("\n\n*********** Función dogAge ***********\n\n");

function dogAge(edadHumano){
        let edadPerro = 7 * edadHumano;
        return edadPerro;
}
// console.log(`La edad del humano es de 7 años, por lo que la edad en años de perros es: `+dogAge(7)+" años.\n");
// console.log(`La edad del humano es de 19 años, por lo que la edad en años de perros es: `+dogAge(19)+" años.\n");
// console.log(`La edad del humano es de 22 años, por lo que la edad en años de perros es: `+dogAge(22)+" años.\n");
// console.log(`La edad del humano es de 56 años, por lo que la edad en años de perros es: `+dogAge(56)+" años.\n");
// console.log(`La edad del humano es de 80 años, por lo que la edad en años de perros es: `+dogAge(80)+" años.\n");
// console.log(`La edad del humano es de 62 años, por lo que la edad en años de perros es: `+dogAge(62)+" años.\n\n");

        // *********** Función hourPrice ***********

console.log("*********** Función hourPrice ***********\n\n");

function hourPrice(salarioMensual, cantDiasTrabajados, cantHorasPorDia){
        let pagoPorHora = (salarioMensual / cantDiasTrabajados) / cantHorasPorDia;
        pagoPorHora = pagoPorHora.toFixed(2);
        return pagoPorHora;
}

// console.log("En base al salario mensual, el valor de una hora de trabajo es de: $"+hourPrice(100000, 7, 5));
// console.log("En base al salario mensual, el valor de una hora de trabajo es de: $"+hourPrice(699999, 5, 8));
// console.log("En base al salario mensual, el valor de una hora de trabajo es de: $"+hourPrice(1051080, 3, 18));
// console.log("En base al salario mensual, el valor de una hora de trabajo es de: $"+hourPrice(800000, 5, 8));
// console.log("En base al salario mensual, el valor de una hora de trabajo es de: $"+hourPrice(540980, 4, 6));

module.exports = {upperConverter, dataType, dogAge, hourPrice};