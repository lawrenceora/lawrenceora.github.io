var fullPage = new fullpage('#fullpage', {
    fitToSection: false,
    autoScrolling: true,
    navigation: false,
    verticalCentered: false,
    normalScrollElements: '#horizontal-scroll',
    anchors: ['Home', 'About', 'Work', 'Contact'],
    navigationTooltips: ['Home', 'About', 'Work', 'Contact']
});

$(document).ready(function(){
    $('#horizontal-scroll').on("swipe", function(){
        alert("Swipe Detected");
    });
});