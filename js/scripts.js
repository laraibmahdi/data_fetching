
const jsonProfiles = "https://randomuser.me/api/?page=3&results=12&seed=abc";




function getProfiles(JSON){
    const profiles = JSON.results.map( person => {
        return person
    });
    return Promise.all(profiles);
};

        
        
               
    
       
    

function generateHTML(data){
    console.log(data);
    const gallery = document.querySelector(".gallery");
    const previousCard = document.querySelector(".card");
    gallery.removeChild(previousCard);
     data.map(person => { 
         gallery.insertAdjacentHTML("beforeend",  
         `<div class="card">
         <div class="card-img-container">
             <img class="card-img" src="${person.picture.large}" alt="profile picture">
         </div>
         <div class="card-info-container">
             <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
             <p class="card-text">${person.email}</p>
             <p class="card-text cap">city, state</p>
         </div>
     </div>`
         
         )

        
    });
    return data;
};
function addingFunctionality(data){
const newCards = document.querySelectorAll(".card");
const body = document.getElementsByTagName("body")[0];
const closeButton = document.createElement("button");
closeButton.innerHTML =  `
<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
`
for(let i=0; i<newCards.length; i++){
newCards[i].addEventListener("click",()=>{
    console.log("yay");
    const container = document.createElement("div");
    body.appendChild(container);
    container.className = "modal-container";
    const info = document.createElement("div");
    info.className = "modal";
    container.appendChild(info);
    info.appendChild(closeButton);
    
    
    info.insertAdjacentHTML("beforeend", 
    `
       <div class="modal-info-container">
        <img class="modal-img" src=${data[i].picture.large} alt="profile picture">
        <h3 id="name" class="modal-name cap">${data[i].name.first}</h3>
        <p class="modal-text">${data[i].email}</p>
        <p class="modal-text cap">${data[i].city}</p>
        <hr>
        <p class="modal-text">${data[i].phone}</p>
        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
        <p class="modal-text">Birthday: 10/21/2015</p>
        `
   )  
   closeButton.addEventListener("click",()=>{
    container.style.display = "none";
});
     
   
})
};

};

fetch(jsonProfiles)
.then(response => (response.json()))
.then(getProfiles)
.then(generateHTML)
.then(addingFunctionality)
