const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
function menuToggle() {
    document.querySelector('.nav').classList.toggle('open-nav');
    navToggle.classList.toggle('open-toggle');
}
navToggle.addEventListener('click', menuToggle);
navLinks.forEach( link => link.addEventListener('click', menuToggle));

function imageSwitchLeft(element) {
    const item = element.parentElement.parentElement;
    const image = item.querySelector("img");
    const url = image.getAttribute("src");
    const arr = url.split("").reverse();
    const pictureNumber = Number(arr[4]);
    arr[4] = (pictureNumber - 1).toString();
    newUrl = arr.slice().reverse().join("");
    if (Number(arr[4]) < 1) {
        arr[4] = "6";
        newUrl = arr.slice().reverse().join("");
        image.setAttribute("src", newUrl);
    } else {
        image.setAttribute("src", newUrl);
    }
}

function imageSwitchRight(element) {
    const item = element.parentElement.parentElement;
    const image = item.querySelector("img");
    const url = image.getAttribute("src");
    const arr = url.split("").reverse();
    const pictureNumber = Number(arr[4]);
    arr[4] = (pictureNumber + 1).toString();
    newUrl = arr.slice().reverse().join("");
    if (Number(arr[4]) > 6) {
        arr[4] = "1";
        newUrl = arr.slice().reverse().join("");
        image.setAttribute("src", newUrl);
    } else {
        image.setAttribute("src", newUrl);
    }
}

document.getElementById("year").innerHTML = new Date().getFullYear();

function magnifyOn(img) {
    var img, glass, w, h, bw, zoom;

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize =
        img.naturalWidth + "px " + img.naturalHeight + "px";
    zoom = img.naturalHeight / img.height;
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos, x, y;
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /* Prevent the magnifier glass from being positioned outside the image: */
        if (x > img.width - w / zoom) {
            x = img.width - w / zoom;
        }
        if (x < w / zoom) {
            x = w / zoom;
        }
        if (y > img.height - h / zoom) {
            y = img.height - h / zoom;
        }
        if (y < h / zoom) {
            y = h / zoom;
        }
        /* Set the position of the magnifier glass: */
        const distanceFromContainer = img.parentElement.getBoundingClientRect().top - img.getBoundingClientRect().top;
        glass.style.left = x - w + "px";
        glass.style.top = y - distanceFromContainer - h + "px";
        /* Display what the magnifier glass "sees": */
        glass.style.backgroundPosition =
            "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }

    function getCursorPos(e) {
        var a,
            x = 0,
            y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}

function magnifyOff(button) {
    const glass = button.parentElement.parentElement.querySelector(
        ".img-magnifier-glass"
    );
    if (glass) {
        glass.parentNode.removeChild(glass);
    }
}

function magnifySwitch(button) {
    const toggle = button.parentElement.querySelector(".toggle");
    const image =
        button.parentElement.parentElement.querySelector(".item-image");
    if (toggle.checked) {
        magnifyOff(button);
    } else {
        magnifyOn(image);
    }
}

function arrowMagnifyOff(button) {
    const glass = button.parentElement.parentElement.querySelector(
        ".img-magnifier-glass"
    );
    const toggle = button.parentElement.querySelector(".toggle");
    if (glass) {
        glass.parentNode.removeChild(glass);
        toggle.click();
    }
}