function hablar(mensaje){
    alert(mensaje);
};
let control= 0;

alert("Bienvenid@ a tu espacio favorito de confianza");

const nombre = prompt("Para comenzar, Escriba su nombre");

hablar("Hola " + nombre + " ¿En que puedo ayudarte hoy?");


while (control == 0){
    let menu = prompt(`Escoge una de las siguientes opciones: 1. Quieres un consejo 2. Quieres palabras de apoyo 3. Estoy bien, solo vine a saludar`);
    if (menu == "1"){
        control= control + 1;
    }
    else if (menu == "2"){
        control= control + 1;
    }
    else if (menu == "3"){
        hablar("Me alegro " + nombre + " Ten un excelente día");
        control= 1
    }
    else{
        hablar("Opción invalida")
        let control= 0;
    }
}