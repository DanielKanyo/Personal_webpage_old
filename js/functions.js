$(window).scroll(function() {

    console.log('hi') //kiirja ha mukodik a JS

    var wScroll = $(this).scrollTop(); //wScroll valtozo szamolja h mennyit gorgetunk a Top-tol

    if (wScroll > $('html').offset().top) {
      $('.nav-box').addClass('toggle-nav-box');
      $('.button-nav').addClass('toggle-button-nav');
      $('.button-nav-up').addClass('toggle-button-nav-up');
    } else {
      $('.nav-box').removeClass('toggle-nav-box');
      $('.button-nav').removeClass('toggle-button-nav');
      $('.button-nav-up').removeClass('toggle-button-nav-up');
    }

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)' //0px horizontalis iranyba
    });

    $('.tree').css({
      'transform' : 'translate(0px, -'+ wScroll /20 +'%)' //0px horizontalis iranyba
    });

    $('.skills-tree').css({
      'transform' : 'translate(0px, -'+ wScroll /20 +'%)' //0px horizontalis iranyba
    });

    if(wScroll > $('.skills-box').offset().top - ($(window).height() / 1.7)) {

        $('.skills-languages').each(function(i){

        setTimeout(function(){
          $('.skills-languages').eq(i-1).addClass('is-showing');
          }, 150 * (i+1));
        });
    }

    if(wScroll > $('.contact-box').offset().top - ($(window).height() / 1.7)) {

        $('.contact-square').each(function(i){

        setTimeout(function(){
          $('.contact-square').eq(i).addClass('is-showing');
          }, 150 * (i+1));
        });
    }
});

$(document).ready(function (){

    $("#button-0").click(function (){
        $('html, body').animate({
            scrollTop: $('#backg-box').offset().top
        }, 1500);
    });

    $("#button-1").click(function (){
        $('html, body').animate({
            scrollTop: $('#aboutme').offset().top - 100
        }, 1500);
    });

    $("#button-2").click(function (){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top - 100
        }, 1500);
    });

    $("#button-3").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 100
        }, 1500);
    });
});

$(document).ready(function (){
    $(".logo").fadeIn(2500);
});
