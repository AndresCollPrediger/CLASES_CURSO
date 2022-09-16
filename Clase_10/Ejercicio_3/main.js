var edad;
let sexo;
sexo = prompt("Introduce tu sexo (femenino o masculino)");

if (sexo == "femenino" || sexo == "masculino") { //Operador booleano OR '||' 
    edad = prompt("Introduce tu edad");

    if (sexo == "femenino") {
        if (edad >= 20) {
            window.alert("Puedes entrar, eres mayor de edad.");
        } else {
            if (edad > 0) {
                window.alert("No puedes entrar, eres menor de edad.");
            }
            else {
                alert("Datos ingresados incorrectos");
            }
        }
    }


    if (sexo == "masculino") {
        if (edad >= 18) {
            window.alert("Puedes entrar, eres mayor de edad.");
        } else {
            if (edad > 0) {
                window.alert("No puedes entrar, eres menor de edad.");
            }
            else {
                alert("Datos ingresados incorrectos");
            }
        }
    }

    console.log(sexo + "/" + edad);
}

else {
    alert("Datos ingresados incorrectos");
}
