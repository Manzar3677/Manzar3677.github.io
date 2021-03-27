let header = '<div class="container-fluid">\n'+
'<a class="navbar-brand" href="/">\n'+
   '<img src="https://cdn.iconscout.com/icon/free/png-256/windows-media-player-2-722647.png" class="meida_brand">\n'+
   '<span class="brand_title"> Media MH Classic</span>\n'+
'</a>\n'+
'<span class="navbar-text">\n'+
  '<ul class="navbar-nav">\n'+
      '<li class="nav-item dropdown">\n'+
        '<a class="nav-link dropdown-toggle mr-80 modeList" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n'+
          'Mode\n'+
        '</a>\n'+
        '<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="mode" role="menu">\n'+
          '<li><a class="dropdown-item" id="1">Night Mode</a></li>\n'+
          '<li><a class="dropdown-item" id="2">Day Mode</a></li>\n'+
        '</ul>\n'+
      '</li>\n'+
  '</ul>\n'+
'</span>\n'+
'</div>';

var rendered = Mustache.render(header);
document.getElementById('navbar').innerHTML = rendered;

let footer = '<div class="col">\n'+
'<p class="text-center copyright-text">&copy; Copyright - Media MH Classic, 2021 </p>\n'+
'</div>';

var rendered2 = Mustache.render(footer);
document.getElementById('footer').innerHTML = rendered2;


$(document).ready(function () {

    $('.navbar-light').addClass('bg-light');

    $("ul[id*=mode] li").click(function () {
        if($(this).text() == "Night Mode"){
            console.log("NM");
            $('body').css("background-color", "#333");
            $('.footer-bg').css("background-color", "#000");
            $('.navbar-light').removeClass('bg-light');
            $('.navbar-light').addClass('bg-dark');
            $('.video_title,.video_view,.video_date').removeClass('text-muted');
            $('.brand_title ,.modeList,.title_h6,.copyright-text,.video_title,.video_view,.video_date').css('color','#fff');
            $('.img1,.img2,.img3').css('background-color','#fff');
        } else if($(this).text() == "Day Mode"){
            console.log("DM");
            $('body').css("background-color", "#fff");
            $('.footer-bg').css("background-color", "#f8f9fa");
            $('.navbar-light').addClass('bg-light');
            $('.navbar-light').removeClass('bg-dark');
            $('.video_title,.video_view,.video_date').addClass('text-muted');
            $('.brand_title ,.modeList,.title_h6,.copyright-text').css('color','#333');
            $('.img1,.img2,.img3').css('background-color','#fff');
        } 
    });

});
