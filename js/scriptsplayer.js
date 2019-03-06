

/*var inputs=document.getElementsByName("input");

for(var i=0;i<inputs.size;i++){


    inputs[i].addEventListener("invalid", function(){

        alert("uwu");
    });
}*/

var num=Cookies.get("errors");
var int=Cookies.get("intent");

if(num==null || num=="NaN"){
    //Cookies.set("errors",0);
    num=0;
    cookie("errors",num);
}


if(int==null || int=="NaN"){
    int=0;
    cookie("intent",int);
}
mostrarE();
mostrarI();


$("input[type='text'],select,input[type='number']").on("invalid",function(){

    //var num=Cookies.get("errors");
    num++;
    
    cookie("errors",num);
   mostrarE();

    int++;
    
    cookie("intent",int);
  mostrarI();
  global=true;
  
});

$("form").submit(function(){

   

    //var num=Cookies.get("intent");
    int++;
    cookie("intent",int);
   mostrarI();
   return confirm('Vols continuar?');
});






function cookie(nom,val){

    Cookies.set(nom,val,{expires: 7});
}

function mostrarE(){
    $("#errores").html(num);
}


function mostrarI(){
    $("#intentos").html(int);
}

$("#borrar").click(function (e) { 
    e.preventDefault();

    Cookies.remove("intent");
    Cookies.remove("errors");
    //window.location.reload(true);
    mostrarE();
    mostrarI();
    
});

$("#reset").click(function (e) { 
    e.preventDefault();

    cookie("errors",0);
    cookie("intent",0);
    window.location.reload(true);
    mostrarE();
mostrarI();
    
});

