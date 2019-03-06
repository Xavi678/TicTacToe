
var count=0;
var taula = [
  [,,],
  [,,],
  [,,]
];
var fid;
var global=false;
var ultimov;
var pos=false;

window.onload=function(){
  document.getElementById("resultat").innerHTML=" Torn del jugador: "+ localStorage.getItem('jugador1');
}
var td=document.getElementsByTagName("td");

for(var i=0;i<td.length;i++){
  td[i].addEventListener("click",function(event){
   
    var thisid=document.getElementById(event.target.id);
    if (thisid.children.length==0 || this.id==null) {
      // do something
  
   
    
    
   var str=event.target.id;
   var i=str.substr(0,1);
   var j=str.substr(1);
   var n = 0;
   ultimov=i+""+j;
var l = document.getElementById("number");

    var elem = document.createElement("img");
   
 
      elem.setAttribute("src", "imatges/x.png");
      elem.addEventListener("click",function(){
        alert("Eps juagdor:"+localStorage.getItem('jugador1')+", Aquesta casella no esta buida, tira en una casella que estigui buida");
      });
      taula[i][j]="x";
     
        document.getElementById("resultat").innerHTML="Torn del "+ localStorage.getItem('jugador1');
      
    ///escriureLog();
     count++;
    
    var thisid=document.getElementById(event.target.id)
   
      // do something
  
    thisid.appendChild(elem);

    
 
    tornMaquina();

   guanyar();
    if(count==taula.length*taula.length && global==false){
      alert("Empat");
      if (confirm("Vols tornar a jugar?")) {
        window.location.reload();
      } else {
        window.location.href="index.html"
      }
    }
  
  }else{
    document.getElementById("resultat").innerHTML="Eps aquesta casella no esta buida!!!";
    
  }
  });

}

function guanyar(){
  var i=0;
  var j=0;
  var guanyar=true;
  //var arrayTmp2=[];
   for(i = 0; i < 3; i++) {
     
     var arrayTmp=[];
   
    for(j=0;j<3;j++){
      arrayTmp.push(taula[i][j]);
     
    }
    alerta(arrayTmp);
   
    
 }


for(var a=0;a<3;a++){
  var ar=[];
  for(var i=0;i<3;i++){
    ar.push(taula[i][a]);
   }

  alerta(ar);

}
var ar=[];
var ar2=[];
for(var i=0;i<3;i++){

  for(var j=0;j<3;j++){
    if(i==j){
      ar.push(taula[i][j]);

    }
    if(i==0 && j==2 || i==1 && j==1 || i==2 && j==0){
      ar2.push(taula[i][j]);
    }
  }
}
    alerta(ar);
    alerta(ar2);
}

function alerta(array){

  if(array.every(elem => elem =="x")){
    alert(localStorage.getItem('jugador1')+" Ha Guanyat!!!");
    if (confirm("Vols tornar a jugar?")) {
      window.location.reload();
    } else {
      window.location.href="index.html"
    }
    alert = function() {};
    global=true;
  }else if(array.every(elem => elem =="o")){
    alert(localStorage.getItem('jugador2')+" Ha Guanyat!!!");
    if (confirm("Vols tornar a jugar?")) {
      window.location.reload();
    } else {
      window.location.href="index.html"
    }
    global=true;
    alert = function() {};

}
 
}




