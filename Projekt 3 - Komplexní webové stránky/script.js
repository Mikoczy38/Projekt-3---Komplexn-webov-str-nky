// 1. PO NAJETÍ MYŠI SE OBRÁZEK ZVĚTŠÍ A PO ODJETÍ ZMENŠÍ

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");

image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(1.1)";
});
image1.addEventListener("mouseleave", () => {
  image1.style.transform = "scale(1)";
});

image2.addEventListener("mouseenter", () => {
  image2.style.transform = "scale(1.1)";
});
image2.addEventListener("mouseleave", () => {
  image2.style.transform = "scale(1)";
});

image3.addEventListener("mouseenter", () => {
  image3.style.transform = "scale(1.1)";
});
image3.addEventListener("mouseleave", () => {
  image3.style.transform = "scale(1)";
});

// 2. SVĚTLÝ A TMAVÝ MÓD

const body = document.querySelector("body");
const navigation = document.querySelector("nav");
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
const heading = document.querySelector("h1");

btnDark.addEventListener("click", () => {
  body.style.backgroundColor = "brown";
  body.style.color = "white";
  navigation.style.backgroundColor = "brown";
  heading.style.color = "brown";
});
btnLight.addEventListener("click", () => {
  body.style.backgroundColor = "rgb(255, 179, 0)";
  body.style.color = "brown";
  navigation.style.backgroundColor = "rgb(255, 179, 0)";
  heading.style.color = "rgb(255, 179, 0)";
});

// 3. SCROLL ARROW

const arrow = document.querySelector(".scroll-arrow");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arrow.style.display = "block";
  }
});

// 4. KONTROLA HESLA VE FORMULÁŘI

const form = document.getElementById(".form");
const password = document.querySelector(".password");
const resultText = document.querySelector(".span-text");
const regular = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

password.addEventListener("input", () => {
  const passwordValue = password.value;
  console.log(passwordValue);

  if (passwordValue.match(regular)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    resultText.textContent = "Váše heslo je správné";
    resultText.style.color = "#00ff00";
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Váše heslo je nesprávné";
    resultText.style.color = "#ff0000";
  }
  if (passwordValue === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "";
  }
});
