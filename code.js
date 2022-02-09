const numeros = "1234567890"; // constante con la cadena de texto para los numeros
const letras = "ABCDEFGHIJ"; // constante con la cadena de textos para las letras

let p_letras = document.getElementById("p1");// DOM para p1 y poder mostrar texto
let p_numeros = document.getElementById("p2");// DOM para p2 ..........

let text_numeros = "";// variable para almacenar los numero que se escriben
let text_letras = "";// .......... las letras que  se escriben



// for o ciclo para ponerle texto a todos los 10 botones
// let i = 0 inicia la variable i en 0
// i < 10 repite lo que esta dentro del for hasta que se cumpla la condicion
// i++ incremento de la variable i en uno  i++ es igual a i = i + 1


for (let i = 0; i < 10; i++) {
    let id_btn = `btn${i}`; // en la variable id_btn se guarda el id de los botones 
    let mybtn = document.getElementById(id_btn); // DOM para modificar cada boton 
    let l = letras.charAt(i); // letras.charAt(i) significa que del array letras saque el de la posicion i
    let n = numeros.charAt(i); // numeros.charAt(i) ...............
    mybtn.innerHTML =  `${l}/${n}`; // ponerle a cada boton su texto 
    mybtn.onclick = function () { //  acada boton asociar la funcion cunado se da click
        btnClick(mybtn);        
    };    
}



// funcion que recibe el boton que se preciona como parametro btnClick(btn)
//el parametro es btn

// 
function btnClick(btn) { 

    if (text_numeros == "" && text_letras != letras) {// primero revisa que no halla numeros escritos y luego que letras no este completo
        // en cada if aparece lo que debe haber escrito antes para poder poner la letra 
        if (btn.innerHTML == "A/1" && text_letras == "") {
            text_letras = text_letras + "A";
        } else if (btn.innerHTML == "B/2" && text_letras == "A") {
            text_letras = text_letras + "B";
        } else if (btn.innerHTML == "C/3" && text_letras == "AB") {
            text_letras = text_letras + "C";
        } else if (btn.innerHTML == "D/4" && text_letras == "ABC") {
            text_letras = text_letras + "D";
        } else if (btn.innerHTML == "E/5" && text_letras == "ABCD") {
            text_letras = text_letras + "E";
        } else if (btn.innerHTML == "F/6" && text_letras == "ABCDE") {
            text_letras = text_letras + "F";
        } else if (btn.innerHTML == "G/7" && text_letras == "ABCDEF") {
            text_letras = text_letras + "G";
        } else if (btn.innerHTML == "H/8" && text_letras == "ABCDEFG") {
            text_letras = text_letras + "H";
        } else if (btn.innerHTML == "I/9" && text_letras == "ABCDEFGH") {
            text_letras = text_letras + "I";
        } else if (btn.innerHTML == "J/0" && text_letras == "ABCDEFGHI") {
            text_letras = text_letras + "J";
        } else {
            alert("Faltan letras");
        }
        p_letras.innerHTML = text_letras; 
   
    } else if (text_letras == letras && text_numeros != numeros) {
        if (btn.innerHTML == "A/1" && text_numeros == "") {
            text_numeros = text_numeros + "1";
        } else if (btn.innerHTML == "B/2" && text_numeros == "1") {
            text_numeros = text_numeros + "2";
        } else if (btn.innerHTML == "C/3" && text_numeros == "12") {
            text_numeros = text_numeros + "3";
        } else if (btn.innerHTML == "D/4" && text_numeros == "123") {
            text_numeros = text_numeros + "4";
        } else if (btn.innerHTML == "E/5" && text_numeros == "1234") {
            text_numeros = text_numeros + "5";
        } else if (btn.innerHTML == "F/6" && text_numeros == "12345") {
            text_numeros = text_numeros + "6";
        } else if (btn.innerHTML == "G/7" && text_numeros == "123456") {
            text_numeros = text_numeros + "7";
        } else if (btn.innerHTML == "H/8" && text_numeros == "1234567") {
            text_numeros = text_numeros + "8";
        } else if (btn.innerHTML == "I/9" && text_numeros == "12345678") {
            text_numeros = text_numeros + "9";
        } else if (btn.innerHTML == "J/0" && text_numeros == "123456789") {
            text_numeros = text_numeros + "0";
        } else {
            alert("Faltan numeros");
        }
        p_numeros.innerHTML = text_numeros;
    }else{
        alert("Final !");
    }

}

