const getJokes = async () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    try {
        const response = await fetch(url);
        const data = await response.json();
       
        const myJoke = document.querySelector('.jokeData');
        myJoke.innerHTML = `${data.setup} ${data.punchline}`; // Combine setup and punchline
    } catch (error) {
        console.log(error);
    }
};

window.addEventListener("load", () => {
    getJokes();
});
