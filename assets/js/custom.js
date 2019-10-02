$(document).ready(function() {
    $('.sidebar-toggler').click(function() {
        $('.sidebar').toggle("slow");

        if($('.sidebar-toggler').attr('class') == 'sidebar-toggler') {
            $('.sidebar-toggler').addClass('active');
        }else{
            $('.sidebar-toggler').removeClass('active');
        }
    });

    $('.sidebar-close').click(function() {
        $('.sidebar').hide("slow");
        $('.sidebar-toggler').removeClass('active');
    });
});