$(document).ready(function() {
    var $stupid = $('<div></div>')
        .height(1)
        .hide()
        .appendTo('body');

    var mobileHack = function() {
        $stupid.show();
        setTimeout(function() {
            $stupid.hide();
        }, 10);
    };

    $('#primary-menu a').smoothScroll({
        afterScroll: mobileHack
    });
});