
                                                                            //  SCROLL UP START
    

$(function ()
{
    $.scrollUp(
        {
           scrollText: 'Scroll To Top',
           scrollImg: false,
           scrollSpeed: 600, 
           scrollDistance: 400,  
        }
    );
    $("#scrollUp").mouseenter(function()
    {
        $(this).css(
            {
                "opacity":"0.5"
            }
        )
    })
    $("#scrollUp").mouseleave(function()
    {
        $(this).css(
            {
                "opacity":"1"
            }
        )
    })
});


                                                            //    NAVIGATION BAR   START                                                



$(document).ready(function () {
    $('#menu-toggle').click(function(){
    if($('#menu').hasClass('open')){
    $('#menu').removeClass('open');
    $('#menu-toggle').removeClass('open');
    }else{
    $('#menu').addClass('open');
    $('#menu-toggle').addClass('open');
    }
    });
    });



                                                           //   OWL CAROUSEL  START

$(document).ready(function()
{
    $('.owl-carousel').owlCarousel({
       items: 3,
       loop: true,
       nav: true,
    //    margin: 30,
         mouseDrag:true,
         touchDrag:true,
         slideBy:1,
         autoplay: true,
         autoplayTimeout: 1250,
         responsive:{
            0:{
               items:1,
               nav:true
              },
             600:{
                items:2,
                nav:true
              },
              900:{
                items:3,
                nav:true
              },           
           }
    });
});


                                                            //   TIME DISPLAY 
setInterval(()=>
{
    let time=new Date().toLocaleTimeString();
    let date=new Date().toLocaleDateString();
    document.getElementById("span1").innerHTML=time+"<br>"+date;

},1000);
  













   


