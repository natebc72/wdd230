const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOpt = {
    threshhold: 0,
    rootMargin: "0px 0px 400px 0px"
};

const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }   else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
}, imgOpt);

images.forEach(image => {
    imgObserver.observe(image);
});