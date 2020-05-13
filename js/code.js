new fullpage('#fullpage', {
    fitToSection: false,
    autoScrolling: true,
    navigation: false,
    verticalCentered: false,
    normalScrollElements: '#horizontal-scroll',
    anchors: ['Home', 'About', 'Work', 'Contact'],
    navigationTooltips: ['Home', 'About', 'Work', 'Contact']
});

// Vanilla JS for overriding scroll for mobile.
document.getElementById("horizontal-scroll").addEventListener('touchstart', handleTouchStart, false);        
document.getElementById("horizontal-scroll").addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    evt.preventDefault();
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    evt.preventDefault();
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) < Math.abs(yDiff)){
        evt.preventDefault();
        if (yDiff > 0) {
            /* up swipe */     
            fullpage_api.moveSectionDown();
        } else { 
            /* down swipe */
            fullpage_api.moveSectionUp();
        }                         
    } // else here, check xDiff for right and left swipes.
                                                
    /* reset values */
    xDown = null;
    yDown = null;                                             
};