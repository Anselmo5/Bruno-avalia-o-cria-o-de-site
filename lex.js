let a = document.getElementById("inp1").value ;
let b = document.getElementById("inp2").value  ;
let c = document.getElementById("r").value  ;


function soma(){
    let x = document.getElementById("inp1").value ;
    let y = document.getElementById("inp2").value ;
    let p = parseFloat(x) + parseFloat(y) ;

    document.getElementById("r").value = p
    alert(' Seu Calculo foi realizado')
}

function subtracao() {
    let x = document.getElementById("inp1").value ;
    let y = document.getElementById("inp2").value ;
    let p = parseFloat(x) - parseFloat(y) ;

    document.getElementById("r").value = p
    alert(' Seu Calculo foi realizado')
}

function divisao(){
    let x = document.getElementById("inp1").value ;
    let y = document.getElementById("inp2").value ;
    let p = parseFloat(x) / parseFloat(y) ;

    document.getElementById("r").value = p
    alert(' Seu Calculo foi realizado')
}


function mutiplicacao(){
    let x = document.getElementById("inp1").value ;
    let y = document.getElementById("inp2").value ;
    let p = parseFloat(x) * parseFloat(y) ;

    document.getElementById("r").value = p
    alert(' Seu Calculo foi realizado')
}