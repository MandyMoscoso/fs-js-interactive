console.log("Hello world")
let message = document.querySelector("#message");


let inputField = document.querySelector("input");

// console.log (inputField.value)

function addMovie(event) {
    event.preventDefault();
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent=inputField.value;
    movieTitle.addEventListener("click",crossOffMovie);
    // console.log(movieTitle)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click",deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector("ul").appendChild(movie);
    inputField.value="";
}

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!"
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains('checked')){
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}


document.querySelector("form").addEventListener("submit",addMovie)