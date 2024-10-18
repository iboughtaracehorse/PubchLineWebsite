let element = document.querySelectorAll('.sliding-title > *')

anime({
  targets: element,
  translateX: '-100%',
  duration: 10000,
  easing: 'linear',
  loop: true
});



const URL = "https://official-joke-api.appspot.com/jokes/random/27";

fetch(URL)
    .then(response => response.json())
    .then(jokesList => {
        console.log('fetched jokes', jokesList);
        const jokesElement = document.querySelectorAll('.joke-content');

        jokesList.forEach((joke, index) => {
            if (jokesElement[index]) {
                jokesElement[index].innerText = `${joke.setup} - ${joke.punchline}`;}
        });

    })
    .catch(error => {console.log(error)})







