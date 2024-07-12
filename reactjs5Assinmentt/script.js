const noteContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem("notes") || "";
}

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.contentEditable = "true";
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

noteContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.classList.contains("input-box")) {
        document.querySelectorAll(".input-box").forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter" && document.activeElement.contentEditable === "true") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

showNotes();
