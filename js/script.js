(function($) {
    $(document).ready( function() {
        /* WA link */

        console.log('click');
        $('#wa_link').on('click', function(e) {
            e.preventDefault();
            $('#wa_bubble').toggleClass('hidden');
        });

        $('.wa_bubble--close').on('click', function(e) {
            e.preventDefault();
            $('#wa_bubble').addClass('hidden');
        });
    });
})(jQuery);