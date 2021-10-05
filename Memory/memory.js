var intentos =20;
var stage;
window.onload=function(){
    document.getElementById("score").innerHTML="Score: 0  ||  Intentos: "+intentos;
    stage=document.getElementById("display");
}
var images=["images/circulo.jpg","images/triangulo.jpg","images/cuadrado.jpg","images/ovalo.jpg",
"images/rectangulo.jpg","images/rumbo.jpg","images/hexagono.jpg",
"images/paralelologram.jpg","images/pentagono.jpg","images/octaguno.jpg",
"images/circulo.jpg","images/triangulo.jpg","images/cuadrado.jpg","images/ovalo.jpg",
"images/rectangulo.jpg","images/rumbo.jpg","images/hexagono.jpg",
"images/paralelologram.jpg","images/pentagono.jpg","images/octaguno.jpg"
];


 for(var i=0;i<images.length;i++){
        var image = document.createElement("img");
        var image_default=document.createElement("img");
        image_default.src="images/back.jpg";
        image.src=images[i];
        image_default.setAttribute("class", image.getAttribute("src"));
        image_default.setAttribute("id", image.getAttribute("src")+i);
        image_default.setAttribute("onclick", "play(this.className,"+i+")");
      stage.appendChild(image_default);
       
        
    }
    
    var contador=0;
    var clickadas=[];
    var posicion=[];
    var sinAcertar=[];

    function play(id,pos){
        clickadas.push(id);
        posicion.push(pos);
        var pics=document.getElementsByClassName(id);
        var primeraFoto= document.getElementById(id+pos);
        primeraFoto.src=id;
        sinAcertar.push(primeraFoto.getAttribute("id"));

        if(clickadas[1]==clickadas[0] && posicion[0]!=pos ){
            for(var x=0;x<pics.length;x++){
                    if(id==images[pos]){
                        pics[x].src=images[pos];
                       
                        
                       
                    }
                   
            }
                contador++;
                setTimeout(function(){
                    pics[0].src="images/vacio.jpg";
                    pics[1].src="images/vacio.jpg";
                },2000);
                
       
            
            clickadas=[]
             posicion=[];
             sinAcertar=[];
          
            
        }
       else{
            if(clickadas[0]!=undefined && clickadas[1]!=undefined){
               intentos--;
               setTimeout(function(){
                    for(var x=0;x<sinAcertar.length;x++){
                        document.getElementById(sinAcertar[x]).src="images/back.jpg";
                    }
                },2000);
            }
            if(clickadas.length==2){
                clickadas=[]
                posicion=[];                
                    
            }  
        }
          
        document.getElementById("score").innerHTML="Score: "+contador+ " ||  Intentos: "+intentos;

        if(intentos==0){
                alert("You lose :( ");
                location.reload(true);
            
        }if(contador==10){
           
            document.getElementById("display").innerHTML="<br/><br/><h3>You win :) </h3>"+
            "<input type='button' value='Play again' onclick='javascript:location.reload(true)'/> ";

        }
    }