$(document).ready(function() {
    // Add any jQuery interactivity here
    $('nav ul li a').on('click', function(e) {
        e.preventDefault();
        const targetPage = $(this).attr('href');
        $('body').fadeOut(500, function() {
            window.location.href = targetPage;
            $(this).fadeIn(500);
        });
    });
});
