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

});
