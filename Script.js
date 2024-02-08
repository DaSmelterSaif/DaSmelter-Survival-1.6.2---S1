const navbarElements = document.querySelectorAll(".jsLi");

console.log(navbarElements);

let hambHidden = true;

function hambShow() {
  if(hambHidden == true) {
    for(let i = 0; i < navbarElements.length; ++i) {
      navbarElements[i].style.display = "block";
    }
    hambHidden = false;
  } else {
    for(let i = 0; i < navbarElements.length; ++i) {
      navbarElements[i].style.display = "none";
    }
    hambHidden = true;
  }
}

// window.addEventListener("resize", () => {
//   if(screen.width >= 1200) {
//     for(let i = 0; i < navbarElements.length; ++i) {
//       navbarElements[i].style.display = "block";
//     }
//   } else {
//     for(let i = 0; i < navbarElements.length; ++i) {
//       navbarElements[i].style.display = "none";
//     }
//   }
// })