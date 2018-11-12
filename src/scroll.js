$(document).ready(() => {
    console.log('sdf')
    $("#navmenu").on("click", "a", function (event) {
        event.preventDefault();

        const id = $(this).attr('href');
        const top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});
