$(document).ready(function(){

  //hides picture
  var hide = function(){
    $(this).hide();
  };

  $(".container").on('click', 'img', hide);


  //fades last picture
  var fade = function(){
    $(this).fadeOut('slow');

  };

  $(".container").on('mouseenter', 'img:last', fade);

  $('.container').on('mouseleave', 'img:last', function(){
    $(this).fadeIn('slow');
  });


  //hover, click and change color
  $("li a").mouseover(function(){
    $(this).css("color", "red");
  });
  $("li a").mouseout(function(){
    $(this).css("color", "black");
  });
  $("li a").click(function(){
    $(this).css("background-color", "green")
  });

  //change animate
  $('img:nth-child(2)').mouseenter(function() {
       $(this).animate({
           height: '+=30px'
       });
     });
   $('#height').mouseleave(function() {
       $(this).animate({
           height: '-=30px'
       });
     });

  //prompt shiz

  $('img:nth-child(3)').on('click', function(){
    prompt('Are you as cool as Bill Murray?')
  });

  //slideUP
  $('#slide').mouseenter(function(){
    $(this).slideUp('slow');
  });
  $('#slide').mouseleave(function(){
    $(this).slideDown('slow');

  });

  //dblclick.fadeOut
  $('h1').dblclick(function(){
    $(this).fadeOut('fast');
  });

  $('h1').dblclick(function(){
    $(this).fadeIn('slow');
  });

  $('h1').mouseenter(function(){
    $(this).css('color','green');
  });

  $('h1').mouseleave(function(){
    $(this).css('color', 'black')
  });

  //.focus
  $('input').focus(function() {
     $(this).css('outline-color', 'blue');
   });
  $("input").blur(function(){
    $(this).css("background-color","grey");
  });


  //animate
  $('img:nth-child(4)').click(function(){
    $(this).animate({ top: '+=100px'}, 1000);

  });

  //paragraph
  $('p').mouseenter(function(){
    $(this).css({'border':'1px solid black', 'background-color':'black', 'color':'white'})
  });

  $('p').mouseleave(function(){
    $(this).css({'border':'none', 'background-color':'white', 'color':'black'})
  });

  $('p').click(function(){
    $('.pic_container').hide();
  });

  $('p').dblclick(function(){
    $('this').show('.pic_container');
  });

  //append
  $('img:first').click(function(){
    $('.pic_container').append('<img src=\'http://fillmurray.com/200/300\' alt=\'\' >');

  });


  //scrolling event
  $(window).scroll(function() {
    $("h2").css("display", "block");
  });


//  });
//on a jquery document with 30 events
//.live(), .bind(), .delegate()
//when in doubt always use .on

});