function tornMaquina(){
    //alert(ultimov);
  
      document.getElementById("resultat").innerHTML="Torn de la maquina ";
    

    var llocsBuits=[];
    

    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){

            if(taula[i][j]==null){

                llocsBuits.push(i+""+j);
            }



        }
      
    }

    if(llocsBuits.length!=0){
      
      
        if(taula[1][1]==null){
            taula[1][1]="o";
            pos=1+""+1;
        //posibilitatGuanyar();
        

         /*   var i=ultimov.substr(0,1);
            var j=ultimov.substr(1);

            if(taula[i+1][j]==null && document.getElementById(i+1+""+j)!=null){

                taula[i+1][j]="o";
            }else if(taula[i][j+1]==null && document.getElementById(i+""+j+1)!=null){
                taula[i][j+1]="o";
            }else if(taula[i-1][j]==null){
                taula[i-1][j]="o";
            }else if(taula[i][j-1]==null){
                taula[i][j-1]="o";
            }else{
              trobat=true;
            }*/
            //trobat=false;
            //posibilitatGuanyar();
            
              mig=1;
            
        
        
        
        
      }else{
        //posibilitatGuanyar();
        var ar1=[];
        var ar2=[];
        var ar3=[];
        var ar4=[];
        var ar5=[];
        var ar6=[];
         var trobat=0;
        for(var i=0;i<llocsBuits.length;i++){
          //llocsBuits[i].charAt(0)==0;
          //var t=llocsBuits.indexOf(llocsBuits[i].charAt(0)==0);
          if(llocsBuits[i].charAt(0)=="0"){

            ar1.push(llocsBuits[i]);          
          }else if(llocsBuits[i].charAt(0)=="1"){
            ar2.push(llocsBuits[i]);         
          }else if(llocsBuits[i].charAt(0)=="2"){
            ar3.push(llocsBuits[i]);
          }
        }

        for(var i=0;i<llocsBuits.length;i++){
          //llocsBuits[i].charAt(0)==0;
          //var t=llocsBuits.indexOf(llocsBuits[i].charAt(0)==0);
          if(llocsBuits[i].charAt(1)=="0"){

            ar4.push(llocsBuits[i]);          
          }else if(llocsBuits[i].charAt(1)=="1"){
            ar5.push(llocsBuits[i]);         
          }else if(llocsBuits[i].charAt(1)=="2"){
            ar6.push(llocsBuits[i]);
          }
        }
        
        
       
        //trobada(ar3);
        //trobada(ar2);
       ///trobada(ar1);
       if(ar2.length==1){
        pos=ar2[0];
        trobat=1;
        
      }
      if(ar1.length==1){
        pos=ar1[0];
        trobat=1;
        
      }
      if(ar3.length==1){
        pos=ar3[0];
        trobat=1;
        
      }

      if(ar4.length==1){
        pos=ar4[0];
        trobat=1;
        
      }
      if(ar5.length==1){
        pos=ar5[0];
        trobat=1;
        
      }
      if(ar6.length==1){
        pos=ar6[0];
        trobat=1;
        
      }

      if(pos!=false){
      var i=pos.substr(0,1);
      var j=pos.substr(1);
      taula[i][j]= "o";
      }

        if(trobat==0){
   pos=llocsBuits[Math.floor(Math.random()*llocsBuits.length)];
    var i=pos.substr(0,1);
    var j=pos.substr(1);
    taula[i][j]= "o";
        }
        }
    var elem = document.createElement("img");
   
 
    elem.setAttribute("src", "imatges/o.png");
    elem.addEventListener("click",function(){
      alert("Eps juagdor:"+localStorage.getItem('jugador1')+", Aquesta casella no esta buida, tira en una casella que estigui buida");
    });
    document.getElementById(pos).appendChild(elem);
    
    count++;
    setInterval(function(){
      document.getElementById("resultat").innerHTML="Torn del "+ localStorage.getItem('jugador1');
      
    },3000);
        
    }


  }

  function posibilitatGuanyar(){
    for(var i=0;i<3;i++){
      var arrayTmp=[];
      for(var j=0;j<3;j++){
        arrayTmp.push(taula[i][j]);
        

      }
      comprovar(arrayTmp,i);
    }

    
  }


  function comprovar(array,i){
    var countx=0;
    var counto=0;
    for(var i=0;i<array.length;i++){
      if(array[i]!=undefined){
      if(array[i].includes("x") ){
        countx++;
      }else if(array[i].includes("o") ){
        counto++;
      }

      if(counto==2){
        var t=array.indexOf(undefined);

        
      }else if(countx==2){
        var t=array.indexOf(undefined);
        
      }
    }
    }



  }

function trobada(array){
  if(array.length==1){
    pos=array[0];
    trobat=1;
    
  }

}
