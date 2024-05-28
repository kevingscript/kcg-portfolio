function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* function myFunction() {
    var dots = 
    document.getElementById("dots"); 
    var moreText = 
    document.getElementById("more");
    var btnText = 
    document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline"; 
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
} */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

// Open social icons in new tab
// function location.href='https://linkedin.com/in/kevincgarner' {
//     window.open(
//         'https://linkedin.com/in/kevincgarner', '_blank', 'noopener, noreferrer'
//     );
// }