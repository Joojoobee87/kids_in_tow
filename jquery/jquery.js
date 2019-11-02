$(document).ready(function() {

    let button = $(".filter");
    let boxes = $(".box");


    console.log(button);
    console.log(boxes);

    boxes.hide();

    function filterSelected() {
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

    function slideshow() {

        let images = Array.from($(".modal-image > img"));
        let nextButton = $(".next");
        let prevButton = $(".prev");
        let index = 1;

        $(images[0]).css("display", "block");

        $(nextButton).on('click', function() {
            for (i = 0; i < images.length; i++) {
                $(images[i]).css("display", "none");
            }
            index++;
            console.log(index)
            if (index > images.length - 1) {
                $(images[images.length - 1]).css("display", "block");
                index = 0;
                return false;
            }
            $(images[index - 1]).css("display", "block");
        })

        $(prevButton).on('click', function() {
            for (i = 0; i < images.length; i++) {
                $(images[i]).css("display", "none");
            }
            index--;
            console.log(index);
            if (index < 1) {
                $(images[images.length + 1]).css("display", "block");
                index = images.length
            }
            $(images[index - 1]).css("display", "block");
        })
    }
    slideshow();

    function dropdownContainers() {
        $(".filters-tab").click(function() {
            $(".tab-container").css("display", "none");
            $(".filters-container").slideToggle();
        })
        $(".about-tab").click(function() {
            $(".tab-container").css("display", "none");
            $(".about-container").slideToggle();
        })
        $(".contact-tab").click(function() {
            $(".tab-container").css("display", "none");
            $(".contact-container").slideToggle();
        })
    }
    dropdownContainers();
})