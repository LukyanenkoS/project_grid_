$(document).ready(() => {
    $('.header-navbar__hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.header-navbar__list').toggleClass('active');
    });
});
