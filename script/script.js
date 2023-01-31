const inputs = document.querySelectorAll("input");

function returnErrorMessage(e) {
    let name = e.target.getAttribute("name");

    let errorStatus = document.createElement("span");
    errorStatus.classList.add("flex", "flex-row", "gap-x-4");

    e.target.after(errorStatus);

    let errorMessage = document.createElement("span");
    errorMessage.setAttribute("data-id", name);
    errorMessage.classList.add('text-red', "text-[0.7rem]");

    let errorIcon = document.createElement("span");
    errorIcon.setAttribute("data-id", name);
    errorIcon.innerHTML = "<img src='./images/icon-error.svg' alt='' aria-hidden='true'>";

    if (e.target.value === "") {
        errorMessage.innerText = `${e.target.getAttribute("placeholder")} cannot be empty.`;
    } else {
        errorMessage.innerText = `Looks like this is not an ${e.target.getAttribute("placeholder")}.`;
    }

    errorStatus.appendChild(errorIcon);
    errorStatus.appendChild(errorMessage);
};

inputs.forEach(input => {
    input.addEventListener("blur", () => {checkValidity()});
    input.addEventListener("invalid", returnErrorMessage)
})