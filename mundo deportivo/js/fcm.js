/*
    Alumno: Abdelaziz El Ouastani
    DAWEC -2N DAW 
*/
function getFcm(){
var ultag="<ul>";
    var li1="<li>Zona de recuperació (60%-70%).</li>";
    var li2="<li>Zona aeròbica (70%-80%).</li>";
    var li3="<li>Zona anaeròbica (80%-90%).</li>";
    var li4="<li>Línia vermella (90%-100%).</li>";
    var ulclose="</ul>"
   var tabla =ultag+li1+li2+li3+li4+ulclose;
    var edad="";
    var sexo="";
    var edad_correcta;
    var sexo_correcto;
    var esCierto;
    do{
        edad = parseInt(prompt("Escribe su edad")); //parseInt convierte string a int
        sexo = prompt("Escribe su sexo mujer/hombre");
        var minisculas=sexo.toLowerCase();
        edad_correcta=edad>=20 && edad<=80;
        sexo_correcto=minisculas==="mujer"|| minisculas==="hombre";
        esCierto=edad_correcta&&sexo_correcto;
        
    }while(!esCierto); 
    var result1;
    if(sexo==="hombre"){
        result1=220-edad;
        li1="<li>Zona de recuperació (60%-70%): "+(result1*0.6)+" y "+(result1*0.7)+"</li>";
        li2="<li>Zona aeròbica (70%-80%): "+(result1*0.7)+" y "+(result1*0.8)+"</li>";
        li3="<li>Zona anaeròbica (80%-90%): "+(result1*0.8)+" y "+(result1*0.9)+"</li>";
        li4="<li>Línia vermella (90%-100%): "+(result1*0.9)+" y "+(result1*1)+"</li>";
    }else{
        result1=226-edad;
          li1="<li>Zona de recuperació (60%-70%): "+(result1*0.6)+" y "+(result1*0.7)+"</li>";
        li2="<li>Zona aeròbica (70%-80%): "+(result1*0.7)+" y "+(result1*0.8)+"</li>";
        li3="<li>Zona anaeròbica (80%-90%): "+(result1*0.8)+" y "+(result1*0.9)+"</li>";
        li4="<li>Línia vermella (90%-100%): "+(result1*0.9)+" y "+(result1*1)+"</li>";
    }
    tabla =ultag+li1+li2+li3+li4+ulclose;
    document.getElementById("contenido").innerHTML=tabla;
 
  
    
}


    
       
   /*
    window.onload=function(){
             document.getElementsByTagName("main")[0].innerHTML; 
         }  
   */
 
