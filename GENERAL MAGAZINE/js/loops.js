 //recorrer una clase con each
    $('.ads').each((index,element)=>{
           console.log(element);
           $(element).css("display", "unset");
    });

    //recorrer una clase con for convencional
   for(var i=0;i<$('.ads').length;i++){
        console.log($('.ads').get(i));
    }

   var ads=document.getElementsByClassName('ads');
    
   
    Array.from(ads).forEach((element,index)=>{
        console.log(element,index)
    });

    Array.prototype.forEach.call(ads,(element,index)=>{
        console.log(element,index);
    });

    var ads=document.getElementsByClassName('ads');
    for(var i=0;i<ads.length;i++){
        console.log(ads[i]);
    }
    
    
    Array.from([1,2,3],x=>x+x).forEach((element)=>{
        console.log(element) //2,4,6
    })

    Array.from("123").forEach((element)=>{
        console.log(element); //1,2,3
    });


    //Estudiar el funcionamiento 
   // const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

    //console.log(range(0,4,1));

    var array=[
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
    var nombres=[];
    var emails=[];
    for(var i=0;i<array.length;i++){
        var obj=array[i];
        for(var key in obj){
            if(key=='nombre'){
                nombres.push(obj[key])
            } 
            if(key=='email'){
                emails.push(obj[key])
            } 
        }
    }

    console.log(emails,nombres)

    var tab=['A','b','d','e','l','a','z','i','z'];

    console.log(tab.join('-'));