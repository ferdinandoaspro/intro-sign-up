const inputs = document.querySelectorAll("input");

function returnErrorMessage(e) {
    let name = e.target.getAttribute("name");

    let errorStatus = document.createElement("span");
    errorStatus.classList.add("flex", "flex-row", "gap-x-1");
    e.target.after(errorStatus);

    let errorMessage = document.createElement("span");
    errorMessage.setAttribute("data-id", name);
    errorMessage.classList.add('text-red', "text-[0.7rem]");

    let errorIcon = document.createElement("span");
    errorIcon.setAttribute("data-id", name);
    errorIcon.innerHTML = "<img class='w-[65%]' src='./images/icon-error.svg' alt='' aria-hidden='true'>";

    if (e.target.value === "" || e.target.value === null) {
        errorMessage.innerText = `${e.target.getAttribute("placeholder")} cannot be empty.`;
    } else {
        if (e.target.getAttribute("name") === "email") {
            errorMessage.innerText = `Looks like this is not an ${e.target.getAttribute("placeholder")}.`;
        }
        
    }

    errorStatus.appendChild(errorIcon);
    errorStatus.appendChild(errorMessage);
};

inputs.forEach(input => {
    input.addEventListener("blur", () => {checkValidity()});
    input.addEventListener("invalid", returnErrorMessage)
})