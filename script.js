function menu() {
    const x = document.getElementById("nav-bar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

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

function magnify(img, zoom) {
    var img, glass, w, h, bw;

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize =
        img.width * zoom + "px " + img.height * zoom + "px";
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
        glass.style.left = x - w + "px";
        glass.style.top = y - h + "px";
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

function zoomOut(element) {
    const zoom = element.parentElement.parentElement.querySelector(
        ".img-magnifier-glass"
    );
    if (zoom) {
        zoom.parentNode.removeChild(zoom);
    }
}

function glassSwitch(element) {
    const toggle = element.parentElement.querySelector(".toggle");
    const image =
        element.parentElement.parentElement.querySelector(".item-image");
    if (toggle.checked) {
        return zoomOut(element);
    } else {
        return magnify(image, 3);
    }
}
