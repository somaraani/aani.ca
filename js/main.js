//Typing ----------------------------------------------------------------------------

var string1 = "Somar Ani";
var string2 = "Somar Aani"
var timer;

function typeName(i){
    
    if(i == string1.length + 1){
        eraseName(0);
    }
    else{
        
        if(i == 6){
            document.getElementById("typingText").innerHTML = string1.substring(0,i) + '&nbsp;' + '<span id="span" class="blink" aria-hidden="true"></span>';
        }
        
        else if(i <= string1.length){
            document.getElementById("typingText").innerHTML = string1.substring(0,i) + '<span  id="span" class="blink" aria-hidden="true"></span>' ;
        }

        setTimeout(function() {
            typeName(i+1);
        }, 300);
    }
}

function eraseName(i){
    
    if(i == 3){
        reWriteName(7);
    }
    else{
        document.getElementById("typingText").innerHTML = string1.substring(0,string1.length - i) + '<span id="span" class="blink" aria-hidden="true"></span>' ;
        
        i++;
    
        setTimeout(function() {
            eraseName(i);
            }, 300);
    }
}

function reWriteName(i){
    
    if(i == 69){
      document.getElementById("span").className = "noblink";
    
      clearTimeout(timer);
    }
    else{
    
    if(i == string2.length+1){
        i = 69;
        
        setTimeout(function() {
            reWriteName(i);
        }, 2600);
    }
    else{
    document.getElementById("typingText").innerHTML = string2.substring(0,i) + '<span id="span" class="blink" aria-hidden="true"></span>' ;
    
    i++; 
    
    setTimeout(function() {
            reWriteName(i);
        }, 300);
    }
    }
 }

// Nav ---------------------------------------------------------------------------------

function openNav(a) {
    var width = 650;
    if($(window).width() < 650){
        width = $(window).width();
    }
    
    document.getElementById(a).style.width = width + "px";
    document.getElementById("main").style.marginRight = width +"px";
    document.getElementById("dimmer").style.display='block';
}

function closeNav() {
    
    var x = document.getElementsByClassName("sidenav");
    var i;
    for(i = 0; i < x.length; i++)
        x[i].style.width = "0";
    
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("dimmer").style.display='none';
}

 
$(window).ready(updateHeight);
$(window).resize(updateHeight);

$(window).load(function() {
    scrollToTop();
    $("#cover").delay(2000).slideUp(1500);
    setTimeout(function() {typeName(0)}, 3500);
    setTimeout(function() {$("#headerImg").addClass("imgSlide");  $("#headerImg").removeClass("imgHidden");}, 2500);
    setTimeout(function() {$("#great").addClass("bodySlide");}, 1600);
    
    //setTimeout(function(){loaded();}, 2000);
    
});

/*function loaded(){
    $("#skillsHeader").addClass("notVisible").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 150
    }); 
    
     $(".skills h2").addClass("notVisible").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    }); 
    
    $("#circle").addClass("notVisible").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 150
    });  skillsIndicators
}*/

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

var navbar = $('#navbar');
var offset = navbar.offset().top;
window.onscroll = function(){
    if(window.pageYOffset >= offset){
        navbar.addClass('sticky');
        $('.about').css('padding-top','45px');
    }
    else{
        navbar.removeClass('sticky');
        $('.about').css('padding-top','0px');
    }

    var width = 120 * $(window).scrollTop() / $(document).height()
    $('div#navprog').width(width + '%');
};

$("#aboutlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 20
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
        scrollTop: $("#portfolio").offset().top - 20
    }, 600);
});

$("#contactlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 20
    }, 600);
});

