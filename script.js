document.addEventListener("DOMContentLoaded", () => {
    const popUp = document.querySelector("#popup");
    const closeButton = popUp.querySelector(".close-btn");
    const okayButton = popUp.querySelector(".okay-btn");
    const successButton = document.querySelector(".success");
    const errorButton = document.querySelector(".error");
    const popUpTitle = popUp.querySelector("h2");
    const popUpMessage = popUp.querySelector("p");
    const popUpImage = popUp.querySelector(".pop-up-image");

    // Function to show the PopUp
    function showPopUp(type, message, imageFile) {
        popUp.style.display = "flex";
        popUp.classList.remove("pop-out");
        popUp.classList.add("pop-in");

        popUpTitle.textContent = type === "error" ? "Error" : "Success";
        popUpMessage.textContent = message;
        popUpImage.src = imageFile;
    }

    // Event Listeners for buttons
    successButton.addEventListener("click", () => {
        showPopUp("success", "Your account has been successfully created!", "check.gif");
    });
    errorButton.addEventListener("click", () => {
        showPopUp("error", "An error occurred while creating your account!", "error.gif");
    });

    // Close PopUp Logic
    [closeButton, okayButton].forEach((button) => {
        button.addEventListener("click", () => {
            popUp.classList.remove("pop-in");
            popUp.classList.add("pop-out");
            popUp.addEventListener(
                "animationend",
                () => {
                    if (popUp.classList.contains("pop-out")) {
                        popUp.style.display = "none";
                    }
                },
                {once: true}
            );
        });
    });
});