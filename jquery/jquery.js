$(document).ready(function() {

    filterActivity();

    function filterActivity() {

        let button = $('.btn');
        let activity = $('.activity');
        let applyFilter = $('.apply');

        activity.hide();

        button.on('click', function() {
            $(this).toggleClass('red');
            $('.' + this.id).toggle();
        });

    }

});
