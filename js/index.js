if ($(window).width() > 992) {
  $(window).scroll(function(){
     if ($(this).scrollTop() > 300) {
        $('#menuNavbar').addClass("navbar-box fixed-top");
        // add padding top to show content behind navbar
        // $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#menuNavbar').removeClass("navbar-box fixed-top");
         // remove padding top from body
        // $('body').css('padding-top', '0');
      }
  });
}
