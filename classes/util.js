// TODO
function loadImage(url, angles, steps, offsetX) {
    imageCount++;
    let i = new Image();
    i.onload = function () {
        imageCount--;
        i.offsetX = offsetX ? ((i.height / angles) >> 2) : 0;
    }
    i.src = url;
    if (typeof angles != "undefined" && typeof steps != "undefined") {
        i.angles = angles;
        i.steps = steps;
    }
    return i;
}

// TODO
function load(img, callback) {
    if (img.complete) callback();
    else img.addEventListener('load', callback, false);
}