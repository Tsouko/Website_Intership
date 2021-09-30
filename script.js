const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

//(Desktop)Let Users Close the Submenu By Clicking Anywhere on the Page
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);




var images = new Array(
  'picture1.jpg',
  'picture2.jpg',
  'picture3.jpg',
 



);

var slider = setInterval(function() {
  document.getElementsByClassName('bg-image')[0].setAttribute('style', 'background-image: url("'+images[0]+'")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);

}, 5000);

var slidertab = setInterval(function() {
  document.getElementsByClassName('bg-image-tab')[0].setAttribute('style', 'background-image: url("'+images[0]+'")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);

}, 10000);


var d = new Date(); page.currentYear = d.getFullYear(); 




time_is_widget.init({Athens_z702:{time_format:"hours:minutes"}});
