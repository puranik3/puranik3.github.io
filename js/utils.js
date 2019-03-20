(function () {
    $('.accordion-item-title').on('click', function () {
        $(this).closest('.accordion').find('.accordion-item-body').slideUp();
        $(this).closest('.accordion-item').find('.accordion-item-body').slideToggle();
    });
}());