

var base = "";
document.getElementById("text").value = base;

function bt(n) {
    document.getElementById("text").value = document.getElementById("text").value+n;
    document.getElementById("text").innerHTML = document.getElementById("text").value;
}

function ris(){
    var ris = eval(document.getElementById("text").value);
    if(ris!=undefined){
        document.getElementById("text").value = ris;
        document.getElementById("text").innerHTML = ris;
    }
}

function canc(){
    document.getElementById("text").value = base;
    document.getElementById("text").innerHTML = base;
}