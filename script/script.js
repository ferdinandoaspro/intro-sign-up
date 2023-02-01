const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

function returnErrorMessage(e) {
    let name = e.target.getAttribute("name");

    let errorStatus = document.createElement("span");
    errorStatus.classList.add("flex", "flex-row", "gap-x-1", "justify-end");
    e.target.after(errorStatus);

    let errorMessage = document.createElement("span");
    errorMessage.setAttribute("data-id", name);
    errorMessage.classList.add('text-red', "text-[0.7rem]");
    errorStatus.appendChild(errorMessage);
    if (e.target.value === "" || e.target.value === null) {
        errorMessage.innerText = `${e.target.getAttribute("placeholder")} cannot be empty.`;
        
    } else {
        if (e.target.getAttribute("name") === "email") {
            errorMessage.innerText = `Looks like this is not an ${e.target.getAttribute("placeholder")}.`;
        } else {
            errorMessage.innerText = `The ${e.target.getAttribute("placeholder")} is too weak.`;
        }
        
    };

    e.target.classList.add("invalid:bg-error", "invalid:bg-no-repeat", "invalid:bg-[center_right_1rem]",
                            "invalid:border-red");
    
};

function removeErrorMessage(e) {
    
    let errors = document.querySelectorAll(`[data-id="${e.target.getAttribute("name")}"]`);

    errors.forEach(error => {
        error.remove();
    })

    e.target.classList.remove("invalid:bg-error", "invalid:bg-no-repeat", "invalid:bg-[center_right_1rem]",
    "invalid:border-red")
}

inputs.forEach(input => {
    input.addEventListener("blur", () => {input.checkValidity()});
    input.addEventListener("invalid", returnErrorMessage);
    input.addEventListener("focus", removeErrorMessage)
})