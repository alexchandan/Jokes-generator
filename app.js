const parag = document.querySelector('.paragraph')
const jokes = async () => {
    try {
        const res = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=b142593d620355dea7373cd9701f')
        const data = await res.json();
        console.log(data);
        parag.innerHTML = data.jokeContent;
    } catch (error) {
        console.log(error)
    }
}

jokes();

