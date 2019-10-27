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
        console.log(slides);
        let slideIndex = 0;
        console.log(slideIndex);
        let i;
        console.log(i);

        console.log(slides);

        for (i = 0; i < slides.length; i++) {
            console.log(i);
            $(slides[i]).css("display", "block");
            console.log(slides[i]);
        }
        slideIndex++;
        console.log(slides[i]);
        if (slideIndex > slides.length) { slideIndex = 1 }

        $(slides[i]).css("display", "none");
        setTimeout(autoSlide, 2000); // Change image every 2 seconds
    }

});
