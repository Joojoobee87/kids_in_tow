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
            let selected = $(".highlight") // all buttons highlighted, get <i> class
            console.log(selected);
            let buttonId = $(selected).attr("id");
            console.log(buttonId);
            let filters = []

            $('.highlight').each(function() {
                let highlightedIds = $(this).attr('id');
                filters.push(highlightedIds);
                console.log(filters);

                for (var i = 0; i < filters.length; i++) {
                    console.log(filters[i]);
                    if ($(".activity-section").hasClass(filters[i])) {
                        console.log(filters[i]);
                        $(".activity-section").css("display", "none");
                    }
                }
            });
        });
    }
    applyFilters();

})