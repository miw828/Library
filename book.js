let addButton = document.getElementById("add");
let editButton = document.getElementById("edit"); // will do this one later
let submitButton = document.getElementById("sub-button");
const book = document.getElementById("book"); 
const pop = document.getElementById("hidden"); 
// add when the button add gets clicked it the pop-up will appear and then the input
// will be added and after submit is clicked a new book will be added

function submitBook(){
    const titleInput = document.getElementById("book-title");
    const authorName = document.getElementById("author");
    


    const newBook = document.createElement("div");  // this will create the new grid 
    newBook.classList.add("book"); // this adds the class of the item 
    newBook.innerHTML = `<h3>Title: ${titleInput.value}</h3><h3>Author: ${authorName.value}</h3>`;

    document.querySelector(".grid-container").appendChild(newBook); 


}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();  // stop the form from refreshing the page
    submitBook();
    pop.style.display = "none";
    document.getElementById("book-title").value = ""; 
    document.getElementById("author").value = "";
});
 
 

// Pop-up should be hidden until someone clicks add button 

addButton.addEventListener("click", () => {
  pop.style.display = "block"; // show the form

});
