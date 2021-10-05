
var tiempo=3600;
var array_figuras1=["♚","♛","♜","♝","♞","♟"];var array_figuras2=["♔","♕","♖","♗","♘","♙"];
$(document).ready(function(){
  var torno=1;
  var contadorCeldas=0;
    var tabla = document.createElement("table");  var display = document.getElementById("display");
    for(var x=0;x<8;x++) {
    var tr=document.createElement("tr");
      for(var i=0;i<8;i++) {
        var td=document.createElement("td");
        td.setAttribute("class","celda"); td.setAttribute("id",contadorCeldas);
        if(i%2==0 && x%2==0){
          td.setAttribute("style","background-color:#F0E6E6");
        }
        if(i%2==1 && x%2==1){
          td.setAttribute("style","background-color:#F0E6E6");
        }
        if(i==0){  td.setAttribute("value","inicio"); }
        if(i==7){  td.setAttribute("value","borde"); }
        if(contadorCeldas>=0 && contadorCeldas<=7){
          if(contadorCeldas==0) td.textContent=array_figuras1[2]; if(contadorCeldas==1) td.textContent=array_figuras1[4];
          if(contadorCeldas==2) td.textContent=array_figuras1[3]; if(contadorCeldas==3) td.textContent=array_figuras1[1];
          if(contadorCeldas==4) td.textContent=array_figuras1[0]; if(contadorCeldas==5) td.textContent=array_figuras1[3];
          if(contadorCeldas==6) td.textContent=array_figuras1[4]; if(contadorCeldas==7) td.textContent=array_figuras1[2];
        }
        if(contadorCeldas>=8 && contadorCeldas<=15){td.textContent=array_figuras1[5];}
        if(contadorCeldas>=48 && contadorCeldas<=55){td.textContent=array_figuras2[5];}
        if(contadorCeldas>=56 && contadorCeldas<=63){
          if(contadorCeldas==56) td.textContent=array_figuras2[2];if(contadorCeldas==57) td.textContent=array_figuras2[4];
          if(contadorCeldas==58) td.textContent=array_figuras2[3];if(contadorCeldas==59) td.textContent=array_figuras2[1];
          if(contadorCeldas==60) td.textContent=array_figuras2[0];if(contadorCeldas==61) td.textContent=array_figuras2[3];
          if(contadorCeldas==62) td.textContent=array_figuras2[4];if(contadorCeldas==63) td.textContent=array_figuras2[2];
        }
        contadorCeldas++;  tr.appendChild(td);
      }
      tabla.appendChild(tr);    display.appendChild(tabla);
    }
    //movimiento
    var movimientoPeon=[];     var coge="";
    var celdaClickadaOrigin=0;    var celdaClickadaDestino=0;
    var celdaId=0;
    //movimiento
    $("td").dblclick(function (e) {
      if($(this).text()!="") {
        coge=$(this).text();  celdaClickadaOrigin=($(this).attr("id"));
        celdaId=($(this).attr("id"));
        //condicional de los peones
        //aquí hago posibles movimientos de cada ficha.
        var celdamov1=0; var celdamov2=0;
        var celdamov3=0;var celdamov2=0;
        //movimiento(coge)=="peon_blnacas";
       if(movimiento(coge).includes("peon")){

          celdaClickadaOrigin=($(this).attr("id"));
          movimientoPeon.push(celdaClickadaOrigin);
           /*celdamov1=(parseInt(celdaClickadaOrigin)-8);celdamov2=(parseInt(celdaClickadaOrigin)-8*2);
           celdamov1_2=(parseInt(celdaClickadaOrigin)-(8-1));celdamov1_3=(parseInt(celdaClickadaOrigin)-(8+1));
           console.log(celdamov1);  console.log(celdamov2);*/
           //peones la primero puede moverse dos celdas
        if(movimiento(coge)=="peon_blancas"){
          var celdamov1=0; var celdamov2=0;
           var celdamov3=0;var celdamov2=0;
          celdamov1=(parseInt(celdaClickadaOrigin)-8); celdamov2=(parseInt(celdaClickadaOrigin)-8*2);
          celdamov1_2=(parseInt(celdaClickadaOrigin)-(8-1)); celdamov1_3=(parseInt(celdaClickadaOrigin)-(8+1));
          var color1=($("#"+celdamov1).css("background-color"));
          var color2=($("#"+celdamov2).css("background-color"));
          var color1_2=($("#"+celdamov1_2).css("background-color"));
          var color1_3=($("#"+celdamov1_3).css("background-color"));
          if(parseInt(celdaClickadaOrigin)>=48){
            if(!movimiento($("#"+celdamov1).text()).includes("blancas") 
            && !movimiento($("#"+celdamov1).text()).includes("negras")){
              $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
              $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1).animate({backgroundColor:color1},1000);
              console.log($("#"+celdamov1).attr("src"));
            }
            if(!movimiento($("#"+celdamov2).text()).includes("blancas")
            && !movimiento($("#"+celdamov2).text()).includes("negras")
            && !movimiento($("#"+celdamov1).text()).includes("negras")
            && !movimiento($("#"+celdamov1).text()).includes("blancas")){
              $("#"+celdamov2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov2).animate({backgroundColor:color2},1000);
              $("#"+celdamov2).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log($("#"+celdamov2).attr("src"));
            }
            if(!movimiento($("#"+celdamov1_2).text()).includes("blancas") 
            && movimiento($("#"+celdamov1_2).text()).includes("negras")){
              $("#"+celdamov1_2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1_2).animate({backgroundColor:color1_2},1000);
              $("#"+celdamov1_2).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log($("#"+celdamov1_2).attr("src"));
            }
            if(!movimiento($("#"+celdamov1_3).text()).includes("blancas")
            && movimiento($("#"+celdamov1_3).text()).includes("negras")
            && $("#"+celdaClickadaOrigin).attr("value")!="inicio"){
              $("#"+celdamov1_3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1_3).animate({backgroundColor:color1_3},1000);
              $("#"+celdamov1_3).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log($("#"+celdamov1_3).attr("src"));
            }
          } 
          //solo puede moverse uno en uno
          if(parseInt(celdaClickadaOrigin)<48){
            celdamov1=(parseInt(celdaClickadaOrigin)-8);
            color1=($("#"+celdamov1).css("background-color"));
            if(!movimiento($("#"+celdamov1).text()).includes("blancas")
            && !movimiento($("#"+celdamov1).text()).includes("negras")){
                $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
              $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1).animate({backgroundColor:color1},1000);
              console.log("DSDS: "+$("#"+celdamov1).attr("src"));
              console.log("ESTE ES UN "+$("#"+celdamov1).attr("id"));
            }
            if(!movimiento($("#"+celdamov1_2).text()).includes("blancas") 
            && movimiento($("#"+celdamov1_2).text()).includes("negras")){
              $("#"+celdamov1_2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1_2).animate({backgroundColor:color1_2},1000);
              $("#"+celdamov1_2).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log($("#"+celdamov1_2).attr("src"));
            }
            if(!movimiento($("#"+celdamov1_3).text()).includes("blancas")
            && movimiento($("#"+celdamov1_3).text()).includes("negras")
            && $("#"+celdaClickadaOrigin).attr("value")!="inicio"){
              $("#"+celdamov1_3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1_3).animate({backgroundColor:color1_3},1000);
              $("#"+celdamov1_3).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log($("#"+celdamov1_3).attr("src"));
            }
          }
        }
          if(movimientoPeon[1]!=undefined ){ movimientoPeon=[];}
          //NEGRAS
          if(movimiento(coge)=="peon_negras"){
            celdamov1=(parseInt(celdaClickadaOrigin)+8); celdamov2=(parseInt(celdaClickadaOrigin)+8*2);
            celdamov1_2=(parseInt(celdaClickadaOrigin)+(8-1));
            celdamov1_3=(parseInt(celdaClickadaOrigin)+(8+1));
            var color1=($("#"+celdamov1).css("background-color"));
            var color2=($("#"+celdamov2).css("background-color"));
            var color1_2=($("#"+celdamov1_2).css("background-color"));
            var color1_3=($("#"+celdamov1_3).css("background-color"));
            if(parseInt(celdaClickadaOrigin)>=8 && parseInt(celdaClickadaOrigin)<=15){
              if(!movimiento($("#"+celdamov1).text()).includes("negras")
              && !movimiento($("#"+celdamov1).text()).includes("blancas")){
                $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
                $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov1).animate({backgroundColor:color1},1000);
              }
              if(!movimiento($("#"+celdamov2).text()).includes("negras")
              && !movimiento($("#"+celdamov2).text()).includes("blancas")
              && !movimiento($("#"+celdamov1).text()).includes("negras")
              && !movimiento($("#"+celdamov1).text()).includes("blancas")){
                $("#"+celdamov2).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov2).animate({backgroundColor:color2},1000);
                $("#"+celdamov2).attr("src","ok"+coge+celdaClickadaOrigin);
                console.log($("#"+celdamov2).attr("src"));
              }
              if(!movimiento($("#"+celdamov1_2).text()).includes("negras") 
             && movimiento($("#"+celdamov1_2).text()).includes("blancas")){
              $("#"+celdamov1_2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1_2).animate({backgroundColor:color1_2},1000);
              $("#"+celdamov1_2).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log($("#"+celdamov1_2).attr("src"));
            }
            if(!movimiento($("#"+celdamov1_3).text()).includes("negras")
            && movimiento($("#"+celdamov1_3).text()).includes("blancas")
            && $("#"+celdaClickadaOrigin).attr("value")!="borde"){
              $("#"+celdamov1_3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov1_3).animate({backgroundColor:color1_3},1000);
              $("#"+celdamov1_3).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log($("#"+celdamov1_3).attr("src"));
            }
           
          }
             //solo puede moverse uno en uno
             if(parseInt(celdaClickadaOrigin)>16){
              celdamov1=(parseInt(celdaClickadaOrigin)+8);
                color1=($("#"+celdamov1).css("background-color"));
              if(!movimiento($("#"+celdamov1).text()).includes("blancas")
              && !movimiento($("#"+celdamov1).text()).includes("negras")){
                $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
                $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov1).animate({backgroundColor:color1},1000);
                console.log($("#"+celdamov1).attr("src"));
              }
              if(!movimiento($("#"+celdamov1_2).text()).includes("negras") 
              && movimiento($("#"+celdamov1_2).text()).includes("blancas")){
                $("#"+celdamov1_2).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov1_2).animate({backgroundColor:color1_2},1000);
                $("#"+celdamov1_2).attr("src","ok"+coge+celdaClickadaOrigin);
                console.log($("#"+celdamov1_2).attr("src"));
                
              }
              if(!movimiento($("#"+celdamov1_3).text()).includes("negras")
              && movimiento($("#"+celdamov1_3).text()).includes("blancas")
              && $("#"+celdaClickadaOrigin).attr("value")!="borde"){
                $("#"+celdamov1_3).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov1_3).animate({backgroundColor:color1_3},1000);
                $("#"+celdamov1_3).attr("src","ok"+coge+celdaClickadaOrigin);
                console.log($("#"+celdamov1_3).attr("src"));
              
              }
            }
        }     
       }

       //Condicional de la torre // era asi :if(movimiento(coge)=="torre_blancas")
       if(movimiento(coge).includes("torre")){
        celdaClickadaOrigin=($(this).attr("id")); movimientoPeon.push(celdaClickadaOrigin);
        //para la torre hacia arriba
        var x=1;
        celdamov2=(parseInt(celdaClickadaOrigin)-(8*1));
        $("#"+celdamov2).attr("src","ok");
        do{
          celdamov2=(parseInt(celdaClickadaOrigin)-(8*x));
          var color2=($("#"+celdamov2).css("background-color"));
          if(movimiento(coge)=="torre_blancas"){
            if(!movimiento($("#"+celdamov2).text()).includes("blancas")){
              $("#"+celdamov2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov2).animate({backgroundColor:color2},1000);
              $("#"+celdamov2).attr("src","ok"+coge+celdaClickadaOrigin); console.log(celdamov2); 
            }
          }
          if(movimiento(coge)=="torre_negras"){
            if(!movimiento($("#"+celdamov2).text()).includes("negras")){
              $("#"+celdamov2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov2).animate({backgroundColor:color2},1000);
              $("#"+celdamov2).attr("src","ok"+coge+celdaClickadaOrigin);console.log(celdamov2); 
            }
          }
          if(movimiento($("#"+celdamov2).text()).includes("blancas")){break;}
          x++;
        }while($("#"+celdamov2).text()=="" && x!=8);
        //para la torre hacia derecha si no se encuentra en borde derecho
        if($("#"+celdaClickadaOrigin).attr("value")!="borde"){
          var n=0; celdamov1=(parseInt(celdaClickadaOrigin)+1);
          $("#"+celdamov1).attr("src","ok"+coge);
          do{      
            n++;
            celdamov1=(parseInt(celdaClickadaOrigin)+n);
            var color1=($("#"+celdamov1).css("background-color"));
            if(movimiento(coge)=="torre_blancas"){
              if(!movimiento($("#"+celdamov1).text()).includes("blancas")){
                $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov1).animate({backgroundColor:color1},1000);
                $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
              }
            }
            if(movimiento(coge)=="torre_negras"){
              if(!movimiento($("#"+celdamov1).text()).includes("negras")){
                $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov1).animate({backgroundColor:color1},1000);
                $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
              }
            }
            console.log(celdamov1); 
          if($("#"+celdamov1).attr("value")=="borde"){break;}
          console.log($("#"+celdamov1).attr("value"));
          }while(($("#"+celdamov1).text()=="" 
          && parseInt($("#"+celdamov1).attr("value"))!="borde"));
        }
         //torre hacia hacia iziquierda si no se encuentra en inicio de fila
         if($("#"+celdaClickadaOrigin).attr("value")!="inicio"){
            var n1=0; celdamov3=(parseInt(celdaClickadaOrigin));
            do{
              n1++;
              celdamov3=(parseInt(celdaClickadaOrigin)-n1);
              //if($("#"+celdamov3).text()!=""){break;}
              if(movimiento(coge)=="torre_blancas"){
                var color1=($("#"+celdamov3).css("background-color"));
                if(!movimiento($("#"+celdamov3).text()).includes("blancas")){
                $("#"+celdamov3).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov3).animate({backgroundColor:color1},1000);
                $("#"+celdamov3).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamov3).attr("src"));
                }
              }
              if(movimiento(coge)=="torre_negras"){
                var color1=($("#"+celdamov3).css("background-color"));
                if(!movimiento($("#"+celdamov3).text()).includes("negras")){
                $("#"+celdamov3).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamov3).animate({backgroundColor:color1},1000);
                $("#"+celdamov3).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamov3).attr("src"));
                }
              }
              console.log(celdamov3); 
              if($("#"+celdamov3).attr("value")=="inicio"){break;}
              console.log($("#"+celdamov3).attr("value"));     
            }while(($("#"+celdamov3).text()=="" 
            && parseInt($("#"+celdamov3).attr("value"))!="inicio"));
         }
          //torre hacia hacia abajo
        var n2=0;
        celdamov4=(parseInt(celdaClickadaOrigin));
        do{
          n2+=8;
          celdamov4=(parseInt(celdaClickadaOrigin)+n2);
          var color1=($("#"+celdamov4).css("background-color"));
          if(movimiento(coge)=="torre_blancas"){
            if(!movimiento($("#"+celdamov4).text()).includes("blancas")){
              $("#"+celdamov4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov4).animate({backgroundColor:color1},1000);
              $("#"+celdamov4).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log(celdamov4); console.log($("#"+celdamov4).attr("value"));
            }
          }
          if(movimiento(coge)=="torre_negras"){
            if(!movimiento($("#"+celdamov4).text()).includes("negras")){
              $("#"+celdamov4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamov4).animate({backgroundColor:color1},1000);
              $("#"+celdamov4).attr("src","ok"+coge+celdaClickadaOrigin);
              console.log(celdamov4); console.log($("#"+celdamov4).attr("value"));
            }
          }
        }while(($("#"+celdamov4).text()=="") && (parseInt($("#"+celdamov4).attr("id"))<=64));
     }
     //fin torre
     //Inicio caballo  if(movimiento(coge)=="caballo_blancas")
     if(movimiento(coge).includes("caballo")){
        if($("#"+celdaClickadaOrigin).attr("value")!="inicio" && 
        $("#"+celdaClickadaOrigin).attr("value")!="borde" 
          && $("#"+(parseInt(celdaClickadaOrigin)-1)).attr("value")!="inicio"
          && $("#"+(parseInt(celdaClickadaOrigin)+1)).attr("value")!="borde"
        ){
          var celdamovCabelloB1=(parseInt(celdaClickadaOrigin)-(16+1));
          var color1=($("#"+celdamovCabelloB1).css("background-color"));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB1).text()).includes("blancas")){
              $("#"+celdamovCabelloB1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB1).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB1).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB1).text()).includes("negras")){
              $("#"+celdamovCabelloB1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB1).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB1).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          var celdamovCabelloB2=(parseInt(celdaClickadaOrigin)-(16-1));
          var color2=($("#"+celdamovCabelloB2).css("background-color"));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("blancas")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("negras")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          var celdamovCabelloB3=(parseInt(celdaClickadaOrigin)+(16+1));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("blancas")){
              var color3=($("#"+celdamovCabelloB3).css("background-color"));
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("negras")){
              var color3=($("#"+celdamovCabelloB3).css("background-color"));
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          var celdamovCabelloB4=(parseInt(celdaClickadaOrigin)+(16-1));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB4).text()).includes("blancas")){
              var color4=($("#"+celdamovCabelloB4).css("background-color"));
              $("#"+celdamovCabelloB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB4).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB4).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB4).text()).includes("negras")){
              var color4=($("#"+celdamovCabelloB4).css("background-color"));
              $("#"+celdamovCabelloB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB4).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB4).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          var celdamovCabelloB5=(parseInt(celdaClickadaOrigin)+(8-2));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB5).text()).includes("blancas")){
              var color5=($("#"+celdamovCabelloB5).css("background-color"));
              $("#"+celdamovCabelloB5).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB5).animate({backgroundColor:color5},1000);
              $("#"+celdamovCabelloB5).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB5).text()).includes("negras")){
              var color5=($("#"+celdamovCabelloB5).css("background-color"));
              $("#"+celdamovCabelloB5).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB5).animate({backgroundColor:color5},1000);
              $("#"+celdamovCabelloB5).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          var celdamovCabelloB6=(parseInt(celdaClickadaOrigin)-(8-2));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("blancas")){
              var color6=($("#"+celdamovCabelloB6).css("background-color"));
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color6},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("negras")){
              var color6=($("#"+celdamovCabelloB6).css("background-color"));
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color6},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          var celdamovCabelloB7=(parseInt(celdaClickadaOrigin)-(8+2));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB7).text()).includes("blancas")){
              var color7=($("#"+celdamovCabelloB7).css("background-color"));
              $("#"+celdamovCabelloB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB7).animate({backgroundColor:color7},1000);
              $("#"+celdamovCabelloB7).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB7).text()).includes("negras")){
              var color7=($("#"+celdamovCabelloB7).css("background-color"));
              $("#"+celdamovCabelloB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB7).animate({backgroundColor:color7},1000);
              $("#"+celdamovCabelloB7).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          var celdamovCabelloB8=(parseInt(celdaClickadaOrigin)+(8+2));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("blancas")){
              var color8=($("#"+celdamovCabelloB8).css("background-color")); 
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color8},1000);
              $("#"+celdamovCabelloB8).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("negras")){
              var color8=($("#"+celdamovCabelloB8).css("background-color")); 
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color8},1000);
              $("#"+celdamovCabelloB8).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
        }
        if($("#"+celdaClickadaOrigin).attr("value")=="inicio"){
          var celdamovCabelloB2=(parseInt(celdaClickadaOrigin)-(16-1));
          var celdamovCabelloB3=(parseInt(celdaClickadaOrigin)+(16+1));
          var celdamovCabelloB6=(parseInt(celdaClickadaOrigin)-(8-2));
          var celdamovCabelloB8=(parseInt(celdaClickadaOrigin)+(8+2));
          var color2=($("#"+celdamovCabelloB6).css("background-color"));
          var color3=($("#"+celdamovCabelloB3).css("background-color"));
          var color4=($("#"+celdamovCabelloB8).css("background-color"));
          var color1=($("#"+celdamovCabelloB2).css("background-color"));
          $("#"+celdamovCabelloB7).attr("src","ok"+coge+celdaClickadaOrigin);
          if(movimiento(coge)=="caballo_blancas"){
              if(!movimiento($("#"+celdamovCabelloB2).text()).includes("blancas")){
                $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovCabelloB2).animate({backgroundColor:color1},1000);
                $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
              }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("negras")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("blancas")){
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("negras")){
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("blancas")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("negras")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("blancas")){
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB8).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("negras")){
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB8).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }

        }
        if($("#"+celdaClickadaOrigin).attr("value")=="borde"){
          var celdamovCabelloB2=(parseInt(celdaClickadaOrigin)-(16+1));
          var celdamovCabelloB3=(parseInt(celdaClickadaOrigin)+(16-1));
          var celdamovCabelloB6=(parseInt(celdaClickadaOrigin)+(8-2));
          var celdamovCabelloB8=(parseInt(celdaClickadaOrigin)-(8+2));
          var color2=($("#"+celdamovCabelloB6).css("background-color"));
          var color3=($("#"+celdamovCabelloB3).css("background-color"));
          var color4=($("#"+celdamovCabelloB8).css("background-color"));
          var color1=($("#"+celdamovCabelloB2).css("background-color"));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("blancas")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("negras")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("blancas")){
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("negras")){
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("blancas")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("blancas")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("blancas")){
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("negras")){
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
        }
        if($("#"+(parseInt(celdaClickadaOrigin)+1)).attr("value")=="borde"){
          var celdamovCabelloB1=(parseInt(celdaClickadaOrigin)-(16+1));
          var celdamovCabelloB2=(parseInt(celdaClickadaOrigin)-(16-1));
          var celdamovCabelloB3=(parseInt(celdaClickadaOrigin)+(16+1));
          var celdamovCabelloB4=(parseInt(celdaClickadaOrigin)+(16-1));
          var celdamovCabelloB5=(parseInt(celdaClickadaOrigin)+(8-2));
          var celdamovCabelloB7=(parseInt(celdaClickadaOrigin)-(8+2));
          var color1=($("#"+celdamovCabelloB1).css("background-color"));
          var color2=($("#"+celdamovCabelloB2).css("background-color"));
          var color3=($("#"+celdamovCabelloB3).css("background-color"));
          var color4=($("#"+celdamovCabelloB4).css("background-color"));
          var color5=($("#"+celdamovCabelloB5).css("background-color"));
          var color6=($("#"+celdamovCabelloB6).css("background-color"));
          var color7=($("#"+celdamovCabelloB7).css("background-color"));
          var color8=($("#"+celdamovCabelloB8).css("background-color"));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB1).text()).includes("blancas")){
              $("#"+celdamovCabelloB1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB1).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB1).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB1).text()).includes("negras")){
              $("#"+celdamovCabelloB1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB1).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB1).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("blancas")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("negras")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("blancas")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("negras")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB4).text()).includes("blancas")){
              $("#"+celdamovCabelloB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB4).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB4).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB4).text()).includes("negras")){
              $("#"+celdamovCabelloB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB4).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB4).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB5).text()).includes("blancas")){
              $("#"+celdamovCabelloB5).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB5).animate({backgroundColor:color5},1000);
              $("#"+celdamovCabelloB5).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB5).text()).includes("negras")){
              $("#"+celdamovCabelloB5).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB5).animate({backgroundColor:color5},1000);
              $("#"+celdamovCabelloB5).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB7).text()).includes("blancas")){
              $("#"+celdamovCabelloB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB7).animate({backgroundColor:color7},1000);
              $("#"+celdamovCabelloB7).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB7).text()).includes("negras")){
              $("#"+celdamovCabelloB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB7).animate({backgroundColor:color7},1000);
              $("#"+celdamovCabelloB7).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
        
        }
        if($("#"+(parseInt(celdaClickadaOrigin)-1)).attr("value")=="inicio"){
         var celdamovCabelloB1=(parseInt(celdaClickadaOrigin)-(16+1));
          var celdamovCabelloB2=(parseInt(celdaClickadaOrigin)-(16-1));
          var celdamovCabelloB3=(parseInt(celdaClickadaOrigin)+(16+1));
          var celdamovCabelloB4=(parseInt(celdaClickadaOrigin)+(16-1));
          var celdamovCabelloB6=(parseInt(celdaClickadaOrigin)-(8-2));
          var celdamovCabelloB8=(parseInt(celdaClickadaOrigin)+(8+2));
          var color1=($("#"+celdamovCabelloB1).css("background-color"));
          var color2=($("#"+celdamovCabelloB2).css("background-color"));
          var color3=($("#"+celdamovCabelloB3).css("background-color"));
          var color4=($("#"+celdamovCabelloB4).css("background-color"));
          var color5=($("#"+celdamovCabelloB5).css("background-color"));
          var color6=($("#"+celdamovCabelloB6).css("background-color"));
          var color7=($("#"+celdamovCabelloB7).css("background-color"));
          var color8=($("#"+celdamovCabelloB8).css("background-color"));
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB1).text()).includes("blancas")){
              $("#"+celdamovCabelloB1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB1).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB1).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB1).text()).includes("negras")){
              $("#"+celdamovCabelloB1).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB1).animate({backgroundColor:color1},1000);
              $("#"+celdamovCabelloB1).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("blancas")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB2).text()).includes("negras")){
              $("#"+celdamovCabelloB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB2).animate({backgroundColor:color2},1000);
              $("#"+celdamovCabelloB2).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("blancas")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB3).text()).includes("negras")){
              $("#"+celdamovCabelloB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB3).animate({backgroundColor:color3},1000);
              $("#"+celdamovCabelloB3).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB4).text()).includes("blancas")){
              $("#"+celdamovCabelloB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB4).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB4).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB4).text()).includes("negras")){
              $("#"+celdamovCabelloB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB4).animate({backgroundColor:color4},1000);
              $("#"+celdamovCabelloB4).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("blancas")){
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color6},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB6).text()).includes("negras")){
              $("#"+celdamovCabelloB6).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB6).animate({backgroundColor:color6},1000);
              $("#"+celdamovCabelloB6).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_blancas"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("blancas")){
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color8},1000);
              $("#"+celdamovCabelloB8).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
          if(movimiento(coge)=="caballo_negras"){
            if(!movimiento($("#"+celdamovCabelloB8).text()).includes("negras")){
              $("#"+celdamovCabelloB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovCabelloB8).animate({backgroundColor:color8},1000);
              $("#"+celdamovCabelloB8).attr("src","ok"+coge+celdaClickadaOrigin);
            }
          }
        }
        
     } //FIN METODO CABALLO
     //INICIO METODO ALFILE
     if(movimiento(coge).includes("alfile")){
       console.log($("#"+celdaClickadaOrigin).attr("id"));  
        console.log($("#"+celdaClickadaOrigin).css("background-color"));
      if($("#"+celdaClickadaOrigin).attr("value")!="inicio"
       && $("#"+celdaClickadaOrigin).attr("value")!="borde"){
          var n4=1;
            var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
            do{
                    celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n4)-n4));
                    if(movimiento(coge)=="alfile_blancas"){
                      $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                          console.log($("#"+celdamovAlfileB2).attr("id"));
                        }
                    }
                    if(movimiento(coge)=="alfile_negras"){
                      $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                          console.log($("#"+celdamovAlfileB2).attr("id"));
                        }
                    }
                      if($("#"+celdamovAlfileB2).attr("value")=="inicio"){ break;}
                      if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;}        
                n4++;
          }while($("#"+celdamovAlfileB2).text()=="" && n4!=8);
          var n2=1;
          var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
          do{
                  celdamovAlfileB2=(parseInt(celdaClickadaOrigin)-((8*n2)+n2));
                  if(movimiento(coge)=="alfile_blancas"){
                    $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                      if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log($("#"+celdamovAlfileB2).attr("id"));
                      }
                  }
                  if(movimiento(coge)=="alfile_negras"){
                    $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                      if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log($("#"+celdamovAlfileB2).attr("id"));
                      }
                  }
                  if($("#"+celdamovAlfileB2).attr("value")=="inicio"){ break;} 
                  if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;} 
                  if(n2==8)break;  
              n2++;
        }while($("#"+celdamovAlfileB2).text()=="" && n2!=8);
        var n4=1;
        var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
        do{
                 celdamovAlfileB2=(parseInt(celdaClickadaOrigin)-((8*n4)-n4));
                 $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                 if(movimiento(coge)=="alfile_blancas"){
                    if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                      var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                      $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                      $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                      $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                      console.log($("#"+celdamovAlfileB2).attr("id"));
                    }
                }
                if(movimiento(coge)=="alfile_negras"){
                  if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                    var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                    $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                    $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                    $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                    console.log($("#"+celdamovAlfileB2).attr("id"));
                  }
              }
                  if($("#"+celdamovAlfileB2).attr("value")=="inicio"){ break; }
                  if($("#"+celdamovAlfileB2).attr("value")=="borde"){ break;}        
            n4++;
      }while($("#"+celdamovAlfileB2).text()=="" && n4!=8);
      var n2=1;
      var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
      do{
              celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n2)+n2));
              $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
              if(movimiento(coge)=="alfile_blancas"){
                  if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                    var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                    $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                    $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                    $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                    console.log($("#"+celdamovAlfileB2).attr("id"));
                  }
              }
              if(movimiento(coge)=="alfile_negras"){
                if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                  var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                  $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                  $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                  $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                  console.log($("#"+celdamovAlfileB2).attr("id"));
                }
            }
              if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break;} 
              if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;} 
              if(n2==8)break;  
          n2++;
    }while($("#"+celdamovAlfileB2).text()=="" && n2!=8);
  }
      if($("#"+celdaClickadaOrigin).attr("value")=="inicio"){
            var n3=1;
            var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
            do{
                      celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n3)+n3));
                      $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                      if(movimiento(coge)=="alfile_blancas"){
                        if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                          console.log($("#"+celdamovAlfileB2).attr("id"));
                        }
                    }
                    if(movimiento(coge)=="alfile_negras"){
                      if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log($("#"+celdamovAlfileB2).attr("id"));
                      }
                  }
                    if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break;} 
                    if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;} 
                    if(n3==8)break; 
                n3++;
          }while($("#"+celdamovAlfileB2).text()=="" && n3!=8);
          var n=1;
          var celdamovAlfileB1=parseInt(celdaClickadaOrigin);
          do{
                    celdamovAlfileB1=(parseInt(celdaClickadaOrigin)-((8*n)-n));
                    $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                    if(movimiento(coge)=="alfile_blancas"){
                      if(!movimiento($("#"+celdamovAlfileB1).text()).includes("blancas")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                      }
                    }
                    if(movimiento(coge)=="alfile_negras"){
                      if(!movimiento($("#"+celdamovAlfileB1).text()).includes("negras")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                      }
                    }
                    if($("#"+celdamovAlfileB1).attr("value")=="inicio"){break;} 
                  if($("#"+celdamovAlfileB1).attr("value")=="borde"){break;} 
                  if(n==8)break;
              n++;
        }while($("#"+celdamovAlfileB1).text()=="" && n!=8);
      }
      if($("#"+celdaClickadaOrigin).attr("value")=="borde"){
          var n3=1;
          var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
          do{
                    celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n3)-n3));
                    $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                    if(movimiento(coge)=="alfile_blancas"){
                      if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log($("#"+celdamovAlfileB2).attr("id"));
                      }
                    }
                    if(movimiento(coge)=="alfile_negras"){
                      if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log($("#"+celdamovAlfileB2).attr("id"));
                      }
                    }
            
                  if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break;} 
                  if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;} 
                  if(n3==8)break; 
              n3++;
        }while($("#"+celdamovAlfileB2).text()=="" && n3!=8);
        var n=1;
        var celdamovAlfileB1=parseInt(celdaClickadaOrigin);
        do{
                  celdamovAlfileB1=(parseInt(celdaClickadaOrigin)-((8*n)+n));
                  $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                  if(movimiento(coge)=="alfile_blancas"){
                    if(!movimiento($("#"+celdamovAlfileB1).text()).includes("blancas")){
                      var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                      $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                      $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                      $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                      console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                    }
                }
                if(movimiento(coge)=="alfile_negras"){
                  if(!movimiento($("#"+celdamovAlfileB1).text()).includes("negras")){
                    var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                    $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                    $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                    $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                    console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                  }
              }
                if($("#"+celdamovAlfileB1).attr("value")=="inicio"){break;} 
                if($("#"+celdamovAlfileB1).attr("value")=="borde"){break;} 
                 if(n==8)break;
                   n++;
      }while($("#"+celdamovAlfileB1).text()=="" && n!=8);
    }
  }//FIN METODO ALFILE
      //INICIO METODO Rey
      //era asi movimiento(coge)=="rey_blancas"
      if(movimiento(coge).includes("rey")){
          //REY EN MEDIO
        if($("#"+celdaClickadaOrigin).attr("value")!="inicio"
        && $("#"+celdaClickadaOrigin).attr("value")!="borde"){
            var celdamovReyB1=parseInt(celdaClickadaOrigin)-1;
            var celdamovReyB2=parseInt(celdaClickadaOrigin)+1;
            var celdamovReyB3=parseInt(celdaClickadaOrigin)+(8+1);
            var celdamovReyB4=parseInt(celdaClickadaOrigin)+(8);
            var celdamovReyB5=parseInt(celdaClickadaOrigin)+(8-1);
            var celdamovReyB6=parseInt(celdaClickadaOrigin)-(8+1);
            var celdamovReyB7=parseInt(celdaClickadaOrigin)-(8);
            var celdamovReyB8=parseInt(celdaClickadaOrigin)-(8-1);
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB1).text()).includes("blancas")){
                var colorCeldaRey1=$("#"+celdamovReyB1).css("background-color");
                $("#"+celdamovReyB1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB1).animate({backgroundColor:colorCeldaRey1},1000);
                $("#"+celdamovReyB1).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB1).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB1).text()).includes("negras")){
                var colorCeldaRey1=$("#"+celdamovReyB1).css("background-color");
                $("#"+celdamovReyB1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB1).animate({backgroundColor:colorCeldaRey1},1000);
                $("#"+celdamovReyB1).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB1).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB2).text()).includes("blancas")){
                var colorCeldaRey2=$("#"+celdamovReyB2).css("background-color");
                $("#"+celdamovReyB2).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB2).animate({backgroundColor:colorCeldaRey2},1000);
                $("#"+celdamovReyB2).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB2).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB2).text()).includes("negras")){
                var colorCeldaRey2=$("#"+celdamovReyB2).css("background-color");
                $("#"+celdamovReyB2).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB2).animate({backgroundColor:colorCeldaRey2},1000);
                $("#"+celdamovReyB2).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB2).attr("id"));
              }
            } 
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB3).text()).includes("blancas")){
                var colorCeldaRey3=$("#"+celdamovReyB3).css("background-color");
                $("#"+celdamovReyB3).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB3).animate({backgroundColor:colorCeldaRey3},1000);
                $("#"+celdamovReyB3).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB3).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB3).text()).includes("negras")){
                var colorCeldaRey3=$("#"+celdamovReyB3).css("background-color");
                $("#"+celdamovReyB3).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB3).animate({backgroundColor:colorCeldaRey3},1000);
                $("#"+celdamovReyB3).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB3).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB4).text()).includes("blancas")){
                var colorCeldaRey4=$("#"+celdamovReyB4).css("background-color");
                $("#"+celdamovReyB4).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB4).animate({backgroundColor:colorCeldaRey4},1000);
                $("#"+celdamovReyB4).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB4).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB4).text()).includes("negras")){
                var colorCeldaRey4=$("#"+celdamovReyB4).css("background-color");
                $("#"+celdamovReyB4).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB4).animate({backgroundColor:colorCeldaRey4},1000);
                $("#"+celdamovReyB4).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB5).text()).includes("blancas")){
                var colorCeldaRey5=$("#"+celdamovReyB5).css("background-color");
                $("#"+celdamovReyB5).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB5).animate({backgroundColor:colorCeldaRey5},1000);
                $("#"+celdamovReyB5).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB5).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB5).text()).includes("negras")){
                var colorCeldaRey5=$("#"+celdamovReyB5).css("background-color");
                $("#"+celdamovReyB5).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB5).animate({backgroundColor:colorCeldaRey5},1000);
                $("#"+celdamovReyB5).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB5).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB6).text()).includes("blancas")){
                var colorCeldaRey6=$("#"+celdamovReyB6).css("background-color");
                $("#"+celdamovReyB6).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB6).animate({backgroundColor:colorCeldaRey6},1000);
                $("#"+celdamovReyB6).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB6).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB6).text()).includes("negras")){
                var colorCeldaRey6=$("#"+celdamovReyB6).css("background-color");
                $("#"+celdamovReyB6).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB6).animate({backgroundColor:colorCeldaRey6},1000);
                $("#"+celdamovReyB6).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB6).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB7).text()).includes("blancas")){
                var colorCeldaRey7=$("#"+celdamovReyB7).css("background-color");
                $("#"+celdamovReyB7).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB7).animate({backgroundColor:colorCeldaRey7},1000);
                $("#"+celdamovReyB7).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB7).text()).includes("negras")){
                var colorCeldaRey7=$("#"+celdamovReyB7).css("background-color");
                $("#"+celdamovReyB7).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB7).animate({backgroundColor:colorCeldaRey7},1000);
                $("#"+celdamovReyB7).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_blancas"){
              if(!movimiento($("#"+celdamovReyB8).text()).includes("blancas")){
                var colorCeldaRey8=$("#"+celdamovReyB8).css("background-color");
                $("#"+celdamovReyB8).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB8).animate({backgroundColor:colorCeldaRey8},1000);
                $("#"+celdamovReyB8).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB8).attr("id"));
              }
            }
            if(movimiento(coge)=="rey_negras"){
              if(!movimiento($("#"+celdamovReyB8).text()).includes("negras")){
                var colorCeldaRey8=$("#"+celdamovReyB8).css("background-color");
                $("#"+celdamovReyB8).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB8).animate({backgroundColor:colorCeldaRey8},1000);
                $("#"+celdamovReyB8).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB8).attr("id"));
              }
            }
        }
        if($("#"+celdaClickadaOrigin).attr("value")=="inicio" 
        && $("#"+celdaClickadaOrigin).attr("value")!="borde"){
          var celdamovReyB2=parseInt(celdaClickadaOrigin)+1;
          var celdamovReyB3=parseInt(celdaClickadaOrigin)+(8+1);
          var celdamovReyB4=parseInt(celdaClickadaOrigin)+(8);
          var celdamovReyB7=parseInt(celdaClickadaOrigin)-(8);
          var celdamovReyB8=parseInt(celdaClickadaOrigin)-(8-1);
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB2).text()).includes("blancas")){
              var colorCeldaRey2=$("#"+celdamovReyB2).css("background-color");
              $("#"+celdamovReyB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB2).animate({backgroundColor:colorCeldaRey2},1000);
              $("#"+celdamovReyB2).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB2).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB2).text()).includes("negras")){
              var colorCeldaRey2=$("#"+celdamovReyB2).css("background-color");
              $("#"+celdamovReyB2).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB2).animate({backgroundColor:colorCeldaRey2},1000);
              $("#"+celdamovReyB2).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB2).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB3).text()).includes("blancas")){
              var colorCeldaRey3=$("#"+celdamovReyB3).css("background-color");
              $("#"+celdamovReyB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB3).animate({backgroundColor:colorCeldaRey3},1000);
              $("#"+celdamovReyB3).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB3).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB3).text()).includes("negras")){
              var colorCeldaRey3=$("#"+celdamovReyB3).css("background-color");
              $("#"+celdamovReyB3).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB3).animate({backgroundColor:colorCeldaRey3},1000);
              $("#"+celdamovReyB3).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB3).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB4).text()).includes("blancas")){
              var colorCeldaRey4=$("#"+celdamovReyB4).css("background-color");
              $("#"+celdamovReyB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB4).animate({backgroundColor:colorCeldaRey4},1000);
              $("#"+celdamovReyB4).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB4).text()).includes("negras")){
              var colorCeldaRey4=$("#"+celdamovReyB4).css("background-color");
              $("#"+celdamovReyB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB4).animate({backgroundColor:colorCeldaRey4},1000);
              $("#"+celdamovReyB4).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB7).text()).includes("blancas")){
              var colorCeldaRey7=$("#"+celdamovReyB7).css("background-color");
              $("#"+celdamovReyB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB7).animate({backgroundColor:colorCeldaRey7},1000);
              $("#"+celdamovReyB7).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB7).text()).includes("negras")){
              var colorCeldaRey7=$("#"+celdamovReyB7).css("background-color");
              $("#"+celdamovReyB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB7).animate({backgroundColor:colorCeldaRey7},1000);
              $("#"+celdamovReyB7).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB8).text()).includes("blancas")){
                var colorCeldaRey8=$("#"+celdamovReyB8).css("background-color");
                $("#"+celdamovReyB8).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB8).animate({backgroundColor:colorCeldaRey8},1000);
                $("#"+celdamovReyB8).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB8).attr("id"));
              }
            }
        
        if(movimiento(coge)=="rey_negras"){
          if(!movimiento($("#"+celdamovReyB8).text()).includes("negras")){
              var colorCeldaRey8=$("#"+celdamovReyB8).css("background-color");
              $("#"+celdamovReyB8).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB8).animate({backgroundColor:colorCeldaRey8},1000);
              $("#"+celdamovReyB8).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB8).attr("id"));
            }
        }
      }
        if($("#"+celdaClickadaOrigin).attr("value")=="borde" 
        && $("#"+celdaClickadaOrigin).attr("value")!="inicio"){
          var celdamovReyB1=parseInt(celdaClickadaOrigin)-1;
          var celdamovReyB4=parseInt(celdaClickadaOrigin)+(8);
          var celdamovReyB5=parseInt(celdaClickadaOrigin)+(8-1);
          var celdamovReyB6=parseInt(celdaClickadaOrigin)-(8+1);
          var celdamovReyB7=parseInt(celdaClickadaOrigin)-(8);
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB1).text()).includes("blancas")){
                var colorCeldaRey1=$("#"+celdamovReyB1).css("background-color");
                $("#"+celdamovReyB1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB1).animate({backgroundColor:colorCeldaRey1},1000);
                $("#"+celdamovReyB1).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovReyB1).attr("id"));
              }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB1).text()).includes("negras")){
                var colorCeldaRey1=$("#"+celdamovReyB1).css("background-color");
                $("#"+celdamovReyB1).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB1).animate({backgroundColor:colorCeldaRey1},1000);
                $("#"+celdamovReyB1).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB1).attr("id"));
              }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB4).text()).includes("blancas")){
              var colorCeldaRey4=$("#"+celdamovReyB4).css("background-color");
              $("#"+celdamovReyB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB4).animate({backgroundColor:colorCeldaRey4},1000);
              $("#"+celdamovReyB4).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB4).text()).includes("blancas")){
              var colorCeldaRey4=$("#"+celdamovReyB4).css("background-color");
              $("#"+celdamovReyB4).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB4).animate({backgroundColor:colorCeldaRey4},1000);
              $("#"+celdamovReyB4).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB5).text()).includes("blancas")){
              var colorCeldaRey5=$("#"+celdamovReyB5).css("background-color");
              $("#"+celdamovReyB5).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB5).animate({backgroundColor:colorCeldaRey5},1000);
              $("#"+celdamovReyB5).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB5).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB5).text()).includes("negras")){
              var colorCeldaRey5=$("#"+celdamovReyB5).css("background-color");
              $("#"+celdamovReyB5).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB5).animate({backgroundColor:colorCeldaRey5},1000);
              $("#"+celdamovReyB5).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB5).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB6).text()).includes("blancas")){
                var colorCeldaRey6=$("#"+celdamovReyB6).css("background-color");
                $("#"+celdamovReyB6).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB6).animate({backgroundColor:colorCeldaRey6},1000);
                $("#"+celdamovReyB6).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB6).attr("id"));
              }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB6).text()).includes("negras")){
                var colorCeldaRey6=$("#"+celdamovReyB6).css("background-color");
                $("#"+celdamovReyB6).animate({backgroundColor:'#25F77E'},1000);
                $("#"+celdamovReyB6).animate({backgroundColor:colorCeldaRey6},1000);
                $("#"+celdamovReyB6).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB6).attr("id"));
              }
          }
          if(movimiento(coge)=="rey_blancas"){
            if(!movimiento($("#"+celdamovReyB7).text()).includes("blancas")){
              var colorCeldaRey7=$("#"+celdamovReyB7).css("background-color");
              $("#"+celdamovReyB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB7).animate({backgroundColor:colorCeldaRey7},1000);
              $("#"+celdamovReyB7).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
          if(movimiento(coge)=="rey_negras"){
            if(!movimiento($("#"+celdamovReyB7).text()).includes("negras")){
              var colorCeldaRey7=$("#"+celdamovReyB7).css("background-color");
              $("#"+celdamovReyB7).animate({backgroundColor:'#25F77E'},1000);
              $("#"+celdamovReyB7).animate({backgroundColor:colorCeldaRey7},1000);
              $("#"+celdamovReyB7).attr("src","ok"+coge+celdaClickadaOrigin);  console.log($("#"+celdamovReyB4).attr("id"));
            }
          }
        }
      }//FIN METODO REY
      //INICIO METODO Reina//if(movimiento(coge)=="dama_blancas")
      if(movimiento(coge).includes("dama")){
         if($("#"+celdaClickadaOrigin).attr("value")!="inicio"
         && $("#"+celdaClickadaOrigin).attr("value")!="borde"){
        var n1=1;var celdamovAlfileB1=parseInt(celdaClickadaOrigin);
        do{
                        celdamovAlfileB1=(parseInt(celdaClickadaOrigin)-((8*n1)+n1));
                        $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                        if(movimiento(coge)=="dama_blancas"){
                          if(!movimiento($("#"+celdamovAlfileB1).text()).includes("blancas")){
                            var colorCeldaFb=$("#"+celdamovAlfileB1).css("background-color");
                            $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                            $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                            $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                            console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                          }
                        }
                        if(movimiento(coge)=="dama_negras"){
                          if(!movimiento($("#"+celdamovAlfileB1).text()).includes("negras")){
                            var colorCeldaFb=$("#"+celdamovAlfileB1).css("background-color");
                            $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                            $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                            $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                            console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                          }
                        }
                      if($("#"+celdamovAlfileB1).attr("value")=="inicio"){break;} 
                      if($("#"+celdamovAlfileB1).attr("value")=="borde"){break;}  
                  n1++;
                  if(n1==8)break;  
            }while($("#"+celdamovAlfileB1).text()==""&& n1!=8);
            var n2=1; var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
              do{
                      celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n2)-n2));
                      if(movimiento(coge)=="dama_blancas"){
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                          if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                            var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                            $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                            $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                            $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                            console.log($("#"+celdamovAlfileB2).attr("id"));
                          }
                      }
                      if(movimiento(coge)=="dama_negras"){
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);;
                          if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                            var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                            $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                            $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                            $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                            console.log($("#"+celdamovAlfileB2).attr("id"));
                          }
                      }
                        if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break;}
                        if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;}        
                  n2++;
                  if(n2==8)break;  
            }while($("#"+celdamovAlfileB2).text()=="" && n2!=8);
          var n3=1;
          var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
          do{
                    celdamovAlfileB2=(parseInt(celdaClickadaOrigin)-((8*n3)-n3));
                   $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                   if(movimiento(coge)=="dama_blancas"){
                      if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log($("#"+celdamovAlfileB2).attr("id"));
                      }
                  }
                  if(movimiento(coge)=="dama_negras"){
                    if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                      var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                      $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                      $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                      $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                      console.log($("#"+celdamovAlfileB2).attr("id"));
                    }
                }
                    if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break; }
                    if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;}        
              n3++;if(n3==8)break;
              
        }while($("#"+celdamovAlfileB2).text()=="" && n3!=8);
        var n4=1;
        var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
        do{
                celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n4)+n4));
                $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                if(movimiento(coge)=="dama_blancas"){
                    if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                      var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                      $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                      $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                      $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                      console.log($("#"+celdamovAlfileB2).attr("id"));
                    }
                }
                if(movimiento(coge)=="dama_negras"){
                  if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                    var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                    $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                    $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                    $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                    console.log($("#"+celdamovAlfileB2).attr("id"));
                  }
              }
                if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break;} 
                if($("#"+celdamovAlfileB2).attr("value")=="borde"){ break;} 
                n4++;
                if(n4==8)break;       
            
      }while($("#"+celdamovAlfileB2).text()=="" && n4!=8);
    }
        if($("#"+celdaClickadaOrigin).attr("value")=="inicio"){
              var n5=1;
              var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
              do{
                        celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n5)+n5));
                        $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                        if(movimiento(coge)=="dama_blancas"){
                          if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                            var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                            $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                            $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                            $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);console.log($("#"+celdamovAlfileB2).attr("id"));
                          }
                      }
                      if(movimiento(coge)=="dama_negras"){
                        if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin); console.log($("#"+celdamovAlfileB2).attr("id"));
                        }
                    }
                      if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break;} 
                      if($("#"+celdamovAlfileB2).attr("value")=="borde"){break;}
                      n5++; 
                      if(n5==8)break; 
                
            }while($("#"+celdamovAlfileB2).text()=="" && n5!=8);
            var n6=1;
            var celdamovAlfileB1=parseInt(celdaClickadaOrigin);
            do{
                      celdamovAlfileB1=(parseInt(celdaClickadaOrigin)-((8*n6)-n6));
                      $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                      if(movimiento(coge)=="dama_blancas"){
                        if(!movimiento($("#"+celdamovAlfileB1).text()).includes("blancas")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                          console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                        }
                      }
                      if(movimiento(coge)=="dama_negras"){
                        if(!movimiento($("#"+celdamovAlfileB1).text()).includes("negras")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                          console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                        }
                      }
                    if($("#"+celdamovAlfileB1).attr("value")=="inicio"){break;} 
                    if($("#"+celdamovAlfileB1).attr("value")=="borde"){break;} 
                    n6++;
                    if(n6==8)break;
              
          }while($("#"+celdamovAlfileB1).text()=="" && n6!=8);
        }
        if($("#"+celdaClickadaOrigin).attr("value")=="borde"){
            var n7=1;
            var celdamovAlfileB2=parseInt(celdaClickadaOrigin);
            do{
                      celdamovAlfileB2=(parseInt(celdaClickadaOrigin)+((8*n7)-n7));
                      $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                      if(movimiento(coge)=="dama_blancas"){
                        if(!movimiento($("#"+celdamovAlfileB2).text()).includes("blancas")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                          console.log($("#"+celdamovAlfileB2).attr("id"));
                        }
                      }
                      if(movimiento(coge)=="dama_negras"){
                        if(!movimiento($("#"+celdamovAlfileB2).text()).includes("negras")){
                          var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                          $("#"+celdamovAlfileB2).animate({backgroundColor:'#25F77E'},1000);
                          $("#"+celdamovAlfileB2).animate({backgroundColor:colorCeldaFb},1000);
                          $("#"+celdamovAlfileB2).attr("src","ok"+coge+celdaClickadaOrigin);
                          console.log($("#"+celdamovAlfileB2).attr("id"));
                        }
                      }
                    if($("#"+celdamovAlfileB2).attr("value")=="inicio"){break;} 
                    if($("#"+celdamovAlfileB2).attr("value")=="borde"){ break;} 
                    n7++;
                    if(n7==8)break; 
               
          }while($("#"+celdamovAlfileB2).text()=="" && n7!=8);
          var n8=1;
          var celdamovAlfileB1=parseInt(celdaClickadaOrigin);
          do{
                   celdamovAlfileB1=(parseInt(celdaClickadaOrigin)-((8*n8)+n8));
                    $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                    if(movimiento(coge)=="dama_blancas"){
                      if(!movimiento($("#"+celdamovAlfileB1).text()).includes("blancas")){
                        var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                        $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                        $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                        $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                        console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                      }
                  }
                  if(movimiento(coge)=="dama_negras"){
                    if(!movimiento($("#"+celdamovAlfileB1).text()).includes("negras")){
                      var colorCeldaFb=$("#"+celdaClickadaOrigin).css("background-color");
                      $("#"+celdamovAlfileB1).animate({backgroundColor:'#25F77E'},1000);
                      $("#"+celdamovAlfileB1).animate({backgroundColor:colorCeldaFb},1000);
                      $("#"+celdamovAlfileB1).attr("src","ok"+coge+celdaClickadaOrigin);
                       console.log("-(8+1)"+$("#"+celdamovAlfileB1).attr("id"));
                    }
                }
                  if($("#"+celdamovAlfileB1).attr("value")=="inicio"){break;} 
                  if($("#"+celdamovAlfileB1).attr("value")=="borde"){break;} 
                  n8++;
                  if(n8==8)break;
             
        }while($("#"+celdamovAlfileB1).text()=="" && n8!=8);
      }
      //VERTICAL Y HORIZONTAL
      //para la torre hacia arriba
     //para la torre hacia arriba
     var x1=1;
     celdamov2=(parseInt(celdaClickadaOrigin)-(8*1));
     $("#"+celdamov2).attr("src","ok"+coge+celdaClickadaOrigin);
     do{
       celdamov2=(parseInt(celdaClickadaOrigin)-(8*x1));
       var color2=($("#"+celdamov2).css("background-color"));
       if(movimiento(coge)=="dama_blancas"){
         if(!movimiento($("#"+celdamov2).text()).includes("blancas")){
           $("#"+celdamov2).animate({backgroundColor:'#25F77E'},1000);
           $("#"+celdamov2).animate({backgroundColor:color2},1000);
           $("#"+celdamov2).attr("src","ok"+coge+celdaClickadaOrigin);console.log(celdamov2); 
         }
       }
       if(movimiento(coge)=="dama_negras"){
         if(!movimiento($("#"+celdamov2).text()).includes("negras")){
           $("#"+celdamov2).animate({backgroundColor:'#25F77E'},1000);
           $("#"+celdamov2).animate({backgroundColor:color2},1000);
           $("#"+celdamov2).attr("src","ok"+coge+celdaClickadaOrigin); console.log(celdamov2); 
         }
       }
       if(movimiento($("#"+celdamov2).text()).includes("blancas")){break;}
       x1++;
     }while($("#"+celdamov2).text()=="" && x1!=8);
     //para la torre hacia derecha si no se encuentra en borde derecho
     if($("#"+celdaClickadaOrigin).attr("value")!="borde"){
       var x2=0;
       celdamov1=(parseInt(celdaClickadaOrigin)+1);$("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
       do{    
         x2++;
         celdamov1=(parseInt(celdaClickadaOrigin)+x2);
         var color1=($("#"+celdamov1).css("background-color"));
         if(movimiento(coge)=="dama_blancas"){
           if(!movimiento($("#"+celdamov1).text()).includes("blancas")){
             $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
             $("#"+celdamov1).animate({backgroundColor:color1},1000);
             $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
           }
         }
         if(movimiento(coge)=="dama_negras"){
           if(!movimiento($("#"+celdamov1).text()).includes("negras")){
             $("#"+celdamov1).animate({backgroundColor:'#25F77E'},1000);
             $("#"+celdamov1).animate({backgroundColor:color1},1000);
             $("#"+celdamov1).attr("src","ok"+coge+celdaClickadaOrigin);
           }
         }
         console.log(celdamov1);  console.log($("#"+celdamov1).attr("value"));   
       if($("#"+celdamov1).attr("value")=="borde"){break;}   
       }while(($("#"+celdamov1).text()=="" 
       && parseInt($("#"+celdamov1).attr("value"))!="borde"));
     }
      //torre hacia hacia iziquierda si no se encuentra en inicio de fila
      if($("#"+celdaClickadaOrigin).attr("value")!="inicio"){
         var x3=0;
         celdamov3=(parseInt(celdaClickadaOrigin));
         do{
           x3++;
           celdamov3=(parseInt(celdaClickadaOrigin)-x3);
           var color1=($("#"+celdamov3).css("background-color"));
           if(movimiento(coge)=="dama_blancas"){
             if(!movimiento($("#"+celdamov3).text()).includes("blancas")){
             $("#"+celdamov3).animate({backgroundColor:'#25F77E'},1000);
             $("#"+celdamov3).animate({backgroundColor:color1},1000);
             $("#"+celdamov3).attr("src","ok"+coge+celdaClickadaOrigin);
             }
           }
           if(movimiento(coge)=="dama_negras"){
             if(!movimiento($("#"+celdamov3).text()).includes("negras")){
             $("#"+celdamov3).animate({backgroundColor:'#25F77E'},1000);
             $("#"+celdamov3).animate({backgroundColor:color1},1000);
             $("#"+celdamov3).attr("src","ok"+coge+celdaClickadaOrigin);
             }
           }console.log(celdamov3);  console.log($("#"+celdamov3).attr("value"));   
           if($("#"+celdamov3).attr("value")=="inicio"){break;}
         }while(($("#"+celdamov3).text()=="" 
         && parseInt($("#"+celdamov3).attr("value"))!="inicio"));
     }
       //torre hacia hacia abajo
     var x4=0;
     celdamov4=(parseInt(celdaClickadaOrigin));
     do{
       x4+=8;
       celdamov4=(parseInt(celdaClickadaOrigin)+x4);
       var color1=($("#"+celdamov4).css("background-color"));
       if(movimiento(coge)=="dama_blancas"){
         if(!movimiento($("#"+celdamov4).text()).includes("blancas")){
           $("#"+celdamov4).animate({backgroundColor:'#25F77E'},1000);
           $("#"+celdamov4).animate({backgroundColor:color1},1000);
           $("#"+celdamov4).attr("src","ok"+coge+celdaClickadaOrigin);
           console.log(celdamov4);  console.log($("#"+celdamov4).attr("value"));
         }
       }
       if(movimiento(coge)=="dama_negras"){
         if(!movimiento($("#"+celdamov4).text()).includes("negras")){
           $("#"+celdamov4).animate({backgroundColor:'#25F77E'},1000);
           $("#"+celdamov4).animate({backgroundColor:color1},1000);
           $("#"+celdamov4).attr("src","ok"+coge+celdaClickadaOrigin);
           console.log(celdamov4);  console.log($("#"+celdamov4).attr("value"));
         }
       }
     }while(($("#"+celdamov4).text()=="") && (parseInt($("#"+celdamov4).attr("id"))<=64));
    }//FIN METODO DAMA
                          
  }
    });
    $("td").bind("dbclick click",function (e) {
      var celdaOrigin=$(this).attr("id");
      if(e.type=="dbclick"){
        //var clickada=$(this).attr("id");
        //var celda1="";
        
        if(movimiento($(this).text()).includes("blancas")){
          coge=$(this).text();
          //celda1=$(this).attr("id");
          alert(coge);
        }
        if(movimiento($(this).text()).includes("negras")){
          coge=$(this).text();
         // celda1=$(this).attr("id");
        }
      }
      if($(this).attr("src")=="ok"+coge+celdaId && $(this).text()==""){
         $(this).text(coge);
     
        //una vez clickado el peon resteo el array y le pongo como value peon,  asi solo permitera una clickada.
        if($(this).text(coge)==array_figuras1[5]);{
          //$(this).attr("value","peon")
           movimientoPeon=[];
        }
         $("#"+celdaClickadaOrigin).text("");
        // $("#"+celdaClickadaOrigin).unbind();
        coge="";
        $("#"+celdaClickadaDestino).attr("src","nook");
        celdaClickadaDestino=($(this).attr("id"));
        console.log("Origin: "+celdaClickadaOrigin);
        console.log("Destino; "+celdaClickadaDestino);
        console.log("Puede volver: "+$("#"+celdaClickadaOrigin).text());
        console.log("Posicion; "+($("#"+celdaClickadaOrigin).attr("value")));
        if($("#"+celdaClickadaOrigin).attr("value")=="inicio"){
        }
      }
      //BLANCAS
      if($(this).attr("src")=="ok"+coge+celdaId &&(movimiento(coge).includes("blancas")) 
      && movimiento($(this).text()).includes("negras")){
        //celdaClickadaDestino=parseInt(($(this).attr("id")));
          alert("ganada1: punto sumado: "+celdaClickadaDestino);
          alert($(this).text());
          $(this).text(coge);
          $("#"+celdaClickadaOrigin).text("");
         // $("#"+celdaClickadaOrigin).unbind();
          coge="";
          for(var n=0;n<64;n++){
            $("#"+i).attr("src","");
          }
      } 
      //BLANCAS
      if($(this).attr("src")=="ok"+coge+celdaId &&(movimiento(coge).includes("negras")) 
      && movimiento($(this).text()).includes("blancas")){
        //celdaClickadaDestino=parseInt(($(this).attr("id")));
          alert("ganada1: punto sumado: "+celdaClickadaDestino);
          alert($(this).text());
          $(this).text(coge);
          $("#"+celdaClickadaOrigin).text("");
         // $("#"+celdaClickadaOrigin).unbind();
          coge="";
          for(var n=0;n<64;n++){
            $("#"+i).attr("src","");
          }
      } 
      if($(this).attr("src","hola"));
    }) 
});
//funcion movimiento de ficha
function movimiento(mov){
  var blancasOnegras="";  var tipo="";
  for(var i=0;i<array_figuras1.length;i++){
    if(array_figuras1[i]==mov){ blancasOnegras="negras"; } 
    if(array_figuras2[i]==mov){blancasOnegras="blancas";}
  }
 if(blancasOnegras=="blancas"){
    switch(mov){
      case array_figuras2[0]: tipo="rey_blancas";break;
      case array_figuras2[1]: tipo="dama_blancas";break;
      case array_figuras2[2]: tipo="torre_blancas";break;
      case array_figuras2[3]: tipo="alfile_blancas";break;
      case array_figuras2[4]: tipo="caballo_blancas";break;
      case array_figuras2[5]: tipo="peon_blancas";break;
    }
  }
  if(blancasOnegras=="negras"){
    switch(mov){
      case array_figuras1[0]: tipo="rey_negras";break;
      case array_figuras1[1]: tipo="dama_negras";break;
      case array_figuras1[2]: tipo="torre_negras";break;
      case array_figuras1[3]: tipo="alfile_negras";break;
      case array_figuras1[4]: tipo="caballo_negras";break;
      case array_figuras1[5]: tipo="peon_negras";break;
    }
  }
  return tipo;
}

