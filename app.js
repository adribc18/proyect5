let color = $('.navItem').css('color', 'white');

let style = $('#nav').css('background-color', '#145');

$("li").each(function(){
    $(this).css("background-color", "#ccc");
  });

  $(".impar").each(function(){
    $(this).css("background-color", "#aaa");
  });

let name = $('#myInput').attr('placeholder', 'Adriana');