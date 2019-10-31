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

    function slideshow() {

        let images = Array.from($(".modal-image > img"));
        let currentImages = this.images;
        let nextButton = $(".next");
        let prevButton = $(".prev");
        let index = 1;

        $(currentImages[0]).css("display", "block");

        $(nextButton).on('click', function() {
            for (i = 0; i < currentImages.length; i++) {
                $(images[i]).css("display", "none");
            }
            index++;
            if (index > currentImages.length - 1) {
                $(currentImages[currentImages.length - 1]).css("display", "block");
                index = 0;
                return false;
            }
            $(currentImages[index - 1]).css("display", "block");
        })

        $(prevButton).on('click', function() {
            for (i = 0; i < currentImages.length; i++) {
                $(images[i]).css("display", "none");
            }
            index--;
            if (index < 1) {
                $(currentImages[currentImages.length + 1]).css("display", "block");
                index = currentImages.length
            }
            $(currentImages[index - 1]).css("display", "block");
        })
    }
    slideshow();

});
