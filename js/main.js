$(document).ready(function () {
    $("#close").click(function () {
        $("nav").animate({ left: "-100%" }, 1500)
    })
    $("#openNav").click(function () {
        $("nav").animate({ left: "0%" }, 1500)
    })
    $(".icon").hover(function () {
        $(".social").slideDown(1000);
    }, function () {
        $(".social").slideUp(1000);

    });

})
