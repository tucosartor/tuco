
$(document).ready(function(){

    $("#pares").click(function(){
        fLocalMostraPares();
    });
});

function fLocalMostraPares(){

    var max = parseInt($("#tNumMax").val());

    $("#divResultado").html("");
    var separador = ", ";

    for(var i = 0; i <= max; i++){

        if(i == max - 1) separador = "";

        if(i % 2 == 0){
            $("#divResultado").append(i + ", ");
        };
    };
};