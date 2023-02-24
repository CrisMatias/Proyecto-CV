$('.botnData').click(function() { 
    let listaBotones = $('.botnData');
    let listaDiv = $('.container-info')
    $(listaBotones).css('background-color', '')
    $(listaBotones).css('color', '')
    for (let i = 0; i < listaBotones.length ; i++){
        if(listaBotones[i].id == $(this).attr('id')){
            $(listaDiv[i]).show('slow')
            elemento = listaBotones[i]
            $(elemento).css('background-color', '#4D4637')
            $(elemento).css('color', '#ffffff')
        }else{
            $(listaDiv[i]).hide('slow')
        }
    }
});

$('.row-hidden').hide('slow')
$('.row-active').click(function() { 
    let listaRow = $('.row-active');
    let listaHidden = $('.row-hidden')
    for (let i = 0; i < listaRow.length ; i++){
        if(listaRow[i].id == $(this).attr('id') ){
            $(listaHidden[i]).toggleClass('slow')
            colores = listaRow[i]
            $(colores).toogleClass('eduBtnActive');
//          $(colores).css('background-color', '#4D4637')
        }
    }
    
});
