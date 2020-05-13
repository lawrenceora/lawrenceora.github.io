var fullPage = new fullpage('#fullpage', {
    fitToSection: false,
    autoScrolling: true,
    navigation: false,
    verticalCentered: false,
    normalScrollElements: '.jobs',
    anchors: ['Home', 'About', 'Work', 'Contact'],
    navigationTooltips: ['Home', 'About', 'Work', 'Contact']
});

$("swipe-fallthrough").on("swipe", function(){
    alert("Swipe Detected");
});