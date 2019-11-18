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
                    console.log(filters);
                    $(activity).each(function (index, value) {
                        let activeClass = $(activity).attr("class").split(' ');
                        console.log(activeClass);
                    }); // get classes of each activity

                });

            });
        });
    }
    applyFilters();

})