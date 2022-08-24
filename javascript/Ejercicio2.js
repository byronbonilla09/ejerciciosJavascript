
function process2(nombre, cedula, telefono, email){
    let valName = validateName(nombre);
    let objName = JSON.parse(valName);
    if (objName['statusCode'] != 200) {
        console.log('valName: '+valName);
        return valName;
    }
    if (cedula <= 1000000000) {
        return '{"statusCode": 400, "status": "Error", "message": "Cédula inválida: debe ser mayor a 1000000000." }';
    }
    if (telefono.toString().charCodeAt(0) != 51 || telefono.toString().length != 10) {
        return '{"statusCode": 400, "status": "Error", "message": "El número de teléfono debe iniciar con 3 y longitud igual a 10 números." }';
    }
    if (!validateEmail(email)) {
        return '{"statusCode": 400, "status": "Error", "message": "Email no válido." }';
    }
    return '{"statusCode": 200, "status": "Ok", "message": "Información procesada correctamente"}';
}

function validateName(nombre) {
    let arrayName = nombre.split(' ');
    if (arrayName.length <= 2) {
        return '{"statusCode": 400, "status": "Error", "message": "Nombre inválido: no contiene tres o mas palabras."}';
    }
    for (var i = 0; i < arrayName.length; i++) {
        let palabra = arrayName[i];
        if (palabra.charCodeAt(0) < 65 || palabra.charCodeAt(0) > 90 || palabra.length <= 1) {
            return '{"statusCode": 400, "status": "Error", "message": "Nombre inválido: debe contener la primera letra de cada palabra en mayúscula y mas de una letra." }';
        }
    }
    return '{ "statusCode": 200, "status": "Ok", "message": "Nombre válido"}';
}

function validateEmail(email) {
  return email.match(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
}

console.log(JSON.stringify(process2('Byron Ismael Bonilla', 1090497038, 3124672344, 'bybonilla@misena.edu.co'))); 