$(document).ready(() => {
    $('.header-navbar__hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.header-navbar__list').toggleClass('active');
    });
});
// $(document).ready(function() {

//     $('.header-navbar__hamburger').on('click', function() {
//         $(this).toggleClass('header-navbar__hamburger--active');
//         $('.header-navbar__list').stop(true, true).fadeToggle(500);
//     });

// });