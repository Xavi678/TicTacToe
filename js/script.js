var count=0;
var taula = [
  [,,],
  [,,],
  [,,]
];
var fid;
var global=false;


window.onload=function(){
  document.getElementById("resultat").innerHTML=" Torn del jugador: "+ localStorage.getItem('jugador1');
}
  

 


 /* $("input[type='submit']").click(function(){
    var radioValue = $("input[name='opcio']:checked").val();
      if(radioValue==="2 jugadors"){
         window.location.href='3enratlla.html',true;
      }else{
        window.location.href='vsmaquina.html',true;
      }
      

      localStorage.setItem('jugador1',$("input[name='Jugador1']").val());
      localStorage.setItem('jugador2',$("input[name='Jugador2']").val());
  });*/

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
var l = document.getElementById("number");

      var elem = document.createElement("img");
     
        
      if(count%2==0){
        elem.setAttribute("src", "imatges/x.png");
        elem.addEventListener("click",function(){
          alert("Eps juagdor:"+localStorage.getItem('jugador1')+", Aquesta casella no esta buida, tira en una casella que estigui buida");
        });
        taula[i][j]="x";
        document.getElementById("resultat").innerHTML="Moviment Correcte Has marcat la casella "+i+","+j+" Torn del "+ localStorage.getItem('jugador2');
        count++;
      }else{
        elem.setAttribute("src", "imatges/o.png");
        elem.addEventListener("click",function(){
          alert("Eps juagdor:"+localStorage.getItem('jugador2')+", Aquesta casella no esta buida, tira en una casella que estigui buida");
        });
        taula[i][j]="o";
        document.getElementById("resultat").innerHTML="Moviment Correcte Has marcat la casella "+i+","+j+" Torn del "+ localStorage.getItem('jugador1');
        count++;
      }
      var thisid=document.getElementById(event.target.id)
      if (thisid.children.length==0) {
        // do something
    
      thisid.appendChild(elem);

      
      }

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
     
      /*if(arrayTmp2.every(elem => elem =="x")){
        alert("Han guanyat les o");
        window.location.href="/index.html"
      }*/
   }
  /* var ar=[];
   
   for(var i=0;i<3;i++){
    ar.push(taula[i][0]);
   }
   if(ar.every(elem => elem =="x")){
    alert("Han guanyat les x");
    window.location.href="/index.html"
  }else if(ar.every(elem => elem =="x")){
    alert("Han guanyat les o");
    window.location.href="/index.html"
  }

  var ar=[];
   
   for(var i=0;i<3;i++){
    ar.push(taula[i][1]);
   }
   if(ar.every(elem => elem =="x")){
    alert("Han guanyat les x");
    window.location.href="/index.html"
  }else if(ar.every(elem => elem =="x")){
    alert("Han guanyat les o");
    window.location.href="/index.html"
  }

  var ar=[];
   
   for(var i=0;i<3;i++){
    ar.push(taula[i][2]);
   }
   if(ar.every(elem => elem =="x")){
    alert("Han guanyat les x");
    window.location.href="/index.html"
  }else if(ar.every(elem => elem =="x")){
    alert("Han guanyat les o");
    window.location.href="/index.html"
  }*/

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

document.getElementById("nombre").addEventListener("blur",function(){
  this.style.textTransform="uppercase";
});

document.getElementById("apellidos").addEventListener("blur",function(){
  this.style.textTransform="uppercase";
});

