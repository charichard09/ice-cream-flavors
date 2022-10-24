function handleForm(event) {
  event.preventDefault();
  // get array of all checked inputs and assign to variable
  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
  // convert userSelections from Nodelist object to and array with Array.from(array)
  const userSelectionsArray = Array.from(userSelections);

  // create results heading
  const resultHeading = document.createElement("h2");
  resultHeading.append("You use the following methods of transportation to travel to work or school:");
  document.body.append(resultHeading);

  // loop through userSelectionArray. For each element, create a paragraph element, append element.value 
  // inside paragraph object, then append paragraph object to body object 
  userSelectionsArray.forEach(function (element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  })
}

window.addEventListener("load", function() {
  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
});