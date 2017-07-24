$(document).ready(function(){
    $('button').click(function(){
        var message =$('textarea').val();
       var old=$('#content').html();
       $('#content').html(old +'<P>'+ message +'</p>')
       console.log(message)
       $('textarea').val('')
    });
    $('textarea').keypress
}); 