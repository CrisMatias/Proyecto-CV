//Botones Sidebar
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

//Botones Estudios
$('.inactive-btn').hide('slow')
$('.active-btn').click(function() { 
    let listaRow = $('.active-btn');
    let listaHidden = $('.inactive-btn')
    for (let i = 0; i < listaRow.length ; i++){
        if(listaRow[i].id == $(this).attr('id') ){
            $(listaHidden[i]).toggle('slow')
            colores = listaRow[i]
            $(colores).toggleClass('eduBtnActive');
        }
    }
    
});


//Botones Experiencia Laboral

$('.btnXP').click(function() { 
    let listaBotones = $('.btnXP');
    let listaDiv = $('.mas-info');
    $(listaBotones).css('background-color', '');
    for (let i = 0; i < listaBotones.length ; i++){
        if(listaBotones[i].id == $(this).attr('id')){
            $(listaDiv[i]).show('slow')
            elemento = listaBotones[i];
            $(elemento).css('background-color', '#DED29E');
        }else{
            $(listaDiv[i]).hide('slow')
        }
    }
});