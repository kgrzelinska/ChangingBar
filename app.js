// A bar that changes the length and color when you scrolling.
// Wraz ze skrollowaniem strony połowa wielkosci strony zapelnia sie kolorem zielonym,
// po dojsciu do polowy dzieje się sytuacja odwrotna (wypełnienie maleje),
// a kolor zmienia się na czerowny.

let grow = true;
let size = 100;


document.body.style.height = "10000px";
const elementDiv = document.createElement("div");
document.body.appendChild(elementDiv);
elementDiv.style.width = "100%";
elementDiv.style.position = "fixed";
elementDiv.style.top = "0";
elementDiv.style.left = "0";
elementDiv.style.backgroundColor = "green";
elementDiv.style.height = size + "px";


const changeHeigh = function () {
    if (size > window.innerHeight / 2) {
        grow = !grow
        elementDiv.style.background = "red";
    } else if (size <= 0) {
        grow = !grow;
        elementDiv.style.background = "green";
    }

    if (grow) {
        size += 10;
    } else {
        // } else if (size <= window.innerHeight)
        size -= 10;
    }
    elementDiv.style.height = size + "px";
}

window.addEventListener("scroll", changeHeigh);