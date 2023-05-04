const body = document.getElementById("body_id");
// prevent dragging stuff
body.addEventListener("dragstart", (event) => {
    event = event.preventDefault();
});

let passportImg = document.getElementById("passportImg");
let browsePassportButton = document.getElementById("browsePassport");

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
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
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
    }
});
