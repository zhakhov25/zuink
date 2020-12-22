$(document).ready(function(){
    $('.nav_burger').click(function(event) {
        $('.nav_burger, .navigation').toggleClass('active')
    })
})

$(function () {
    $('.offers').slick({
        dots: false,
        infinite: false,
        speed: 300,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    });
}) 

$(function () {
    $('.our_work').slick({
        dots: false,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    });
}) 