const init = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let movie = e.target.children[1]
        // event 'targets' the form target.children => children of the form
       

    fetch("http://localhost:3000/movies")
    .then((resp) => {
        return resp.json();
    })
    .then((data)=>{
        const title = document.querySelector("section#movieDetails h4");
        const desc = document.querySelector("section#movieDetails p");
        
    })
    
})
}

document.addEventListener('DOMContentLoaded', init);
