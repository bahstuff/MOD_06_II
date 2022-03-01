//DESCLARAMOS ALFABETOS E INPUT POSIBLE
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var text;

var getText = () =>  text = document.getElementById("input").value;

document.getElementById("input").addEventListener("change", getText);

var searchIndex = (alphabet, letter) => {
    for(var i = 0; i< alphabet.length; i++){
        if(alphabet[i] === letter) return i;
    }
    return -1;
}

var transformLetter = (letter, origen, destino) => {
    var letterIndex = searchIndex(origen, letter);
    if(letterIndex === -1){
        return letter;
    } else{
        return destino[letterIndex];
    }
}

var transformMessage = (message, origen, destino) => {
    if(!message){
        alert("DEBES INTRODUCIR UN TEXTO");
    } else {
        var messageLowerCase = message.toLowerCase();
        var result = " ";
        for(var letter of messageLowerCase){
            result += transformLetter(letter, origen, destino);
        }
        document.getElementById("output").innerText = result;
        document.getElementById("input").value = "";
        text = "";
        return result;
    }
}

var clearAll = () => {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    text = "";
}

//2.GENERADOR ALEATORIO
var myArray = [];


var randomPick = () => {
    var n = parseInt(document.getElementById("n").value);
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);

    if (n > 0 && min < max && max-min >= n) {
        while (myArray.length < n) {
            var range = max - min + 1;
            var number = Math.floor(Math.random() * range) + min;
            if (!myArray.includes(number)) {
                myArray.push(number);
            }
        }
        document.getElementById("randomNumbers").innerText = myArray;
    } else {
        error();
    }
}

var clearPick = () => {
    document.getElementById("randomNumbers").innerHTML = "INTRODUCE LOS PARÁMETROS";
    document.getElementById("n").value = null ;
    document.getElementById("min").value = null;
    document.getElementById("max").value = null;
    myArray = [];
}

var error = () => {
    alert("SE HA PRODUCIDO UN ERROR AL INTRODUCIR LOS PARÁMETROS");
    clearPick();
}