const cannesString =
    '<div class="cannes item">\r\n    <h3>Puiforcat Cannes Five-Piece Place Setting</h3>\r\n    <div class="image-container">\r\n        <img\r\n            class="item-image"\r\n            src="./images/cannes/1.jpg"\r\n            alt=""\r\n        />\r\n    </div>\r\n    <div class="buttons">\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="imageSwitchLeft(this); arrowMagnifyOff(this);"\r\n            ><img\r\n                class="button arrow-left"\r\n                src="./images/buttons/arrow-left.png"\r\n                alt=""\r\n        /></a>\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="imageSwitchRight(this); arrowMagnifyOff(this);"\r\n            ><img\r\n                class="button arrow-right"\r\n                src="./images/buttons/arrow-right.png"\r\n                alt=""\r\n        /></a>\r\n        <input type="checkbox" id="toggle1" class="toggle" />\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="magnifySwitch(this)"\r\n            ><label for="toggle1"\r\n                ><img\r\n                    class="button glass"\r\n                    src="./images/buttons/glass.png"\r\n                    alt="" /></label\r\n        ></a>\r\n    </div>\r\n    <div class="text-block">\r\n        <p class="year">Year: 1928</p>\r\n        <p class="description-text">\r\n            Exquisitely fluted handles and ring detailing\r\n            characterize this signature Puiforcat pattern.\r\n            Renowned for the fine symmetry of its design and the\r\n            solid, perfect balance of its forms, this collection\r\n            was chosen by Jean Puiforcat for his own wedding.\r\n        </p>\r\n        <p class="description-text">\r\n            Sterling silver. Includes dinner fork, dinner knife,\r\n            dessert spoon, salad fork and tea spoon.\r\n        </p>\r\n        <p class="price">$2,875.00</p>\r\n    </div>\r\n</div>';
const cardinalString =
    '<div class="cardinal item">\r\n    <h3>Puiforcat Cardinal Five-Piece Place Setting</h3>\r\n    <div class="image-container">\r\n        <img\r\n            class="item-image"\r\n            src="./images/cardinal/1.jpg"\r\n            alt=" "\r\n        />\r\n    </div>\r\n    <div class="buttons">\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="imageSwitchLeft(this); arrowMagnifyOff(this);"\r\n            ><img\r\n                class="button arrow-left"\r\n                src="./images/buttons/arrow-left.png"\r\n                alt=""\r\n        /></a>\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="imageSwitchRight(this); arrowMagnifyOff(this);"\r\n            ><img\r\n                class="button arrow-right"\r\n                src="./images/buttons/arrow-right.png"\r\n                alt=""\r\n        /></a>\r\n        <input type="checkbox" id="toggle2" class="toggle" />\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="magnifySwitch(this)"\r\n            ><label for="toggle2"\r\n                ><img\r\n                    class="button glass"\r\n                    src="./images/buttons/glass.png"\r\n                    alt="" /></label\r\n        ></a>\r\n    </div>\r\n    <div class="text-block">\r\n        <p class="year">Year: 1925</p>\r\n        <p class="description-text">\r\n            Produced from a 17th-century drawing, this is a\r\n            pattern of simple forms and classic grace. This\r\n            setting\u2019s time-honored roots can be seen in such\r\n            elements as a the reinforced center tine of the fork\r\n            and a knife design that recalls the curve-bladed\r\n            style of old hunting knives.\r\n        </p>\r\n        <p class="description-text">\r\n            Silverplate. Includes dinner fork, dinner knife,\r\n            dessert spoon, salad fork and tea spoon. Also\r\n            available in sterling silver as the Richelieu\r\n            pattern.\r\n        </p>\r\n        <p class="price">$540.00</p>\r\n    </div>\r\n</div>';
const chantacoString =
    '<div class="chantaco item">\r\n    <h3>Puiforcat Chantaco Five-Piece Place Setting</h3>\r\n    <div class="image-container">\r\n        <img\r\n            class="item-image"\r\n            src="./images/chantaco/1.jpg"\r\n            alt=" "\r\n        />\r\n    </div>\r\n    <div class="buttons">\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="imageSwitchLeft(this); arrowMagnifyOff(this);"\r\n            ><img\r\n                class="button arrow-left"\r\n                src="./images/buttons/arrow-left.png"\r\n                alt=""\r\n        /></a>\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="imageSwitchRight(this); arrowMagnifyOff(this);"\r\n            ><img\r\n                class="button arrow-right"\r\n                src="./images/buttons/arrow-right.png"\r\n                alt=""\r\n        /></a>\r\n        <input type="checkbox" id="toggle3" class="toggle" />\r\n        <a\r\n            href="javascript:void(0);"\r\n            onclick="magnifySwitch(this)"\r\n            ><label for="toggle3"\r\n                ><img\r\n                    class="button glass"\r\n                    src="./images/buttons/glass.png"\r\n                    alt="" /></label\r\n        ></a>\r\n    </div>\r\n    <div class="text-block">\r\n        <p class="year">Year: 1924</p>\r\n        <p class="description-text">\r\n            In this classic pattern, the clean, modern shape of\r\n            the utensils is balanced by the fluted handles\u2019\r\n            complex interplay of light and shadow.\r\n        </p>\r\n        <p class="description-text">\r\n            Silverplate. Includes dinner fork, dinner knife,\r\n            dessert spoon, salad fork and tea spoon.\r\n        </p>\r\n        <p class="price">$540.00</p>\r\n    </div>\r\n</div>';
const currentString = cannesString;
const arrowRespRight = '<svg class=\"arrow-resp arrow-resp-right\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 256 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https:\/\/fontawesome.com License - https:\/\/fontawesome.com\/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z\"\/><\/svg>';
const arrowRespLeft = '<svg class=\"arrow-resp arrow-resp-left\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 256 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https:\/\/fontawesome.com License - https:\/\/fontawesome.com\/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z\"\/><\/svg>';
const description = document.querySelector(".description");
const item = document.querySelector(".item");
const cannes = document.querySelector(".cannes");
const cardinal = document.querySelector(".cardinal");
const chantaco = document.querySelector(".chantaco");
function items() {
    if (window.matchMedia("(max-width: 961px)").matches) {
        description.innerHTML = cannesString + cardinalString + chantacoString;
    } else if (window.matchMedia("(min-width: 962px)").matches) {
        description.innerHTML = arrowRespLeft + currentString + arrowRespRight;
    }
};
items();
window.onresize = items;

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
function menuToggle() {
    document.querySelector(".nav").classList.toggle("open-nav");
    navToggle.classList.toggle("open-toggle");
}
navToggle.addEventListener("click", menuToggle);
navLinks.forEach((link) => link.addEventListener("click", menuToggle));

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
    var x, y;
    x = img.width / 2;
    y = img.height / 2;
    const distanceFromContainer =
        img.parentElement.getBoundingClientRect().top -
        img.getBoundingClientRect().top;
    glass.style.left = x - w + "px";
    glass.style.top = y - distanceFromContainer - h + "px";
    glass.style.backgroundPosition =
        "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos;
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
