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
    let botonExp = $('.btnXP');
    let listaExp01 = $('.mas-info-desk');
    let listaExp02 = $('.mas-info-mobile');
    let resolucion = $(window).width();
    $(botonExp).css('background-color', '');
    for (let i = 0; i < botonExp.length ; i++){
        
        if(resolucion > 992){
            if(botonExp[i].id == $(this).attr('id')){
                $(listaExp01[i]).show('slow')
                elemento = botonExp[i];
                $(elemento).css('background-color', '#DED29E');
            }else{
                $(listaExp01[i]).hide('slow')
            }
        }
        if(resolucion < 992){
            if(botonExp[i].id == $(this).attr('id')){
                $(listaExp02[i]).show('slow')
                elemento = botonExp[i];
                $(elemento).css('background-color', '#DED29E');
            }else{
                $(listaExp02[i]).hide('slow')
            }
        }
    }
});