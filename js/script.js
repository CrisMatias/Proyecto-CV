// function pressionar1(){
//     let contenido1 = document.getElementById('datos1')
//     let contenido2 = document.getElementById('datos2')
//     let contenido3 = document.getElementById('datos3')
//     let contenido4 = document.getElementById('datos4')
//     let contenido5 = document.getElementById('datos5')
//     let contenido6 = document.getElementById('datos6')
//     if(contenido1.classList.contains('container-text')){
//         contenido1.classList.remove("container-text")
//         contenido2.classList.add("container-text")
//         contenido3.classList.add('container-text')
//         contenido4.classList.add('container-text')
//         contenido5.classList.add('container-text')
//         contenido6.classList.add('container-text')
//     }
// }
// function pressionar2(){
//     let contenido1 = document.getElementById('datos1')
//     let contenido2 = document.getElementById('datos2')
//     let contenido3 = document.getElementById('datos3')
//     let contenido4 = document.getElementById('datos4')
//     let contenido5 = document.getElementById('datos5')
//     let contenido6 = document.getElementById('datos6')
//     if(contenido2.classList.contains('container-text')){
//         contenido2.classList.remove("container-text")
//         contenido1.classList.add("container-text")
//         contenido3.classList.add('container-text')
//         contenido3.classList.add('container-text')
//         contenido4.classList.add('container-text')
//         contenido5.classList.add('container-text')
//         contenido6.classList.add('container-text')
//     }
// }

// function pressionar3(){
//     let contenido1 = document.getElementById('datos1')
//     let contenido2 = document.getElementById('datos2')
//     let contenido3 = document.getElementById('datos3')
//     let contenido4 = document.getElementById('datos4')
//     let contenido5 = document.getElementById('datos5')
//     let contenido6 = document.getElementById('datos6')
//     if(contenido3.classList.contains('container-text')){
//         contenido3.classList.remove("container-text")
//         contenido1.classList.add("container-text")
//         contenido2.classList.add("container-text")
//         contenido4.classList.add('container-text')
//         contenido5.classList.add('container-text')
//         contenido6.classList.add('container-text')
//     }
// }
// function pressionar4(){
//     let contenido1 = document.getElementById('datos1')
//     let contenido2 = document.getElementById('datos2')
//     let contenido3 = document.getElementById('datos3')
//     let contenido4 = document.getElementById('datos4')
//     let contenido5 = document.getElementById('datos5')
//     let contenido6 = document.getElementById('datos6')
//     if(contenido4.classList.contains('container-text')){
//         contenido4.classList.remove("container-text")
//         contenido1.classList.add("container-text")
//         contenido2.classList.add("container-text")
//         contenido3.classList.add('container-text')
//         contenido5.classList.add('container-text')
//         contenido6.classList.add('container-text')
//     }
// }
// function pressionar5(){
//     let contenido1 = document.getElementById('datos1')
//     let contenido2 = document.getElementById('datos2')
//     let contenido3 = document.getElementById('datos3')
//     let contenido4 = document.getElementById('datos4')
//     let contenido5 = document.getElementById('datos5')
//     let contenido6 = document.getElementById('datos6')
//     if(contenido5.classList.contains('container-text')){
//         contenido5.classList.remove("container-text")
//         contenido1.classList.add("container-text")
//         contenido2.classList.add("container-text")
//         contenido3.classList.add("container-text")
//         contenido4.classList.add('container-text')
//         contenido6.classList.add('container-text')
//     }
// }
// function pressionar6(){
//     let contenido1 = document.getElementById('datos1')
//     let contenido2 = document.getElementById('datos2')
//     let contenido3 = document.getElementById('datos3')
//     let contenido4 = document.getElementById('datos4')
//     let contenido5 = document.getElementById('datos5')
//     let contenido6 = document.getElementById('datos6')
//     if(contenido6.classList.contains('container-text')){
//         contenido6.classList.remove("container-text")
//         contenido1.classList.add("container-text")
//         contenido2.classList.add("container-text")
//         contenido3.classList.add("container-text")
//         contenido4.classList.add('container-text')
//         contenido5.classList.add('container-text')
//     }
// }
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
            $(listaHidden[i]).toggle('slow')
        }
    }
});