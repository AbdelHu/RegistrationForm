
const body = document.getElementById("body_id");

setInterval(updateHelloText, 50);
function updateHelloText() {
    const helloMsg = document.getElementById("helloMsg");
    const nameInput = document.getElementById("fullNameInput");

    helloMsg.style.color = "rgb(0, 0, 0)";
    helloMsg.style.textDecoration = "underline 1px currentColor"

    document.cookie = "name=" + nameInput.value + ";" + "SameSite=none; Secure;";
    if (document.cookie && getCookie("name")) {
        if (!containsSpecialChars(nameInput.value) && nameInput.value) {
            helloMsg.textContent = "Hello, " + getCookie("name") + ".";
            helloMsg.style.color = "rgb(0, 0, 0)";
        } else {
            helloMsg.textContent = "You mustn't add any special characters in your name!";
            helloMsg.style.color = "rgb(255, 20, 20)";
        }
    } else {
        if (!containsSpecialChars(nameInput.value) && nameInput.value) {
            helloMsg.textContent = "Hello, " + nameInput.value + ".";
        } else if (!nameInput.value) {
            helloMsg.textContent = "Hello, user.";
            helloMsg.style.color = "rgb(0, 0, 0)";
        } else {
            helloMsg.textContent = "You mustn't add any special characters in your name!";
            helloMsg.style.color = "rgb(255, 20, 20)";
        }
    }
}

// prevent dragging stuff
body.addEventListener("dragstart", (event) => {
    event = event.preventDefault();
});

// useful for getting any cookie:
function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [n,v] = el.split('=');
      cookie[n.trim()] = v;
    })
    return cookie[name];
}

let passportImg = document.getElementById("passportImg");
let browsePassportButton = document.getElementById("browsePassport");

console.log(passportImg.src)
if (passportImg.src == "http://127.0.0.1:5500/index.html?gender=on") {
    passportImg.style.visibility == "hidden";
}

browsePassportButton.addEventListener("change", function(e) {
    console.log("Image has been selected!");
    passportImg.src = browsePassportButton.value;
    console.log(passportImg.src);
});


// totally not copied :)
document.getElementById('browsePassport').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;
    
    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("passportImg").src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
    
    // Not supported
    else {
        console.log("fallback!");
    }
}

// did the user input special characters?
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

// gets user-inputted first name then stores into a cookie, plus reloads website
function SubmitForm() {
    passportImg.src = "";

    const form = document.getElementById("form");
    form.submit();

    toRemove.textContent = null;
}

function ResetForm() {
    const form = document.getElementById("form");
    form.reset();
    passportImg.src = "";
    location.reload();
    location.href = "#headerSection";
}

passportImg.addEventListener("click", function() {
    if (browsePassportButton && passportImg.src != "c:\\fakepath\\") {
        location.href = passportImg.src;
    } else {
        console.log("E");
    }
});
