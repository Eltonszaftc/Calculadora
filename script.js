function calcular() {
    //alert("Click no botão");
    //console.log("Mensagem click no botao");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operar = document.getElementById("oper").value;
    if(operar == "+"){
        var result = num1 + num2;
    }
    if(operar == "-"){
        var result = num1 - num2;
    }
    if(operar == "*"){
        var result = num1 * num2;
    }
    if(operar == "/"){
        var result = num1 / num2;
    }
    document.getElementById("calcular").value = result;
    console.log(result);
    document.getElementById("history").innerHTML += "<h1>"+num1 +operar +num2 +"=" +result +"</h1>";
}