'use strict';

function contador(text) {
    var letras=text.toLowerCase().split("")
    var contadorVocales=[0,0,0,0,0]
    for(var i=0; i < letras.length;i++){
        if (letras[i]=="a" || letras[i]=="A"){
            contadorVocales[0]=contadorVocales[0]+1
        }
        if (letras[i]=="e" || letras[i]=="E"){
            contadorVocales[1]=contadorVocales[1]+1
        }
        if (letras[i]=="i" || letras[i]=="I"){
            contadorVocales[2]=contadorVocales[2]+1
        }
        if (letras[i]=="o" || letras[i]=="O"){
            contadorVocales[3]=contadorVocales[3]+1
        }
        if (letras[i]=="u" || letras[i]=="U"){
            contadorVocales[4]=contadorVocales[4]+1
        }
    }
    return contadorVocales;
}

var palabra="Hola gato"
var letrasContadas=contador(palabra)
var vocales=["A","E","I","O","U"]

for(var i=0; i < letrasContadas.length;i++){
    console.log(vocales[i],": ",letrasContadas[i]);
}
