//Botones Sidebar
$('.botnData').click(function() { 
    let listaBotones = $('.botnData');
    let listaDiv = $('.container-info')
    $(listaBotones).css('background-color', '')
    $(listaBotones).css('color', '')
    for (let i = 0; i < listaBotones.length ; i++){
        if(listaBotones[i].id == $(this).attr('id')){
            $(listaDiv[i]).show('slow')
            const elemento = listaBotones[i]
            $(elemento).css('background-color', '#4D4637')
            $(elemento).css('color', '#e7e4d3')
        }else{
            $(listaDiv[i]).hide('slow')
        }
    }
});

//Botones Para Copiar
const elemento = document.querySelector('.contenido-texto');

$('.icono-font').click(function(){
    let listaBtn = $('.icono-font')
    const copiarTexto = $('.contenido-texto')
    const textoACopiar = $(copiarTexto)
    copyToClipBoard(textoACopiar);
    for (let i = 0; i < listaBtn.length ; i++){
        if(listaBtn[i].id == $(this).attr('id') ){
            document.querySelector('.mensaje-copy').classList.add('show');
             setTimeout(()=>{
            document.querySelector('.mensaje-copy').classList.remove('show');
            },1300);
            copyToClipBoard(textoACopiar[i]);
        }
    }
    function copyToClipBoard(textoACopiar){
        const inputOculto = document.createElement('input');
        inputOculto.setAttribute('value', textoACopiar.innerText);
        document.body.appendChild(inputOculto);
        inputOculto.select();
        document.execCommand('copy');
        document.body.removeChild(inputOculto);
    }
})

function copyToClipBoard(textoACopiar){
    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', textoACopiar.innerText);

    document.body.appendChild(inputOculto);

    inputOculto.select();

    document.execCommand('copy');

    document.body.removeChild(inputOculto);

   
}

//Botones Estudios
    $('.inactive-btn').hide()
    $('.active-btn').click(function() { 
    let listaRow = $('.active-btn');
    let listaHidden = $('.inactive-btn')
    for (let i = 0; i < listaRow.length ; i++){
        if(listaRow[i].id == $(this).attr('id') ){
            $(listaHidden[i]).toggle('slow')
            const colores = listaRow[i]
            $(colores).toggleClass('eduBtnActive');
        }
    }
    
});

//Botones Experiencia Laboral
$('.btnXP').click(function() { 
    let botonExp = $('.btnXP');
    let listaExp01 = $('.mas-info-desk');
    let listaExp02 = $('.mas-info-mobile');
    let resolucion = $(window).width();
    $(botonExp).css('background-color', '');
    $(botonExp).css('font-weight', '');
    $(botonExp).css('border-color', '');
    $(botonExp).css('border-style', '');
    $(botonExp).css('border-width', '',);
    for (let i = 0; i < botonExp.length ; i++){
        
        if(resolucion > 992){
            if(botonExp[i].id == $(this).attr('id')){
                $(listaExp01[i]).show('slow')
                const elemento = botonExp[i];
                $(elemento).css('background-color', '#DED29E');
                $(elemento).css('font-weight', 'bolder');
                $(elemento).css('border-color', '#4D4637');
                $(elemento).css('border-style', 'solid');
                $(elemento).css('border-width', '2px',);
            }else{
                $(listaExp01[i]).hide('slow')
            }
        }
        if(resolucion < 992){
            if(botonExp[i].id == $(this).attr('id')){
                $(listaExp02[i]).show('slow')
                const elemento = botonExp[i];
                $(elemento).css('background-color', '#DED29E');
            }else{
                $(listaExp02[i]).hide('slow')
            }
        }
    }
});
