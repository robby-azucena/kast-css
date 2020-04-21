$(document).ready(function () {
    $('.navbar-toggler').click(function (e) {
        $(this).toggleClass('change');
        $('.nav-sidebar').toggleClass('show-sidebar');
    })

})