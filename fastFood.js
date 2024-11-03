console.log("--------------- Micro desafio 2 ---------------")

function callback(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){ // Retorna total a pagar
    let valorTipoH = 0;
    let j = 30;
    let q = 25;
    let salsaT = 5;
    let mayon = 5;
    let most = 5;
    let tom = 15;
    let lech = 10;
    let ceb = 10;

    switch(tipoHamburguesa.toLowerCase()){
        case "carne": 
            valorTipoH = 1800;
            break;
        case "pollo": 
            valorTipoH = 1500;
            break;
        case "veggie": 
            valorTipoH = 1200;
            break;
        default:
            valorTipoH = null;
            break;
        }

    if(!valorTipoH) return;     // Si el resultado es de tipo falsy (null, undefined, NaN...), retorna vacío. 
        
        if(jamon){
            valorTipoH += j;
        }
        if(queso){
            valorTipoH += q; 
        }
        if(salsaTomate){
            valorTipoH += salsaT; 
        }
        if(mayonesa){
            valorTipoH += mayon; 
        }
        if(mostaza){
            valorTipoH += most; 
        }
        if(tomate){
            valorTipoH += tom; 
        }
        if(lechuga){
            valorTipoH += lech; 
        }
        if(cebolla){
            valorTipoH += ceb; 
        }
        return valorTipoH;
    }

        // Funcion para concatenar los strings de los elementos elegidos.

    function mensajeCondimentos(jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
        let mensaje = "";
        if(jamon != false){
            mensaje += "*Jamon ";
        }
        if(queso != false){
            mensaje += "*Queso "; 
        }
        if(salsaTomate != false){
            mensaje += "*Salsa de tomate "; 
        }
        if(mayonesa != false){
            mensaje += "*Mayonesa "; 
        }
        if(mostaza != false){
            mensaje += "*Mostaza "; 
        }
        if(tomate != false){
            mensaje += "*Tomate "; 
        }
        if(lechuga != false){
            mensaje += "*Lechuga "; 
        }
        if(cebolla != false){
            mensaje += "*Cebolla "; 
        }
        return mensaje;
    }
    
    function fastFood(nombreCliente, apellidoCliente, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
        let mensaje;
        let returnDeCallback = callback(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla); 
        if (returnDeCallback && (jamon || queso || salsaTomate || mayonesa || mostaza || tomate || lechuga || cebolla)){
            mensaje = `Estimado ${nombreCliente} ${apellidoCliente}, el monto total a pagar por la hamburguesa de ${tipoHamburguesa} que tiene los siguientes condimentos:\n 
            ${mensajeCondimentos(jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla)}\n
El total a pagar es de: $${returnDeCallback}`
            return mensaje;
        }
        if(returnDeCallback){
            mensaje = `Estimado ${nombreCliente} ${apellidoCliente}, el monto total a pagar por la hamburguesa de ${tipoHamburguesa} es de: $${returnDeCallback} laalal`;
            return mensaje;
        }
        mensaje = "No pudo completarse la operación. Tipo de hamburguesa inválida o mal escrita."
        return mensaje;
    }
    
    // console.log(fastFood("----------------- Console log con variables :-----------------------\n",nameUser, surnameUser, tipoDeHamburguesa, jam, cheese, tomatoSalsa, may, hamburguesasEnSerio, tomato, hoja, papo,"\n"))
    
    // let nameUser = "Pepe";
    // let surnameUser = "Alcatraz";
    // let tipoDeHamburguesa = "pollo";
    // jam = false;
    // cheese = false;
    // tomatoSalsa= true;
    // may = true;
    // hamburguesasEnSerio = true;
    // tomato = false;
    // hoja = true;
    // papo = false;
    
    console.log("\n\n----------------- Console log 1:-----------------------\n\n",fastFood("Daniel", "Santacruz", "pollo", true, true, true, true, true, true, true, true,"\n"))
    console.log("\n\n----------------- Console log 2:-----------------------\n\n",fastFood("Martina", "Rojas", "carne", false, false, false, false, true, false, true, false,"\n"))
    console.log("\n\n----------------- Console log 3:-----------------------\n\n",fastFood("Martin", "Asaraza", "martes", false, true, false, false, false, false, true, false,"\n"))
    console.log("\n\n----------------- Console log 4:-----------------------\n\n",fastFood("Palio", "Filipinas", "carne", false, false, true, false, true, false, false, false,"\n"))
    console.log("\n\n----------------- Console log 5:-----------------------\n\n",fastFood("Micelaneo", "Personaje", "lalala", false, false, false, false, false, false, false, false,"\n"))
    console.log("\n\n----------------- Console log 6:-----------------------\n\n",fastFood("Diego", "Pizza", "pollo", false, false, true, false, false, false, false, false,"\n"))
    console.log("\n\n----------------- Console log 7:-----------------------\n\n",fastFood("Maratea", "Zeuz", "veggie", false, true, false, false, true, true, false, true,"\n"))

    
    // Ejemplo de objetos para mi
    // let condimentosObj = {
    //     jamon: "jamon"
    // }
    // condimentosObj[condimento]