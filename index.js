const desktopBtn = document.getElementsByClassName("btn")[0];
const mobileBtn = document.getElementsByClassName("btn-mobile")[0];
const shareOptions = document.querySelector(".toggle-share");
const shareOptionsMobile = document.querySelector(".toggle-share-mobile");
const profile = document.querySelector(".profile");
let isShareOptionsVisible = false;

//adding a resize event listener to the window object to reload the page when the width
//is less than 600px
window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    location.reload();
  }
});

desktopBtn.addEventListener("click", () => {
  isShareOptionsVisible === false
    ? (isShareOptionsVisible = true)
    : (isShareOptionsVisible = false);

  if (window.innerWidth > 600) {
    if (isShareOptionsVisible === true) {
      shareOptions.style.display = "flex";
    } else {
      shareOptions.style.display = "none";
    }
  } else {
    if (isShareOptionsVisible === true) {
      shareOptions.style.display = "none";
      profile.style.display = "none";
      shareOptionsMobile.style.display = "flex";
    }
  }
});

mobileBtn.addEventListener("click", function () {
  if (window.innerWidth < 600) {
    profile.style.display = "flex";
    shareOptionsMobile.style.display = "none";
  }
});
