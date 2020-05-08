window.onload = function () {
    var draggable = document.getElementById("draggable");
    var dropzones = document.getElementsByClassName("dropzone");

    draggable.addEventListener("dragstart", function() {
        for (let i = 0; i < dropzones.length; i++) {
            dropzones[i].classList.add("active");
        }
    });

    draggable.addEventListener("dragend", function () {
        for (let i = 0; i < dropzones.length; i++) {
            dropzones[i].classList.remove("active");
            dropzones[i].classList.remove("over");
        }
    });

    draggable.addEventListener("drag", function () {
        // do something??
    });

    for (let i = 0; i < dropzones.length; i++) {
        dropzones[i].addEventListener("dragenter", function() {
            dropzones[i].classList.add("over");
        });

        dropzones[i].addEventListener("dragleave", function () {
            dropzones[i].classList.remove("over");
        });

        dropzones[i].addEventListener("dragover", function (evt) {
            evt.preventDefault();
        });

        dropzones[i].addEventListener("drop", function (evt) {
            evt.preventDefault();

            if (evt.target != draggable.parentNode && evt.target != draggable) {
                draggable.parentNode.removeChild(draggable);
                evt.target.appendChild(draggable);
            }
        });
    }
};