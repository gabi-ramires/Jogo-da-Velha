var audiop = new Audio('audiop.mp3');
audiop.volume=0.3;

function RegularSom() {
    var som = document.getElementById('so')

    var classe = som.getAttribute('class');
    var icone = document.getElementById('icone')
    

    console.log(classe);

    if (classe == "som") {


        audiop.play();
        som.classList.add('clicado');

        icone.classList.remove('mdi-volume-off');
        icone.classList.add('mdi-volume-medium');



    } else {
        audiop.pause();
        som.classList.remove('clicado');

        icone.classList.remove('mdi-volume-medium');
        icone.classList.add('mdi-volume-off');
    }
}




function Vitoria() {
    const vitoria = new Audio('vitoria.mp3');
    vitoria.play();
    vitoria.volume=0.3;
}

var matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

var n0 = document.getElementById('0');
var n1 = document.getElementById('1');
var n2 = document.getElementById('2');
var n3 = document.getElementById('3');
var n4 = document.getElementById('4');
var n5 = document.getElementById('5');
var n6 = document.getElementById('6');
var n7 = document.getElementById('7');
var n8 = document.getElementById('8');



var area = document.getElementById('area');



function Verificar() {
    matriz[0][0] = n0.value;
    matriz[0][1] = n1.value;
    matriz[0][2] = n2.value;
    matriz[1][0] = n3.value;
    matriz[1][1] = n4.value;
    matriz[1][2] = n5.value;
    matriz[2][0] = n6.value;
    matriz[2][1] = n7.value;
    matriz[2][2] = n8.value;




    // percorre LINHAS
    for (var i = 0; i < 3; i++) {

        // percorre COLUNAS
        for (var j = 0; j < 3; j++) {

            if ((matriz[i][0] == matriz[i][1]) && (matriz[i][0] == matriz[i][2])) {  //verifica linhas iguais

                if ((matriz[i][1] != "") && (matriz[i][2] != "")) { //garante que não é vazio

                    area.innerHTML = `${matriz[i][j]} Ganhou!`
                    Vitoria();
                }
            }

            if ((matriz[0][j] == matriz[1][j]) && (matriz[0][j] == matriz[2][j])) {  //verifica colunas iguais

                if ((matriz[1][j] != "") && (matriz[2][j] != "")) { //garante que não é vazio

                    area.innerHTML = `${matriz[i][j]} Ganhou!`
                    Vitoria();
                }
            }

            if ((matriz[0][0] == matriz[1][1]) && (matriz[0][0] == matriz[2][2])) {  //verifica diagonal \

                if ((matriz[0][0] != "") && (matriz[2][2] != "")) { //garante que não é vazio

                    area.innerHTML = `${matriz[0][0]} Ganhou!`
                    Vitoria();
                }
            }

            if ((matriz[0][2] == matriz[1][1]) && (matriz[0][2] == matriz[2][0])) {  //verifica diagonal /

                if ((matriz[0][2] != "") && (matriz[2][0] != "")) { //garante que não é vazio

                    area.innerHTML = `${matriz[0][2]} Ganhou!`
                    Vitoria();
                }
            }



        }
    }

}


var contador = 0;

function Atribuir(id) {


    var valor = document.getElementById(id);
    var jog = document.getElementById('jog');
    contador++

    if (contador % 2 == 0) {
        valor.style.color = "blue";
        valor.value = "O";

        jog.style.color = "red";
        jog.innerHTML = "X"
        mouseX();
    }

    else {
        valor.style.color = "red";
        valor.value = "X";

        jog.style.color = "blue";
        jog.innerHTML = "O";
        mouseO();
    }


}

function mouseX() {
    var mouse = document.getElementsByTagName('body')[0];
    for (var i = 0; i < 9; i++) {
        var input = document.getElementById(i);

        mouse.classList.remove('O');
        input.classList.remove('O');
    }


}

function mouseO() {
    var mouse = document.getElementsByTagName('body')[0];
    for (var i = 0; i < 9; i++) {
        var input = document.getElementById(i);

        mouse.classList.add('O');
        input.classList.add('O');
    }

}


var reset = document.getElementById('reset')
function Resetar() {

    area.innerHTML = "";


    n0.value = "";
    n1.value = "";
    n2.value = "";
    n3.value = "";
    n4.value = "";
    n5.value = "";
    n6.value = "";
    n7.value = "";
    n8.value = "";

}

