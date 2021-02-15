$(document).ready(() => {
    $('.my-slick').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        centerMode: true
    });
    $('#accordion').accordion({
        heightStyle: "content"
    });
    $("#tabs").tabs();
});
