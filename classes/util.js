function loadImage(url, angles, steps, offsetX) {
    imageCount++;
    let image = new Image();
    image.onload = function () {
        imageCount--;
        // (image.height / angles) >> 2 = (image.height / angles) * (image.height / angles)
        image.offsetX = offsetX ? ((image.height / angles) >> 2) : 0;
    }
    image.src = url;
    if (typeof angles != "undefined" && typeof steps != "undefined") {
        image.angles = angles;
        image.steps = steps;
    }
    return image;
}

// Callled when an ambiente object is instantiated
function load(img, callback) {
    if (img.complete) callback();
    else img.addEventListener('load', callback, false);
}