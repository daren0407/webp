setInterval("print()", "400");

document.addEventListener('keydown', delChar);

var temp = '';
var out = '';

function print() {
    var answer = Math.floor(Math.random() * 26);
    var charOut = String.fromCharCode(answer + 65);

    out = document.getElementById("Out");
    out.innerHTML = charOut + out.innerHTML;
}

function delChar(e) {
    var last = out.innerHTML.substr(-1);

    if (last == e.key) {
        out.innerHTML = out.innerHTML.substr(0, out.innerHTML.length - 1);
    }
}