const inputs = document.querySelectorAll("input");

function Error(e) {
    let name = e.target.getAttribute("name");

    let iconError = document.createElement("span");
    iconError.setAttribute("data-id", name);
    iconError.innerHTML = "<img src='images/icon-error.svg' alt='' aria-hidden='true'>";
}