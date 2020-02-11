document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  // let joke;

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => jokeData.joke)
  }

  // const submitBtn = document.getElementById("joke-form").getElementsByTagName("p")[1].querySelector("input")
  // submitBtn.class = "button"
  // submitBtn.addEventListener('click', () => fetchJoke())

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('name-input').value
    const jokeList = document.getElementById('joke-list')
    const newJokeLi = document.createElement('li')

    if(username === "") return;
    fetchJoke().then(joke => {
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)
    })
  })
})
