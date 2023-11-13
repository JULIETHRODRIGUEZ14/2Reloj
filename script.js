const deg = 6;

const horas = document.querySelector(".hora");/*traen y guardan lo que pase*/
const minutos = document.querySelector(".minuto");
const segundos = document.querySelector(".segundo");

setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours()*30;
    let min = tiempo.getMinutes()*deg;
    let seg = tiempo.getSeconds()*deg;

    horas.style.transform = `rotate(${ hr+ min / 12 }deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

    
function calcularTiempo(){
    /*variable*/ let tiempo = new Date(); 
    let hora = tiempo.getHours() % 12 || 12;
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    let actualizarReloj = hora < 12 ? `${('')}PM` : `${('')}AM`;
    /*agregar am o pm*/
    
    

    /*convertir la hora a formato de 12 horas */

    hora = hora % 12 || 12; // si es 0 establece la hora a formato de 12 horas


    /*establecemos y reasignamos valores a las variables hora, minuto y segundo*/
   
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos; /*si los segundos es inferior a 10 por favor poner un 0 al lado izquierdo*/
    
    let pantallaReloj = hora + ":" + minutos + ":" + segundos + actualizarReloj; /*se sepra con puntos para que se vean cercano a un reloj digital*/
    let relojanalogo = document.querySelector(".digital");
    relojanalogo.innerHTML = pantallaReloj; /*informacion sea enviada a la pantalla del reloj*/
    
    }
    calcularTiempo();//llama a la funcion una vez para mostrar la hora en el inicio
    setInterval(calculartiempo, 100); /*llamamos la funcion calcular tiempo metodo setInterval se actualice cada 1mil milisegundos 1segundo*/ 
    
    
    

})


    
    
