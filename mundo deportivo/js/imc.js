/*
    Alumno: Abdelaziz El Ouastani
    DAWEC -2N DAW 
*/
   var tabla ="<p style='color:green;'>Bienvenid@,<br/>Nuestra web le pone a su disposición un kit de herramientas que esperamos que le servan !!</p>"
  window.onload=function(){

      document.getElementById("contenido").innerHTML=tabla;
                            

                          } //carga el contenido
  

function getImc(){
    var ultag="<ul>";
    var li1="<li><16.00: Infrapeso (delgadez severa)</li>";
    var li2="<li>16.00 - 16.99: Infrapeso (delgadez moderada)</li>";
    var li3="<li>17.00 - 18.49: Infrapeso (delgadez aceptable)</li>";
    var li4="<li>18.50 - 24.99: Peso normal</li>";
    var li5="<li>25.00 - 29.99: Sobrepeso</li>";
    var li6 ="<li>30.00 - 34.99: Obeso (Tipo I)</li>";
    var li7="<li>35.00 - 40.00: Obeso (Tipo II)</li>";
    var li8="<li>>40.00: Obeso (Tipo III)</li>";
    var ulclose="</ul>"
     tabla="";
   
    var res;
    var peso = parseFloat(prompt("Escribe su peso (g)")); //parseInt convierte string a int
    var altura = parseFloat(prompt("Escribe su altura (m)"));
    var resultado =parseFloat(peso/(altura*altura));
    if(resultado<16.00){
        res="<h3>Resultado: delgadez severa</h3>";
        li1='<li id="li_selected"><16.00: Infrapeso (delgadez severa)</li>';
        tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
        document.getElementById("contenido").innerHTML=tabla;
       
        
    }else if(resultado>=16.00 && resultado<=16.99){
        res="<h3>Resultado: delgadez moderada</h3>";
          li2='<li id="li_selected">16.00 - 16.99: Infrapeso (delgadez moderada)</li>';
         tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
         document.getElementById("contenido").innerHTML=tabla;
        
    }else if(resultado>=17.00 && resultado<=18.49){
         res="<h3>Resultado: Delgadez aceptable</h3>";
         li3='<li id="li_selected">17.00 - 18.49: Infrapeso (delgadez aceptable)</li>';
          tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
         document.getElementById("contenido").innerHTML=tabla;
        
    }else if(resultado>=18.50 && resultado<=24.99){
          res="<h3>Resultado: Peso normal</h3>";
         li4='<li id="li_selected">18.50 - 24.99: Peso normal</li>';
          tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
         document.getElementById("contenido").innerHTML=tabla;
        
       
    }else if(resultado>=25.00 && resultado<=29.99){
        res="<h3>Resultado: Sobrepeso</h3>";
         li5='<li id="li_selected">25.00 - 29.99: Sobrepeso</li>';
          tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
         document.getElementById("contenido").innerHTML=tabla;
        
    }else if(resultado>=30.00 && resultado<=34.99){
        res="<h3>Resultado: Obeso"+"("+"tipo I"+")</h3>";
        li6 ='<li id="li_selected">30.00 - 34.99: Obeso (Tipo I)</li>';
         tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
         document.getElementById("contenido").innerHTML=tabla;
        
    }else if(resultado>=35.00 && resultado<=40.00){
        res="<h3>Resultado: Obeso"+"("+ "tipo II+"+")</h3>";
         li7="<li id='li_selected'>35.00 - 40.00: Obeso (Tipo II)</li>";
         tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
         document.getElementById("contenido").innerHTML=tabla;
        
    }else if(resultado>40){
         res="<h3>Resultado: Obeso"+"("+"tipo III+"+")</h3>";
         li8="<li id='li_selected'>>40.00: Obeso (Tipo III)</li>";
         tabla =res+ultag+li1+li2+li3+li4+li5+li6+li7+li8+ulclose;
         document.getElementById("contenido").innerHTML=tabla;
        
    }
    
}
    