$(document).ready(function() {

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
            $(images).css("display", "none");
            $(images[0]).css("display", "block");

            let nextButton = $(".next");
            let prevButton = $(".prev");
            let index = 1;

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


    function applyFilters() {

        let button = $(".activity-btn"); // filter buttons
        console.log(button);
        let applyButton = $(".apply-filters"); // apply all filters button
        console.log(applyButton);

        button.on('click', function() {
            $(this).toggleClass('highlight'); //switch highlight class on and off clicked button
            console.log(this);
            let icons = Array.from($(".highlight").children("i")); // all buttons highlighted, get <i> class
            console.log(icons);
            let classes = $(".highlight").attr("id");
            console.log(classes);
            let classes_arr = classes.split(" ");
            console.log(classes_arr);

            var books = Array.from($(".highlight").attr('id').split(' '));
            console.log(books);

            for (var i = 0; i < books.length; i++) {
                console.log(books);
            }

        });

    }
    applyFilters();

})