window.onload=function(){
                
                //Al cabo de 10 segundos de cargar la página,llama al enlace modal que tenemos en la pagina index.html 
                setTimeout(function(){ location ="#open-modal"; }, 10000);
                
                    
           
                var mesesCas = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
                var fecha = new Date();
               var anyo=document.getElementsByClassName("t_anyo");
                anyo[0].innerHTML=fecha.getFullYear();
    
               var dia=document.getElementsByClassName("t_dia");
                dia[0].innerHTML=fecha.getDate();
    
                var mes=document.getElementsByClassName("t_mes");
                mes[0].innerHTML=mesesCas[fecha.getMonth()];
    
                var tabla ="<p style='color:green;'>Bienvenid@,<br/>Nuestra web le pone a su disposición un kit de herramientas que esperamos que le servan !!</p>"
                //texto footer
                var textoFooter= "Mundo Deportivo "+fecha.getFullYear()+" desarrollada por Abdelaziz El Ouastani";
                document.getElementById("texto_footer").innerHTML=textoFooter+"<br/>";
                
                //document.getElementById("contenido").innerHTML=tabla;
  
          
       
                
}
     