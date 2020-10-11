$(document).ready(function() {

    $('.iconAnimate').hover(

        function() { $(this).addClass('fa-spin') },
        function() { $(this).removeClass('fa-spin') }
    )
});