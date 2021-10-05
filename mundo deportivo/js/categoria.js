/*
    Alumno: Abdelaziz El Ouastani
    DAWEC -2N DAW 
*/
function getCategoria(){
    //declaracion de la lista.
    var res="<h3>Resultado:</h3>"
    var ul="<ul>";
    var li1="<li>VETERANOS: 30 AÑOS EN ADELANTE</li>";
    var li2="<li>AFICIONADOS: 19 AÑOS EN ADELANTE</li>";
    var li3="<li>JUVENILES:16, 17, y 18 AÑOS</li>";
    var li4="<li>CADETES: 14 y 15 AÑOS</li>";
    var li5="<li>INFANTILES: 12 y 13 AÑOS</li>";
    var li6="<li>ALEVINES: 10 y 11 AÑOS</li>";
    var li7="<li>BENJAMINES: 8 y 9 AÑOS</li>";
    var li8="<li>PREBENJAMINES: 6 y 7 AÑOS</li>";
    var li9="<li>CHUPETIN: 4 y 5 AÑOS</li>";
    var ulClose="</ul>";
    var lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;
    //introducción de datos
    var anyoNaciemiento=parseInt(prompt("Escribe su año de nacimiento"));
    var anyoActual = (new Date).getFullYear();
    
    //Resta año actual del año del nacimiento
    var restAnyo=anyoActual-anyoNaciemiento;
   
    
    //control de flujo de datos
    switch(true){
        
        case restAnyo>=30:
                        li1='<li id="li_selected">VETERANOS: 30 AÑOS EN ADELANTE</li>';
                        res="<h3>Resultado: VETERANOS</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
        case restAnyo>=19 && restAnyo<30:
                        li2='<li id="li_selected">AFICIONADOS: 19 AÑOS EN ADELANTE</li>';
                        res="<h3>Resultado: AFICIONADOS</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
          case restAnyo>=16 && restAnyo<19:
                        li3='<li id="li_selected">JUVENILES:16, 17, y 18 AÑOS</li>';
                        res="<h3>Resultado: JUVENILES</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
         case restAnyo>=14 && restAnyo<16:
                        li4='<li id="li_selected">CADETES: 14 y 15 AÑOS</li>';
                        res="<h3>Resultado: CADETES</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
        case restAnyo>=12 && restAnyo<14:
                        li5='<li id="li_selected">INFANTILES: 12 y 13 AÑOS</li>';
                        res="<h3>Resultado: INFANTILES</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
        case restAnyo>=10 && restAnyo<12:
                        li6='<li id="li_selected">ALEVINES: 10 y 11 AÑOS</li>';
                        res="<h3>Resultado: ALEVINES</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
                      
        case restAnyo>=8 && restAnyo<10:
                        li7='<li id="li_selected">BENJAMINES: 8 y 9 AÑOS</li>';
                        res="<h3>Resultado: BENJAMINES</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
                         
        case restAnyo>=6 && restAnyo<8:
                        li8='<li id="li_selected">PREBENJAMINES: 6 y 7 AÑOS</li>';
                        res="<h3>Resultado: PREBENJAMINES</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
     case restAnyo>=4 && restAnyo<6:
                        li9='<li id="li_selected">CHUPETIN: 4 y 5 AÑOS</li>';
                        res="<h3>Resultado: CHUPETIN</h3>";
                        lista=res+ul+li1+li2+li3+li4+li5+li6+li7+li8+li9+ulClose;break;
            
    }
    document.getElementById("contenido").innerHTML=lista;
}


