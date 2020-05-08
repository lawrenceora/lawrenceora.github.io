document.addEventListener('DOMContentLoaded', function () {
    var frames = document.getElementById('horizontal-scroll');
    frames.addEventListener('click', function (e) {
        if (e.target.classList.contains('job')) {
            e.target.parentNode.scrollLeft = e.target.offsetLeft;
        }
    });
});