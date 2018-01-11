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

$(window).on('load', function() {
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


//   $(document).ready(function () {
      //     
      //      var browserPrefix = "",
      //        usrAg = navigator.userAgent;
      //    if(usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
      //        browserPrefix = "-webkit-";
      //    } else if (usrAg.indexOf("Opera") > -1) {
      //        browserPrefix = "-o";
      //    } else if (usrAg.indexOf("Firefox") > -1) {
      //        browserPrefix = "-moz-";
      //    } else if (usrAg.indexOf("MSIE") > -1) {
      //        browserPrefix = "-ms-";
      //    }
      //
      //    var wait = false;
      //    $('body').mousemove(function (event) {
      //        if(!wait){
      //        var cx = Math.ceil(window.innerWidth / 2.0),
      //            cy = Math.ceil(window.innerHeight / 2.0),
      //            dx = event.pageX - cx,
      //            dy = event.pageY - cy,
      //            tiltx = (dy / cy),
      //            tilty = - (dx / cx),
      //            radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)),
      //            degree = (radius * 15);
      //        
      //
      //        $('#circle').css(browserPrefix + 'transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
      //
      //        }
      //        
      //        
      //    });
      //});   

