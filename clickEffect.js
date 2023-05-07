// variable declarations
let mousePos;
let el;
let isClick = false;
let timeDigit = 0;

// updates mouse X and Y positions
window.addEventListener("mousemove", function OnMouseMove(event) {
    mousePos = { x: event.clientX, y: event.clientY };
});

// when user clicks, add create a div with the effect styles
window.addEventListener("mousedown", (event) => {
    if (mousePos) {
        if (timeDigit == 0) {
            DeleteClickEffectsTimer(80);
        }

        el = document.createElement("div");

        el.style.position = "fixed";
        el.style.left = mousePos.x - 7 + 'px';
        el.style.top = mousePos.y - 7 + 'px';
    
        el.className = "ClickEffectClass";
    
        document.body.appendChild(el);
        el.addEventListener("drag", (ev) => {
            ev.resetDefault();
        })
    
        setInterval(DeleteUnwantedClickEffects(5), 1000);
    }
});

// delete unwanted (leftover) div's
function DeleteUnwantedClickEffects(leftover) {
    let selectClass = document.getElementsByClassName("ClickEffectClass");
    for (i = 0; i < selectClass.length; i++) {
        if (i != 0) {
            if (selectClass.length > leftover) {
                selectClass[i].remove();
            }
        }
    }
}

function DeleteAllClickEffects() {
    let selectClass = document.getElementsByClassName("ClickEffectClass");
    for (i = -1; i < selectClass.length; i++) {
        if (selectClass.length > 0) {
            if (i = -1) {
                selectClass[0].remove();
            } else {
                selectClass[i].remove();
            }
        }
    }
}

// a little while after clicking, delete all the click effects for performance
function DeleteClickEffectsTimer(interval) {
    timeDigit = 0;
    // keep increasing a digit. if it reaches a max value, delete all effects.
    let timeInterval = setInterval(() => {
        if (timeDigit < 20) {
            timeDigit++;
        } if (timeDigit >= 20) {
            timeDigit = 0;
            if (timeDigit == 0) {
                clearInterval(timeInterval);
                DeleteAllClickEffects();
            }
        }
        window.onclick = (() => {
            timeDigit = 0;
        });
    }, interval);
}