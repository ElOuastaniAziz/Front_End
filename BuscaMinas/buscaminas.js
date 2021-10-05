
//graficos
var emoji_triste=document.createElement("img");
emoji_triste.src="images/trist_30.png";

var emoji_feliz=document.createElement("img");
emoji_feliz.src="images/feliz_30.png";


//atributos 
 var minas=0;
 var filas=0;
 var columnas=0;
var array_celdas=[];

var btn_play=document.getElementById("play");
var btn_restart=document.createElement("input");
btn_restart.setAttribute("type","button");
btn_restart.setAttribute("id","restart");
btn_restart.setAttribute("value","Reiniciar");
btn_restart.setAttribute("onclick","restart()");

function colocarMinas(){
    var total_celdas=filas*columnas
    for(var x=0; x<total_celdas;x++){
        array_celdas.push("X");
    }
    
      
       /* var total_celdas=filas*columnas
        var numero=Math.floor(Math.random()*total_celdas);
        alert(numero);
        array_celdas[numero]="O*";*/

    var numRandom=0;
    if(minas!=0){
        for(var x=0; x<minas;x++){
            do{
                numRandom=Math.floor(Math.random()*total_celdas);
            }while(array_celdas[numRandom]!="X");
            array_celdas[numRandom]="bomba.png";
        }
    }
    
    


}
var contador="";
var contaCeldas=0;
function jugar(){
        //RESETERA VALORES
           // resetearValores();
        document.getElementById("forumlario").style.display="none";
        
        document.getElementById("display").innerHTML="";
         document.getElementById("display").appendChild(btn_restart);
        filas = document.getElementById("filas").value;
        columnas = document.getElementById("columnas").value;
        var minasPorcenge=document.getElementById("minas").value;
        contador = document.createElement("h3");
        //var estado = document.createElement("h4");
       // estado.setAttribute("id","estado");
        //estado.setAttribute("style","float:left");
        minas = Math.round((((columnas*filas)*minasPorcenge)/100));
        encontradas=minas;
       
        contador.textContent=encontradas;
        contadorUnos=0;
         //llamo a la funcion que genera el numero deminas
         colocarMinas();
       
     
        document.getElementById("display").appendChild(contador);
       
        if((((columnas*filas)*45)/100)>=minasPorcenge){
            var table = document.createElement("table");
            for(var i=0;i<columnas;i++){
                var tr=document.createElement("tr");
                for(var x=0;x<filas;x++){
                    var td=document.createElement("td");
                    td.setAttribute("id",contaCeldas);
                   // td.setAttribute("name",x);
                    td.setAttribute("class","tds");
                    td.setAttribute("onclick","clickar(this)"); 
                     contaCeldas++;
                    
                    /* if(x==(parseInt(filas))){
                        td.setAttribute("value","inicio");
                     }*/
                    tr.appendChild(td);
                
                   

                }
                
             
                table.appendChild(tr);
                
            }
    
            //  table.appendChild(tr);
            document.getElementById("display").appendChild(table);
       }else{
           document.getElementById("minas").value=" Has superado el limite permitido";
           document.getElementById("minas").style.backgroundColor="RED";
          
       }
       var todas_celdas=document.getElementsByClassName("tds");
       var contadorMinass=1;
       var posicionMina=0;
       for(var i=0;i<todas_celdas.length;i++){
           var imagen=document.createElement("img");
           imagen.src=array_celdas[i];
           todas_celdas[i].setAttribute("src",imagen.getAttribute("src"));

           
           if(contadorSaltos==0){
                todas_celdas[i].setAttribute("value","inicio");
               
            }
           contadorSaltos++;
           if(contadorSaltos==filas){
               todas_celdas[i].setAttribute("value","borde");
               todas_celdas[i-(parseInt(filas)-1)].setAttribute("value","inicio");
               contadorSaltos=0;
           }
           if(todas_celdas[i].getAttribute("src")=="bomba.png"){
               poscionMina=todas_celdas[i].getAttribute("id");
                   //alert("Posicion mina en la array: "+poscionMina);
                   //alert("Esta en borde o inicio en la array: "+todas_celdas[poscionMina].getAttribute("value"));
                       if(poscionMina >0 && poscionMina<(contaCeldas)){

                        //LATRALES
                           if(todas_celdas[poscionMina].getAttribute("value")!="inicio"){
                            todas_celdas[i-1].setAttribute("name",getUno(todas_celdas[i-1].getAttribute("id")));
                    
                           }
                           if(todas_celdas[poscionMina].getAttribute("value")!="borde"){
                            todas_celdas[i+1].setAttribute("name",getUno(todas_celdas[i+1].getAttribute("id")));
                            //todas_celdas[i-1].setAttribute("name",getUno(todas_celdas[i-1].getAttribute("id")));
                            
                           }
                           //FIN LATERALES
                           //ARRIBA (RESTAS)
                           if(poscionMina>=parseInt(filas)){
                            todas_celdas[i-parseInt(filas)].setAttribute("name",getUno(todas_celdas[i-parseInt(filas)].getAttribute("id")));
                           }
                           if(poscionMina>=(parseInt(filas)-1) && todas_celdas[poscionMina].getAttribute("value")!="borde"){
                            todas_celdas[i-(parseInt(filas)-1)].setAttribute("name",getUno(todas_celdas[i-(parseInt(filas)-1)].getAttribute("id")));
                           }
                           if(poscionMina>=(parseInt(filas)+1) && todas_celdas[poscionMina].getAttribute("value")!="inicio"){
                            todas_celdas[i-(parseInt(filas)+1)].setAttribute("name",getUno(todas_celdas[i-(parseInt(filas)+1)].getAttribute("id")));
                           }
                           //FIN arriba(restas)

                           
                        
                        
                             //DEBAJO(SUMAS)
                            if(todas_celdas[poscionMina].getAttribute("value")=="inicio"){
                                    todas_celdas[i+(parseInt(filas)+1)].setAttribute("name",getUno(todas_celdas[i+(parseInt(filas)+1)].getAttribute("id")));
                                    todas_celdas[i+parseInt(filas)].setAttribute("name",getUno(todas_celdas[i+parseInt(filas)].getAttribute("id")));
                            }
                            else if(todas_celdas[poscionMina].getAttribute("value")=="borde"){
        
                                todas_celdas[i+(parseInt(filas)-1)].setAttribute("name",getUno(todas_celdas[i+(parseInt(filas)-1)].getAttribute("id")));
                                todas_celdas[i+parseInt(filas)].setAttribute("name",getUno(todas_celdas[i+parseInt(filas)].getAttribute("id")));
                            
                            }else if(todas_celdas[poscionMina].getAttribute("value")==null){
                                todas_celdas[i+(parseInt(filas)-1)].setAttribute("name",getUno(todas_celdas[i+(parseInt(filas)-1)].getAttribute("id")));
                                todas_celdas[i+(parseInt(filas)+1)].setAttribute("name",getUno(todas_celdas[i+(parseInt(filas)+1)].getAttribute("id")));
                                todas_celdas[i+parseInt(filas)].setAttribute("name",getUno(todas_celdas[i+parseInt(filas)].getAttribute("id")));

                            }
                              //FIN DEBAJO(SUMAS)
                            
                       
                    }   
      
       
                }
        
            }
   
}

