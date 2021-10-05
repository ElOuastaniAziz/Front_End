/*
    Alumno: Abdelaziz El Ouastani
    DAWEC -2N DAW 
*/
function getHorario(){
    
        var cabezera1='<table><tr><th>Lúnes</th><th>Martes</th><th>Miércloes</th><th>Jueves</th><th>Viernes</th></tr>';
    var tr1='';
     for(i=9;i<15;i=i+2){
        tr1+='<tr>';
         for(j=0;j<5;j++){
             tr1+='<td>'+i+':00 - '+(i+2)+':00 </td>';
         }
         tr1+='</tr>';
                   
    }
    var tablaEnteraManyana="<h4>Mañanas</h4>"+cabezera1+tr1+"</table>";
 
    var cabezera2='<table><tr><th>Lúnes</th><th>Martes</th><th>Miércloes</th><th>Jueves</th><th>Viernes</th><th>Sábado</th><th>Domingo</th></tr>';
    var tr2='';
     for(i=16;i<21;i++){
        tr2+='<tr>';
         for(j=0;j<7;j++){
             tr2+='<td>'+i+':00 - '+(i+1)+':00 </td>';
         }
         tr2+='</tr>';
                   
    }
    var tablaEnteraTarde="<h4>Tardes</h4>"+cabezera2+tr2+"</table>";
    document.getElementById("contenido").innerHTML=tablaEnteraManyana+"<br/>"+tablaEnteraTarde;
}

 