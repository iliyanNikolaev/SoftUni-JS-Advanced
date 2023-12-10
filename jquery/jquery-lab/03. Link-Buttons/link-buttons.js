function attachEvents() {

    $('a').on('click', function() {
        removeSelectedClasses();

        $(this).addClass('selected');
    })

    function removeSelectedClasses() {
        $('a').each(function() {
            $(this).removeClass('selected');
        });
    }
}