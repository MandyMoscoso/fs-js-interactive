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
    message.textContent = event.target.parentNode.textContent +" deleted!";
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains('checked')){
        message.textContent = event.target.textContent +" watched!"
    } else {
        message.textContent = (event.target.textContent +" added back!")
    }
    revealMessage();
}

const revealMessage = () =>{
    message.classList.remove('hide');
    const callback = () =>{
        message.classList.add('hide');
    }
    setTimeout(callback,1000);
}
document.querySelector("form").addEventListener("submit",addMovie)