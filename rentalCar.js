console.log("Bienvenido. A continuación, podemos ofrecerle nuestro siguiente catálogo de tipo de vehículo que puede elegir:\n")
console.log("De tipo compacto: $14.000.\nDe tipo mediano: $17.000\nDe tipo camioneta: $28.000\n\nSi desea incorporar una silla para bebé, tiene un precio de $1200 por día de uso.\n")

let returnPrecioFuncion;

function rentalCar(tipoVehiculo, wantSillaBebe, diasAlquiler){
    let compacto = "Compacto"; // $14.000
    let mediano = "Mediano"; // $17.000
    let camioneta = "Camioneta"; // $28.000
    let sillaBebePrecioDia = 1200;
    let precioVehiculo;
    let precioFinal;
    let error = false;
    
    switch(tipoVehiculo){
        case "1":
            tipoVehiculo = compacto;
            precioVehiculo = 14000;
            break;
        case "2":
            tipoVehiculo = mediano;
            precioVehiculo = 17000;
            break;
        case "3":
            tipoVehiculo = camioneta;
            precioVehiculo = 28000;
            break;
        default:
            error = true;
            break;
        }
        
        if(error){
            return error;
        }
        
        if(wantSillaBebe.toLowerCase() == "si"){
            precioFinal = (precioVehiculo * diasAlquiler ) + (sillaBebePrecioDia * diasAlquiler);
        }
        else{
            if(wantSillaBebe.toLowerCase() == "no"){
                precioFinal = precioVehiculo * diasAlquiler;
        }
            else{
                precioFinal = null;
            }
        }
    return precioFinal;
}

        // Prompt y datos captados del usuario

const prompt = require("prompt-sync")();
console.log("A continuación, elija con el número indicado el tipo de vehículo que quiere alquilar: \nCompacto: 1\nMediano: 2\nCamioneta: 3\n")
tipoV = prompt("Ingrese el número de vehículo elegido: ");
usaSilla = prompt("Si desea adquirir la silla para bebé, escriba 'SI', de lo contrario, escriba 'NO': ");
cantDias = +prompt("Ingrese en números la cantidad de días que desea adquirir el servicio: ");



if (rentalCar(tipoV, usaSilla, cantDias) == true || rentalCar(tipoV, usaSilla, cantDias) == null){
    console.log("Atributos inválidos. Intentelo nuevamente.");
}
else{
    returnPrecioFuncion = rentalCar(tipoV, usaSilla, cantDias);
    switch(tipoV){
        case "1":
            tipoV = "'Compacto'";
            break;
        case "2":
            tipoV = "'Mediano'";
            break;
        case "3":
            tipoV = "'Camioneta'";
            break;
        }
    if(usaSilla.toLowerCase() == "si"){
        console.log("\nEstimado cliente: en base al tipo de vehículo",tipoV,"alquilado, considerando los",cantDias,"días utilizados y que ha elegido usar la silla de bebé, \nel monto total a pagar es de: $"+returnPrecioFuncion);
    }
    else{
        console.log("\nEstimado cliente: en base al tipo de vehículo",tipoV,"alquilado, considerando los",cantDias,"días utilizados, el monto total a pagar es de: $"+returnPrecioFuncion);
    }
    }