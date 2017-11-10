// By David Luz - 10/11/2017

$(document).ready(function(){

var teste = $(".zoomImage").attr("title");	


$(".zoomImage").css("cursor","url('cursor_custom.svg'), auto");
$(".zoomImage").css("width","100%");
$(".zoomImage").css("height","auto");




$("#modal").iziModal();
$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#modal').iziModal('open');
});






});


