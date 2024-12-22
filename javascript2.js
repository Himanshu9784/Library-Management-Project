const book = document.querySelector('.book');
let isOpen = false;

setInterval(() => {
    isOpen = !isOpen; // Toggle the state
    if (isOpen) {
        book.classList.add('open');
    } else {
        book.classList.remove('open');
    }
}, 3000); // Change the interval time as needed (3000ms = 3 seconds)
