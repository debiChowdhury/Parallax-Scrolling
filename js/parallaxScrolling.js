
$(document).ready(function () {

    $('.breadCrumbs').click(function(){
        $('.navbar').show(500);
        $('.close').show(500);
        $('.breadCrumbs').hide();

    });
    $('.close').click(function(){
      $('.navbar').hide(500);
      $('.close').hide(500);
        $('.breadCrumbs').show(500);


    });

$('#menu li a').eq(0).click(function(){

  $('html, body').stop(true,false).animate({ scrollTop:0}, 1500);


});
$('#menu li a').eq(1).click(function(){

  $('html, body').stop(true,false).animate({ scrollTop:1431}, 1200);


});
$('#menu li a').eq(2).click(function(){

  $('html, body').stop(true,false).animate({ scrollTop:2231}, 1200);


});
$('#menu li a').eq(3).click(function(){

  $('html, body').stop(true,false).animate({ scrollTop:5331}, 1200);


});
$('#menu li a').eq(4).click(function(){

  $('html, body').stop(true,false).animate({ scrollTop:6865}, 1200);


});
$('#menu li a').eq(5).click(function(){

  $('html, body').stop(true,false).animate({ scrollTop:8354}, 1200);


});

});
  var $cog = $('.wowSomeSauce'),
    $body = $(document.body),
   $bodyHeight = $('body').height();

$(window).on("scroll",function() {

  $('.parallax').each(function(){
    var obj = $(this),
    yPos = -( $(window).scrollTop() * 0.2 );
    obj.css({'background-position':'0px '+yPos+'px'});
  });
  $('.parallax10').each(function(){
    var obj = $(this),
    yPos = -( $(window).scrollTop() * 0.02);
    obj.css({'background-position':'0px '+yPos+'px'});
  });
  $('.parallax7').each(function(){
    var obj = $(this),
    yPos = -( $(window).scrollTop() * 0.01);
    obj.css({'background-position':'0px '+yPos+'px'});
  });


  if ($(window).scrollTop()> 0 && $(window).scrollTop()<150 ) {

  $(".Bake").css({'bottom':  ($(window).scrollTop()*0.9) + 'px'});
  }

     if ($(window).scrollTop()> 700 && $(window).scrollTop()<1400 ) {

    $(".wowSomeSauce").css({'top':  ($(window).scrollTop()*0.5) + 'px'});
  }

if ($(window).scrollTop()> 2100 && $(window).scrollTop()<2900 ){

$(".mushroom").css({'top':  ($(window).scrollTop()*0.236) + 'px'});
$(".mushroomPizza").css({'top':  ($(window).scrollTop()*0.270) + 'px'});
  }
  if ($(window).scrollTop()> 2700 && $(window).scrollTop()<3431 ){

  $(".garlic").css({'top':  ($(window).scrollTop()*0.149) + 'px'});
    $(".GarlicPizza").css({'top':  ($(window).scrollTop()*0.220) + 'px'});

    }
    if ($(window).scrollTop()> 3600 && $(window).scrollTop()<4131 ){

    $(".bacon").css({'top':  ($(window).scrollTop()*0.166) + 'px'});
    $(".baconPizza").css({'top':  ($(window).scrollTop()*0.191) + 'px'});

      }
      if ($(window).scrollTop()> 4200 && $(window).scrollTop()<5200 ){

      $(".marshmellow").css({'top':  ($(window).scrollTop()*0.120) + 'px'});
     $(".marshmellowPizza").css({'top':  ($(window).scrollTop()*0.150) + 'px'});

        }

        if ($(window).scrollTop()> 6000 && $(window).scrollTop()<7300 ){

        $(".about").css({'top':  ($(window).scrollTop()*0.030) + 'px'});


          }
          if ($(window).scrollTop()> 6900 && $(window).scrollTop()<7800 ){


         $(".layer1").css({'left':  (($(window).scrollTop()-$(".parallax11").offset().top)*0.5) + 'px'});
         $(".layer2").css({'top': (($(window).scrollTop()-$(".parallax11").offset().top)*0.7) + 'px'});
         $(".layer3").css({'top': (($(window).scrollTop()-$(".parallax11").offset().top)*0.9) + 'px'});
         $(".layer4").css({'right': (($(window).scrollTop()-$(".parallax11").offset().top)*0.3) + 'px'});

       }



    if ($(this).scrollTop()> 415){
      $(".tomatoSauce").css({"display":"block"})
                      .animate({"left":"2px","opacity":"1"},2200);

    }

    $('a').on('click', function(){
    $('a').removeClass('selected');
    $(this).addClass('selected');
});
});
