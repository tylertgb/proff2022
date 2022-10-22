var navmenus = document.querySelector(".navmenus"),
  createBtn = navmenus.querySelector("#createBtn"),
  closeBtn = navmenus.querySelectorAll("#close");

//**Showing the Pop up box on click */
createBtn.addEventListener("click", () =>{
  navmenus.classList.add("show");
});

/**Closing the Pop up box the class 'remove' */
closeBtn.forEach(cBtn => {
  cBtn.addEventListener("click", () =>{
    navmenus.classList.remove("show");
  });
});

/*Scroll top bar */
// Get the button:
let mybutton = document.getElementById("topscroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}