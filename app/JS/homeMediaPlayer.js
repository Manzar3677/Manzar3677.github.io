'use strict';


jQuery(document).ready(function () {

    jQuery('.navbar-light').addClass('bg-light');

    jQuery("ul[id*=mode] li").click(function () {
        if(jQuery(this).text() == "Night Mode"){
            console.log("NM");
            jQuery('body').css("background-color", "#333");
            jQuery('.footer-bg').css("background-color", "#000");
            $('.navbar-light').removeClass('bg-light');
            $('.navbar-light').addClass('bg-dark');
            $('.brand_title ,.modeList,.title_h6,.copyright-text').css('color','#fff');
        } else if($(this).text() == "Day Mode"){
            console.log("DM");
            $('body').css("background-color", "#fff");
            $('.footer-bg').css("background-color", "#f8f9fa");
            $('.navbar-light').addClass('bg-light');
            $('.navbar-light').removeClass('bg-dark');
            $('.brand_title ,.modeList,.title_h6,.copyright-text').css('color','#333');
        } 
    });

    $('overflow-visible').css('overflow','visible');
    $("#shareBtn").trigger('click');

    $('.whatsapp,.twitter,.facebook,.instagram').css('visibility','hidden');
    
    $('.whatsapp').removeClass('left-1');
    $('.twitter').removeClass('left-2');
    $('.facebook').removeClass('right-1');
    $('.instagram').removeClass('right-2');
  
    $(".shareButton").click(function(){
        $('.whatsapp').addClass('left-1');
        $('.twitter').addClass('left-2');
        $('.facebook').addClass('right-1');
        $('.instagram').addClass('right-2');
        $('.whatsapp,.twitter,.facebook,.instagram').css('visibility','unset');
    })
   
});

setInterval(function(){ 
    $('#shareBtn').css("display","none");
 }, 1000);