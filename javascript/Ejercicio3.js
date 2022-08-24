
function process3(fecha, id){
    if (1 == id) {
        return verificarHorario1(fecha);
    }
    if (2 == id) {
       return verificarHorario2(fecha);
    }
    return 1;
}

function getCurrentTimestamp() {
  return new Date();
}

function verificarHorario1(fecha) {
    var diasemana = fecha.getDay();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    if (diasemana >=1 && diasemana <6 && hora +1 >= 8 && hora+1 <=13) {
        return 1;
    }
    return 0;
}

function verificarHorario2(fecha) {
    var diasemana = fecha.getDay();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    if ((diasemana >=1 && diasemana <5 && hora+1 >= 9 && hora+1 <=15)
    || (diasemana == 6 && hora+1 >= 8 && hora+1 <=12 && (hora+1 ==12 && minuto == 0 ))) {
        return 1;
    }
    return 0;
}
//ID 1: Lunes a Viernes de 08:00 a 13:00 y 15:00 a 18:00
//ID 2: Lunes a Jueves 09:00 a 15:00 y Sábado de 08:00 a 12:00. 
console.log(process3(getCurrentTimestamp(), 1));
console.log(process3(new Date("2022/08/18 16:15:30 GMT+0100"), 2));
