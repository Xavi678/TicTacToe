/*$("form").submit(function (e) { 
    e.preventDefault();
    $("#Form")
    
});*/

$("form").submit(function (e) { 
  
    localStorage.setItem('jugador1',$("input[name='Jugador1']").val());
    localStorage.setItem('jugador2',$("input[name='Jugador2']").val());

$("form input[type='text'],form input[type='radio']:checked ").each(
    function(index){  
        var input = $(this);
        //alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());

       
        if(input.val()=="2 jugadors"){
           
            $('form').attr('action', '3enratlla.html');
        }else if(input.val()=="vs Màquina"){
            $('form').attr('action', 'vsmaquina.html');
        }
    }
);

    
});