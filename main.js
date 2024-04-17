// declaración de variables globales //
let control= 0;
let pregunta= "";
let repeticion = 0;

// Declaración de funciones //
function hablar(mensaje){
    alert(mensaje);
};
function bolaMagica(){
    let numero = Math.floor(Math.random()*3)+1;
    if (numero == 1){
        hablar("la respuesta para " + pregunta + " es No" )
    }
    else if(numero == 2){
        hablar("la respuesta para " + pregunta + " es Sí" )
    }
    else{
        hablar("La respuesta para " + pregunta + " es Tal vez")
    }
}


//Mensaje de bienvenida//
alert("Bienvenid@ a tu espacio favorito de confianza");

const nombre = prompt("Para comenzar, Escriba su nombre");

hablar("Hola " + nombre + " ¿En que puedo ayudarte hoy?");

// Menú principal del simulador//
while (control == 0){
    let menu = prompt(`Escoge una de las siguientes opciones: 1. Quieres un consejo 2. Quieres palabras de apoyo 3. Estoy bien, solo vine a saludar`);
    if (menu == "1"){
        control= control + 1;
        while (control == 1){
            hablar("Tengo una respuesta para todas tus preguntas, pero solo de sí o no");
            pregunta= prompt("Escribe tu pregunta, recuerda solo de si o no");
            bolaMagica();
            repeticion= prompt("Tienes otra pregunta? 1. Si 2. No")
            if (repeticion == 1){
                control = 1;
            }
            else if (repeticion == 2){
                hablar("Me alegro " + nombre + " Ten un excelente día");
                control= control+1;
            }
            else{
                hablar("Opción invalida");
                control= 1;
            }
        }
    }
    else if (menu == "2"){
        control= 3;
        hablar("Eres una gran persona, nunca olvides tu gran potencial!");
    }
    else if (menu == "3"){
        hablar("Me alegro " + nombre + " Ten un excelente día");
        control= 3;
    }
    else{
        hablar("Opción invalida");
        control= 0;
    }
}
