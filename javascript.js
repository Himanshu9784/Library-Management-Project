// const message = "Welcome to the Library";
// const welcomeMessage = document.getElementById("welcomeMessage");

// let index = 0;

// function typeLetter() {
//     if (index < message.length) {
//         welcomeMessage.textContent += message.charAt(index);
//         index++;
//         setTimeout(typeLetter, 100); // Adjust speed here (milliseconds)
//     }
// }

// document.addEventListener("DOMContentLoaded", typeLetter);

const message = "Welcome to the Library";
const welcomeMessage = document.getElementById("welcomeMessage");

let index = 0;
let typing = true;

function typeLetter() {
    welcomeMessage.style.opacity = 1; // Make text visible

    if (typing) {
        if (index < message.length) {
            welcomeMessage.textContent += message.charAt(index);
            index++;
            setTimeout(typeLetter, 100); // Speed of typing
        } else {
            typing = false;
            setTimeout(deleteLetter, 1000); // Pause before deleting
        }
    } else {
        if (index > 0) {
            welcomeMessage.textContent = message.slice(0, index - 1);
            index--;
            setTimeout(typeLetter, 50); // Speed of deleting
        } else {
            typing = true;
            index = 0; // Reset index for the next cycle
            setTimeout(typeLetter, 500); // Pause before typing again
        }
    }
}

// Start the typing effect when the content is loaded
document.addEventListener("DOMContentLoaded", typeLetter);
