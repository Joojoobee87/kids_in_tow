$(document).ready(function() {

    function filterSelected() {

        let button = $('.button');
        let activity = $('.activities');
        let applyFilter = $('.apply');

        activity.hide();

        button.on('click', function() {
            $(this).addClass('highlight');
            $('.' + this.id).show();
            button.on('click', function() {
                $(this).removeClass('highlight');
                $('.' + this.id).hide();
                filterSelected();
            })
        });
    }
    filterSelected();



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
