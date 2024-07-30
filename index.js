function esMinusculas (texto){
    return /^[a-z0-9\s.,;:!?()'"-]*$/m.test(texto);
}

function sinAcentos (texto){
    return !/[áéíóúÁÉÍÓÚ]/.test(texto)
}

function encriptarTexto (texto){
    let encriptado = '';
    var caracterAleatorios = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (var i=0; i < texto.length; i++){
        //console.log(texto[i])
        encriptado += texto[i];
        if ((i + 1) % 2 == 0){
            var caracterAleatorio = caracterAleatorios.charAt(Math.floor(Math.random() * caracterAleatorios.length));
            encriptado += caracterAleatorio;
        }

    }

    return encriptado;

    /*var binario = "";
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i); // Obtener el código ASCII del carácter
        var bin = charCode.toString(2); // Convertir el código ASCII a binario
        binario += bin.padStart(8, '0') + ' '; // Asegurar que cada binario tenga 8 bits (un byte)
    }
    return binario.trim();*/
}

function desencriptarTexto (texto){
    let desencriptado = '';
    for (var i=0; i < texto.length; i++){
        if ((i + 1) % 3 != 0){
            //console.log(texto[i])
            desencriptado += texto[i];
        }

    }

    return desencriptado;
}

function copiarTexto() {
    // Seleccionar el texto del párrafo
    var textoParaCopiar = document.getElementById('codificado');
    // Crear un área de texto temporal
    var areaDeTexto = document.createElement('textarea');
    areaDeTexto.value = textoParaCopiar.textContent; // Establecer el texto del área de texto

    document.body.appendChild(areaDeTexto);

    areaDeTexto.select();
    areaDeTexto.setSelectionRange(0, 99999); // Para dispositivos móviles*/

    document.execCommand('copy');
    document.body.removeChild(areaDeTexto);

    alert('¡Texto copiado al portapapeles!');

    document.getElementById('mensaje').style.display = "block";
    document.getElementById('texto-encriptado').style.display = "none";
    document.getElementById("texto-encriptar").value = "";
}

function mostrarTexto (opcion) {
    let texto = document.getElementById("texto-encriptar");
    //console.log(texto.value)
    var text = texto.value
    let textencriptado = ''

    if (!esMinusculas(text) || !sinAcentos(text)) {
        alert("El texto solo debe contener letras minúsculas sin acentos.");
        document.getElementById("texto-encriptar").value = "";
    }else {
        if (opcion==1){
            textencriptado = encriptarTexto(text)
        }else {
            textencriptado = desencriptarTexto(text)
        }
        
        document.getElementById("codificado").innerHTML = `${textencriptado}`;
        document.getElementById('mensaje').style.display = "none";
        document.getElementById('texto-encriptado').style.display = "flex";
        document.getElementById("texto-encriptar").value = "";
        console.log (textencriptado)
    }
}
