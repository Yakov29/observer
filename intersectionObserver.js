document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img[data-src]');
    const loadImagesButton = document.getElementById('loadImagesButton');

    let observer;

    function loadImage(entry) {
        const target = entry.target;
        target.src = target.dataset.src;
        observer.unobserve(target);
    }

    function createObserver() {
        observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    loadImage(entry);
                }
            });
        });
    }

    function observeImages() {
        images.forEach(function (image) {
            observer.observe(image);
        });
    }

    function loadImagesOnClick() {
        loadImagesButton.addEventListener('click', function () {
            observeImages();
            loadImagesButton.disabled = true;
        });
    }

    // Initialize
    createObserver();
    loadImagesOnClick();
});
