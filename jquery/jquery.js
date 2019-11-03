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

    function modalSlideshow() {
        $('.modal').on('shown.bs.modal', function(event) {
            var modal = $(this)
            console.log(modal);
            let images = Array.from(modal.find('.modal-image').children("img"));
            console.log(images);
            let nextButton = $(".next");
            let prevButton = $(".prev");
            let index = 1;

            $(images).css("display", "none");
            $(images[0]).css("display", "block");
            console.log(images[0]);

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
        })
    }
    modalSlideshow();
})