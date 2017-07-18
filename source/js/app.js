(function() {
    'use strict';
    $(document).ready(function() {
        var $grid = $('.grid').imagesLoaded(function() {
            // init Masonry after all images have loaded
            $grid.masonry({
            	itemSelector: '.grid__item', // use a separate class for itemSelector, other than .col-
            	columnWidth: '.grid-sizer',
            	percentPosition: true
            });
        });
    });
})();

$(document).ready(function() {
	svg4everybody();
});