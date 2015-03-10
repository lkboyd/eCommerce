$(document).ready(function () {
    $(".thumbnail img").mouseover(function () {
        $("#mainImage").attr("src", $(this).attr("src"));
    });
});




