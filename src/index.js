const init = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let movieID = e.target.children[1]
        if(movieID.value === ""){
            return
        }else{
        // event 'targets' the form target.children => children of the form
       

    fetch(`http://localhost:3000/movies/${movieID.value}`)
    .then((resp) => {   
        //added if not in data base returns not found alert
        if(resp.status == 404){
            alert("Not a valid ID");
            return;
        }else if (resp.ok){ //made display of resp conditional on success
        return  resp.json();
        }else{ // added a catch for if the server doesn't fetch properly
            alert("Error");
            return;
        }
    
    })
    
    .then((data)=>{
        
        const title = document.querySelector("section#movieDetails h4");
        const desc = document.querySelector("section#movieDetails p");
        title.innerText = data.title;
        desc.innerText = data.summary;
        
        form.reset(); //add a form reset in proper position to not interfere with fetch
       
    })
    
}})

}

document.addEventListener('DOMContentLoaded', init);
