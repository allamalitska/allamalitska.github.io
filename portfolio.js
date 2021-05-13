// Home page

let footerMessage = "This page was built using: ";
let languagesArray = ["HTML", "CSS", "JavaScript"];

// footerMessage += languagesArray.join(", ") + "!";
// document.getElementById("footer").textContent = footerMessage;

for (i = 0; i <= languagesArray.length - 1; i++) {
  if (i === languagesArray.length - 1) {
    footerMessage = `${footerMessage} "${languagesArray[i]}"!`;
  } else {
    footerMessage = `${footerMessage} "${languagesArray[i]}",`;
  }
}
document.getElementById("footer").textContent = footerMessage;

const GITHUB_URL = "https://api.github.com/users/";
let GITHUB_USERNAME = "allamalitska";
let githubInfo = GITHUB_URL + GITHUB_USERNAME;

fetch(githubInfo)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("portfolio-img").src = data.avatar_url;
    document.getElementById("title").textContent = data.login;
  });

// About page

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const numTel = document.getElementById("numTel");
const comment = document.getElementById("comment");
const submitButton = document.getElementById("submitButton");
console.log(firstName);

console.log(submitButton.disabled);

const onInput = () => {
  if (firstName.value !== "" && email.value !== "" && comment.value !== "") {
    submitButton.disabled = false;
  }
};

email.addEventListener("input", onInput);
comment.addEventListener("input", onInput);
firstName.addEventListener("input", onInput);

const submitForm = () => {
  console.log(submitButton.disabled);
};
submitButton.addEventListener("click", submitForm);

// Contact page

const city = document.getElementById("city");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const cities = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83703.44375286858!2d28.03033766458611!3d49.03469225742388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4732a29eea829a9d%3A0xcfa8490cd0cf2c20!2sZhmerynka%2C%20Vinnytsia%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2sil!4v1620739293869!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166732.2049679313!2d28.329551467533015!3d49.23487349866942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b65195a6489%3A0xcbd4e159eedd74fe!2sVinnytsia%2C%20Vinnytsia%20Oblast%2C%20Ukraine%2C%2021000!5e0!3m2!1sen!2sil!4v1620739377544!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95470.44895196958!2d41.55906724559123!3d41.602746711859474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406786304ea2d221%3A0x7a3053a9e12ea967!2sBatumi%2C%20Georgia!5e0!3m",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27064.518166163863!2d34.73040795648657!3d32.01335913662972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b312412bb38b%3A0xb2961a65cc489c32!2sBat%20Yam!5e0!3m2!1sen!2sil!4v1620739794918!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.74093226471!2d34.72720602850372!3d32.088057674407196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1620739833866!5m2!1sen!2sil",
];

let i = 0;

const moveForwards = () => {
  previousButton.disabled = false;
  if (i < cities.length - 1) {
    i++;
    city.src = cities[i];
  }
  if (i === cities.length - 1) {
    nextButton.disabled = true;
  }
};
const moveBackwards = () => {
  nextButton.disabled = false;
  if (i > 0) {
    i--;
    city.src = cities[i];
  }
  if (i === 0) {
    previousButton.disabled = true;
  }
};

previousButton.addEventListener("click", moveBackwards);
nextButton.addEventListener("click", moveForwards);
