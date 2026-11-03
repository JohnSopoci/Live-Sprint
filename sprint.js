function revealImage(cat) {
  let tabby_cat = document.getElementById(`${cat}-image`);
  tabby_cat.style.display = "left";
}
function revealImage(dog) {
  let tabby_dog = document.getElementById(`${dog}-image`);
  tabby_dog.style.display = "center";
}
function revealImage(cow) {
  let tabby_cow = document.getElementById(`${cow}-image`);
  tabby_cow.style.display = "right";
}
