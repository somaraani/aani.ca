//Typing ----------------------------------------------------------------------------

var string1 = "Somar Ani--ani";

function type(i, str){
    
    //removes blink and exits function at end of string
    if(i == str.length){
        setTimeout(function() { 
              $("#span").addClass('noblink');
        }, 2600);
        return;
    }
    
    //deletes last character at '-'
    if (str.charAt(i) == '-') {
        setTimeout(function() { type(i - 2, str.substring(0,i-1) + str.substring(i + 1)); }, 175);
        return;
    }
    
    var space = "";
    if(str.charAt(i) == ' ') {
        space = '&nbsp;';
    }
    
    $('#typingText').html(str.substring(0,i + 1) + space + '<span id="span" class="blink" aria-hidden="true"></span>');
    setTimeout(function() { type(i+1, str); }, 250);
}

// Side nav  ---------------------------------------------------------------------------------

function openNav(a) {
    var width = 650;
    if($(window).width() < 650){
        width = $(window).width();
    }

    $('#sidenav').html("");
    
    $('#sidenav').css('width', width + "px");
    $('#main').css('margin-right',width + "px");
    $('#dimmer').css('display', 'block');
    
    $('#sidenav').load(a + ".html");
}

function closeNav() {
    $('#sidenav').css('width', 0 + "px");
    $("#main").css('margin-right', 0);
    $('#dimmer').css('display', 'none');
}

// Top nav  ---------------------------------------------------------------------------------

var navbar = $('#navbar');
var offset = 400;

window.onscroll = function(){    
    if(window.pageYOffset > offset){
        navbar.addClass('sticky');
    }
    else{
        navbar.removeClass('sticky');
    }

    var scrollpct = Math.floor($(window).scrollTop()/($(document).height() - $(window).height()) * 100) // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
    $('div#navprog').width(scrollpct + '%');
};

// Window load  ---------------------------------------------------------------------------------
 
$(window).ready(updateHeight);
$(window).resize(updateHeight);

$(window).load(function() {
    scrollToTop();
    $("#cover").delay(2000).slideUp(1500);
    setTimeout(function() {type(0, string1)}, 3500);
    setTimeout(function() {$("#headerImg").addClass("imgSlide");  $("#headerImg").removeClass("imgHidden");}, 2500);
    setTimeout(function() {$("#great").addClass("bodySlide");}, 1600);    
});

function scrollToTop(){
   $('html').animate({scrollTop:0}, 'fast');
   $('body').animate({scrollTop:0}, 'fast');
}

function updateHeight(){
    var width =  $('#loader').width();
    $('#loader').css('height',width);

   if($('#loader').height() > $('#loaderCover').height()){
       var height =  $('#loaderCover').height()
       $('#loader').css('height',height);
       $('#loader').css('width',height);
   }
}

$("#aboutlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 30
    }, 600);
});

$("#experiencelink").click(function() {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top - 20
    }, 600);
});

$("#skillslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top - 20
    }, 600);
});


$("#portfoliolink").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 30
    }, 600);
});

$("#contactlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 20
    }, 600);
});

