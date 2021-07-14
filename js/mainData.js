const btnJQ = $('.body--contain').prepend('<h1 id="body--title">Vamos a crear cuadraditos de colores con JQUERY')

const btnContador = document.querySelector('.btnContador')
btnContador.addEventListener('click', aumentar)
$('.btnContador').on('click', createDiv)

let inicio = 1//variable del inical del contador

class color {
    constructor(id) {
        this.id = id
    }
}
divColor= []

function aumentar(){//contador
    let valor = document.getElementById('cantidad').value = inicio++
    btnContador.setAttribute('id', `btn-${valor}`)  
}
function createDiv(e){
    const btnValor = e.target.id
    $('#colores').append(`<div class="newDiv" id="div--${btnValor}"></div>`)//creador del id de los div

    divColor.push(new color(`div--${btnValor}`))//crea el array con los div
    animateColor(e)//animacion 
    finColores(btnValor)//habilita reset
}

$('#reset').on('click', ()=>{location.reload()}).attr('disabled', true)

function finColores(btnValor){//habilitar y deshabilitar los botones
    if(btnValor === `btn-15`){
        $('#reset').attr('disabled', false)
        $('.btnContador').attr('disabled', true)
    }
}

function animateColor(e){//animaciones para hover
    let donde = e.target.id
        $(`#div--${donde}`).mouseover(()=> {$(`#div--${donde}`).addClass('fondoNegro')})
        $(`#div--${donde}`).mouseover(()=> {$(`#div--${donde}`).html('<audio src="../media/.mp3/arpa.mp3" autobuffet autoplay>paz</audio>')})
        $(`#div--${donde}`).mouseout(()=> {$(`#div--${donde}`).html('<img src="../media/arcoiris.png" id="imgMagic">')})
        $(`#div--${donde}`).mouseover(()=> {$(`#div--${donde}`).animate({height: 160, width: 160}, .5);})
        $(`#div--${donde}`).mouseout(()=> {$(`#div--${donde}`).animate({height: 150, width: 150}, 1000);})
        $(`#div--${donde}`).mouseout(()=> {$(`#div--${donde}`).removeClass('fondoNegro')})
}

