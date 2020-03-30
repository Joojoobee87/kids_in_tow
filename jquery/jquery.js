$(document).ready(function () {

    function dropdownContainers() {
        $(".tab").click(function () {
            let currentTabId = $(this).attr("id");
            let container = $(".tab-container");
            $(container).not("." + currentTabId).hide();
            $("." + currentTabId).toggle();
        })
        $(".tab-container i").click(function () {
            let currentContainer = $(this).parent().attr("class").split(' ')[0];
            let container = $(".tab-container");
            $("." + currentContainer).hide();
        })
    }
    dropdownContainers();

    // function to scroll through the carousel of images in the modal
    function modalSlideshow() {
        $('.modal').on('shown.bs.modal', function (event) {
            var modal = $(this)
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
                if (index < 1) {
                    $(images[images.length + 1]).css("display", "block");
                    index = images.length
                }
                $(images[index - 1]).css("display", "block");
            })
        })
    }
    modalSlideshow();

    function selectFilters() {

        let button = $(".activity-btn"); // filter buttons

        button.on('click', function () {
            $(this).toggleClass('highlight') //switch highlight class on and off clicked button
            let selected = $(".highlight") // all buttons highlighted
            let filters = [] //initialise filters variable
            // on click of apply filters button

            $(selected).each(function () {
                let highlightedIds = $(this).attr('id'); //gets id of highlighted button
                filters.push(highlightedIds);
            });

            let applyButton = $(".apply-filters"); // apply filters button
            $(applyButton).on('click', function () {
                //$('html, body').animate({
                //    scrollTop: ($('.activity-section').first().offset().top)
                //}, 800);
                applyFilters(filters);
                $('.activity-section')[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            })

            let clearButton = $(".clear-filters"); // clear filters button
            $(clearButton).on('click', function () {
                clearFilters(filters);
            })
        })
    }

    selectFilters();

    // apply selected filters to show those that match one of the highlighted filters
    function applyFilters(filters) {
        let activity = $(".activity-section")
        for (i = 0; i < filters.length; ++i) { // for each highlighted filter
            for (j = 0; j < activity.length; j++) {
                if ($(activity[j]).hasClass(filters[i])) {
                    // if activity section has a class of one of the highlighted filters
                    $(activity[j]).show(); // show activity
                } else {
                    $(activity[j]).hide(); // else hide activity
                }
            }
        }
    }

    // clear all highlighted filters and show all activities
    function clearFilters(filters) {
        let button = $(".activity-btn"); // filter buttons
        let activity = $(".activity-section")
        filters = [];
        $(button).removeClass("highlight");
        $(activity).show();
    }

    // function to allow users to scroll to the top of page from any position on the page
    function scrollTop() {
        $(".top").on('click', function () {
            $('html, body').animate({
                scrollTop: ($('.nav-section').offset().top)
            }, 1000);
        })
    }
    scrollTop();
});