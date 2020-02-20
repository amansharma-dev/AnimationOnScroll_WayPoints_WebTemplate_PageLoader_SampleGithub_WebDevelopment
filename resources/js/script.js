$(window).on("load", function () {
    $(".loader .inner").fadeOut(750, function () {
        $(".loader").fadeOut(1000);
    });
})

$(document).ready(function () {




    //test...

    //    $('h1').click(function(){
    //        
    //        $(this).css('background-color','#3DCC84');
    //    })
    //    

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animated tada');
    });


});