// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const base_url = "https://flatacuties-backend.vercel.app/characters"
    const characterBar = document.getElementById('character-bar')
    const image = document.getElementById('image')
    const voteCount = document.getElementById('vote-count')
    const name = document.getElementById('name')
    const form = document.getElementById('votes-form')
    const resetBtn = document.getElementById('reset-btn')

    fetch (base_url)
    .then(res => res.json())
    .then(characters => {
        characters.forEach(character => {
        const span = document.createElement("span")
        span.innerText=character.name
        characterBar.appendChild(span)
        span.style.cursor='pointer'


        span.addEventListener("click", ()=> {
            name.textContent = character.name
            image.src = character.image
            image.alt = character.name
            voteCount.textContent = character.votes
        })
    })
    })
    .catch(error => console.log(error))

    form.onsubmit = (votesNumber) => {
        votesNumber.preventDefault();
        let votes = document.getElementById("votes").value;
        if(votes){
            voteCount.textContent=Number(voteCount.textContent)+ Number(votes);
        }
        form.reset()
    }
    resetBtn.addEventListener("click",() =>{
        voteCount.textContent ="0"
    })
})