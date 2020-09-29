AOS.init();

//Codigo para el botón "subir arriba"
$(document).ready(function(){
  $(window).scroll(function(){
    //Para que aparezca el boton al deslizar hacia abajo y desaparezca hacia arriba
    if($(this).scrollTop()>0){
   
    $('#up').slideDown(300); //el botón se mostrará en 300mseg 
  } else{
    $('#up').slideUp(300);  //al subir el boton desaparecerá
  }
});

$('#up').on('click',function(){
  $('body,html').animate({
    scrollTop: 0 //vuelve a la pagina inicial scroll 0 al presionar
  }, 700); //tiempo 700ms
  return false;
});

});

