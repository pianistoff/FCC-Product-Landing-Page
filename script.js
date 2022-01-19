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
    const image = item.querySelector('img');
    const url = image.getAttribute('src');
    const arr = url.split('').reverse();
    const pictureNumber = Number(arr[4]);
    arr[4] = (pictureNumber - 1).toString();
    newUrl = arr.slice().reverse().join('');
    if (Number(arr[4]) < 1) {
        arr[4] = '6';
        newUrl = arr.slice().reverse().join('');
        image.setAttribute('src', newUrl);
    } else {
        image.setAttribute('src', newUrl);
    }
}

function imageSwitchRight(element) {
    const item = element.parentElement.parentElement;
    const image = item.querySelector('img');
    const url = image.getAttribute('src');
    const arr = url.split('').reverse();
    const pictureNumber = Number(arr[4]);
    arr[4] = (pictureNumber + 1).toString();
    newUrl = arr.slice().reverse().join('');
    if (Number(arr[4]) > 6) {
        arr[4] = '1';
        newUrl = arr.slice().reverse().join('');
        image.setAttribute('src', newUrl);
    } else {
        image.setAttribute('src', newUrl);
    }
}

document.getElementById("year").innerHTML = new Date().getFullYear();