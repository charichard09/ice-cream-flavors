//use a JavaScript loop to insert the flavors into the page from an array
window.addEventListener("load", function() {
const favoriteFlavors = ["Strawberry", "Chocolate", "Vanilla", "Orange"];

let flavorList = document.createElement("ul");
flavorList.append("Ice Creams:");
document.body.append(flavorList);

favoriteFlavors.forEach(function(flavor) {
  let flavorLi = document.createElement("li");
  flavorLi.append(flavor);
  flavorList.append(flavorLi);
});
});