$(document).ready(function () {

    function submitThankyou() {
        $(".submit").click(function () {
            $(".contact-container").css("display", "block");
            $(".contact-form").hide();
            $(".contact-thanks").show();
        })
    }
    submitThankyou();

    function dropdownContainers() {
        $(".filters-tab").click(function () {
            $(".tab-container").css("display", "none");
            $(".filters-container").slideToggle();
        })
        $(".about-tab").click(function () {
            $(".tab-container").css("display", "none");
            $(".about-container").slideToggle();
        })
        $(".contact-tab").click(function () {
            $(".tab-container").css("display", "none");
            $(".contact-container").slideToggle();
            $(".contact-form").show();
            $(".contact-thanks").hide();
        })
    }
    dropdownContainers();

    function modalSlideshow() {
        $('.modal').on('shown.bs.modal', function (event) {
            var modal = $(this)
            console.log(modal);
            let images = Array.from(modal.find('.modal-image').children("img"));
            $(images).css("display", "none");
            $(images[0]).css("display", "block");

            let nextButton = $(".next");
            let prevButton = $(".prev");
            let index = 1;

            $(nextButton).on('click', function () {
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

            $(prevButton).on('click', function () {
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

        button.on('click', function () {
            $(this).toggleClass('highlight') //switch highlight class on and off clicked button
            let selected = $(".highlight") // all buttons highlighted
            let filters = [] //initialise filters variable

            $(selected).each(function () {
                let highlightedIds = $(this).attr('id'); //gets id of highlighted button
                filters.push(highlightedIds);

                let applyButton = $(".apply-filters"); // apply filters button

                $(applyButton).on('click', function () { // on click of apply filters button
                    let activity = $(".activity-section")
                    $(activity).hide();                     // hide all activity sections

                    $.each(filters, function (index, value) { // for each of the filters selected
                        if (activity.className == value) { // if the activity class is == value then show else hide
                            $(activity).show();
                        } else {
                            $(activity).hide();
                        }
                    });

                });

            });
        });
    }
    applyFilters();

})