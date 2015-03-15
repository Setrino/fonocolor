$(".overlayFilter").css("left", $("#enter").offset().left);
$(".overlayFilter").css("top", $("#enter").offset().top);

$(window).resize(function() {
    $(".overlayFilter").css("left", $("#enter").offset().left);
});