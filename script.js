// Clears the grocery list when the eraser icon is clicked
document.querySelector("#eraser").addEventListener("click", () => {
  document.querySelector("#groceryItems").textContent = "";
});

// Adds an item to the grocery list when the "Enter" key is pressed in the input field
document.querySelector("#userInput").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    addItem();
});

// Function to add a new item to the grocery list
addItem = () => {
  // Create a new <h2> element for the item
  const item = document.createElement("h2");

  // Set the text content of the <h2> element to the input value with a bullet point
  item.textContent = "- " + document.querySelector("#userInput").value;

  // Add a click event listener to the <h2> element to toggle line-through decoration
  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";
  });

  // Append the <h2> element to the grocery list
  document.querySelector("#groceryItems").appendChild(item);

  // Reset the input field value to an empty string
  document.querySelector("#userInput").value = "";
};