var contadorSaltos=0;
var saltos=0;
function clickar(td){
    
    
    var todas_celdas=document.getElementsByClassName("tds");
    //para pintar lo vacio
    
     for(var x=0;x<todas_celdas.length;x++){
            //todas_celdas[x].style.backgroundColor="#D8D8D8";
            if(todas_celdas[x].getAttribute("name")==null && todas_celdas[x].getAttribute("src")!="bomba.png"){
                    todas_celdas[x].style.backgroundColor="#D8D8D8";    
             }
        
        }
    

   
  
    //td.setAttribute("src",array_celdas[td.getAttribute("id")]);
    //alert("posicion: "+td.getAttribute("id"));
   // alert("posicion: "+td.getAttribute("src"));

    var contadorMinass1=parseInt(0);
    if(td.getAttribute("src")=="bomba.png"){
       // setTimeout(function(){
            for(var x=0; x<todas_celdas.length;x++){
                if(todas_celdas[x].getAttribute("src")=="bomba.png"){
                    var imagen_bomba=document.createElement("img");
                    imagen_bomba.src="bomba.png";
                    todas_celdas[x].appendChild(imagen_bomba);
                    todas_celdas[x].setAttribute("onclick","");
                }
                todas_celdas[x].setAttribute("onclick","");
               // todas_celdas[x].removeEventListener("click",clickar);
               

            }
            contador.innerHTML=minas+"  ||               ";//+" :)";
            contador.appendChild(emoji_triste);
           resetearValores();
           // },5000);
        
        // alert("te has perdido");
    
        //location.reload();
       // window.location="index.html";
    }else{

        var todas_celdas=document.getElementsByClassName("tds");
        contador.innerHTML=minas+"  ||               ";//+" :)";
        contador.appendChild(emoji_feliz);
        var poscionMina=0;
        if(td.getAttribute("src")!="bomba.png"){
                  
           td.style.backgroundColor="#D8D8D8";
           td.textContent=td.getAttribute("name")
            
           
        }
      

    }
    
}

var posocionDeNumeros=[];
function getUno(num){
    var contador=0
    posocionDeNumeros.push(num);
    for(var i=0;i<posocionDeNumeros.length;i++){
        if(num==posocionDeNumeros[i]){
            contador++;
        }

    }

    return contador;
}

function resetearValores(){  
    minas=0;
    filas=0;
    columnas=0;
   array_celdas=[];
   contador="";
contaCeldas=0;

}

function restart(){
    location.reload();
    
}