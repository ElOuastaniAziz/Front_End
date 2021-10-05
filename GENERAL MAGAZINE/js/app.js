//const hamburger = document.querySelector('nav .hamburger');

//const navLinks = document.querySelector('nav .nav-links');

/* hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
 });*/

$(document).ready(function () {
    //Para a cambiar el calendario a español
  /*  $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);*/
    //fin de configuración de calendario a español

   // $("#date").datepicker({ minDate: 0 }); //minDate para desactivar los días anteriores
    const hamburger = document.querySelector('nav .hamburger');
    const navLinks = document.querySelector('nav .nav-links');
    $(hamburger).on("click", () => {
        $(navLinks).toggleClass('open');
       console.log($(hamburger))
       
    });


    /*var array=[
        {
                'nombre':'Abdelaziz',
                'apellido':'El Oua',
                'email':'aelouas@nodejs.res'
            },
            {
                'nombre':'Juan',
                'apellido':'Dominguez',
                'email':'jdominguez@nodejs.res'
            }
    ]

    var animales = [
        {especie: 'Leon', nombre: 'Rey'},
        {especie: 'Whale', nombre: 'Fail'}
      ];

      for (var i = 0; i < animales.length; i++) {
            (function () {
                console.log('#' + i  + ' ' + this.especie + ': ' + this.nombre);
            }).call(animales[i]);
      }

    

 
      console.log(document.images);*/

    

    
    
   
   
});
