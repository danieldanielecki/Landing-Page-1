(function ($) {
    var wow = new WOW({
        boxClass: "wow", // Class name that reveals the hidden box when user scrolls.
        animateClass: "animated", // Class name that triggers the CSS animations.
        offset: 0, // Distance between the bottom of browser viewport and the top of hidden box. When the user scrolls and reach this distance the hidden box is revealed.
        mobile: false // Turn off WOW.js on mobile devices.
    });

    wow.init();

})(jQuery);
