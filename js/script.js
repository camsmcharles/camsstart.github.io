

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":960},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-choc","displayName":"CHOC","link":{"linkType":"LinkTypePage","href":"#!page-choc"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-email","displayName":"Email","link":{"linkType":"LinkTypePage","href":"#!page-email"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-edulink-one","displayName":"Edulink One","link":{"linkType":"LinkTypePage","href":"#!page-edulink-one"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-help","displayName":"Help","link":{"linkType":"LinkTypePage","href":"#!page-help"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-getting-started","displayName":"Getting Started","link":{"linkType":"LinkTypePage","href":"#!page-getting-started"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-mobile-apps","displayName":"Mobile Apps","link":{"linkType":"LinkTypePage","href":"#!page-mobile-apps"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-more-resources","displayName":"More Resources","link":{"linkType":"LinkTypePage","href":"#!page-more-resources"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
/* slider buttons */
$(function() {
    try {
        var slider = $('.slider .unslider').children().get(0);
        var unslider = $(slider).data('unslider');
        $('.sub-nav').click(function() {
            unslider.next()
            $('.sub-nav-active').removeClass('sub-nav-active');
            $(this).addClass('sub-nav-active');
        });
    }
    catch(e) {
    }
})