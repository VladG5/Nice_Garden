// Slider
let conts_images = document.querySelectorAll(".main_image");
let number_cont = true;
let number_image = 1;

conts_images[Number(number_cont)].style.opacity = 0;
conts_images[Number(!number_cont)].style.backgroundImage =
  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('content/Images/01-" +
  number_image +
  ".jpg')";

setInterval(switchCont, 3000);

function switchCont() {
  number_image = number_image == 3 ? 1 : number_image + 1;
  conts_images[Number(number_cont)].style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('content/Images/01-" +
    number_image +
    ".jpg')";
  conts_images[Number(number_cont)].style.opacity = 1;
  conts_images[Number(!number_cont)].style.opacity = 0;
  number_cont = !number_cont;
}

// Form
let button_form = document.getElementsByClassName("button_form");
let userName = document.getElementById("name");
let userNumber = document.getElementById("number");
let userReview = document.getElementById("review");

button_form[0].addEventListener("click", () => {
  alert(`${userName.value}, здравствуйте! Мы приняли ваш запрос.
Ожидайте ответа в смс на номер ${userNumber.value} в течение суток.`);
});
//

// Burger
let counter = 0;
let navigation = document.getElementsByClassName("navigation")[0];
let mobile_menu = document.getElementsByClassName("section__mobile__menu")[0];
let a = document.getElementsByTagName("header")[0].clientHeight;

navigation.addEventListener("click", () => {
  a = document.getElementsByTagName("header")[0].clientHeight;
  mobile_menu.style.height = a * 0.8 + "px";
  counter++;

  if (counter % 2 == 1) {
    navigation.addEventListener("click", () => {
      mobile_menu.style.height = "0";
    });
  } else {
    counter = 0;
    navigation.addEventListener("click", () => {
      mobile_menu.style.height = a * 0.8 + "px";
    });
  }
});
//

// Navigation
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let link_aboutus = document.getElementsByClassName("link_aboutus");
let link_catalog = document.getElementsByClassName("link_catalog");
let link_contacts = document.getElementsByClassName("link_contacts");

for (x of link_aboutus) {
  x.addEventListener("click", () => {
    section2.scrollIntoView({ block: "center", behavior: "smooth" });
  });
}

for (x of link_catalog) {
  x.addEventListener("click", () => {
    section3.scrollIntoView({ block: "center", behavior: "smooth" });
  });
}

for (x of link_contacts) {
  x.addEventListener("click", () => {
    section4.scrollIntoView({ block: "center", behavior: "smooth" });
  });
}
