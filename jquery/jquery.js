$(document).ready(function() {

    filterActivity();

    function filterActivity() {

        let button = $('.button');
        let activity = $('.activity');
        let applyFilter = $('.apply');

        activity.show();

        button.on('click', function() {
            $('.' + this.id).toggle();
            $(this).toggleClass('red');
        });

    }

    function autoSlide() {

        let slides = $('.slides');
        let slideIndex = 0;
        let i;

        console.log(slides);

        for (i = 0; i < slides.length; i++) {
            $(slides[i]).css("display", "none");
        }
        if (slideIndex > slides.length) { slideIndex = 1 }
        $(slides[slideIndex - 1]).css("display", "block");
        setTimeout(autoSlide, 3000);
    }

});
