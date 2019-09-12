$(document).ready(function(){

    var limpar = (" ");
    
    $("#bt1").click(function(){
        var valor1soma = $("#valor1soma").val();
        var valor2soma = $("#valor2soma").val();
        var resultado = parseInt(valor1soma) + parseInt(valor2soma);
        $("#resultado1").val(resultado);
    });

    $("#bt2").click(function(){
        var valor1sub = $("#valor1sub").val();
        var valor2sub = $("#valor2sub").val();
        var resultado = parseInt(valor1sub) - parseInt(valor2sub);
        $("#resultado2").val(resultado);
    });

    $("#bt3").click(function(){
        var valor1mult = $("#valor1mult").val();
        var valor2mult = $("#valor2mult").val();
        var resultado = parseInt(valor1mult) * parseInt(valor2mult);
        $("#resultado3").val(resultado);
    });

    $("#bt4").click(function(){
        var valor1div = $("#valor1div").val();
        var valor2div = $("#valor2div").val();
        var resultado = parseInt(valor1div) / parseInt(valor2div);
        $("#resultado4").val(resultado);
    });

    $("#limpar1").click(function(){
        document.getElementById("valor1soma").value = limpar;
        document.getElementById("valor2soma").value = limpar;
        document.getElementById("resultado1").value = limpar;
    });

    $("#limpar2").click(function(){
        document.getElementById("valor1sub").value = limpar;
        document.getElementById("valor2sub").value = limpar;
        document.getElementById("resultado2").value = limpar;
    });

    $("#limpar3").click(function(){
        document.getElementById("valor1mult").value = limpar;
        document.getElementById("valor2mult").value = limpar;
        document.getElementById("resultado3").value = limpar;
    });

    $("#limpar4").click(function(){
        document.getElementById("valor1div").value = limpar;
        document.getElementById("valor2div").value = limpar;
        document.getElementById("resultado4").value = limpar;
    });

});