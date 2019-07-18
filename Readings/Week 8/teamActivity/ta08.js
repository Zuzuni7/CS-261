const url = 'https://pokeapi.co/api/v2/pokemon';

function getJSON (url){
    return fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      } else {
        console.log(response.status);
      // Examine the text in the response
      return response.json();
    }
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

const myList = getJSON(url);
console.log(myList);

myList.then(data => {
    buildList(data);
    buildButtons(data);
});

function buildList(data) {
  const myListElement = document.getElementById('list'); 
  myListElement.innerHTML = data.results.map(item => `<li>${item.name}</li>`)
  .join('');
}

function buildButtons(data) {
    const nextButton = document.getElementById(nextButton);
    const prevButton = docuemnt.getElementById(prevButton);

    nextButton.addEventListener(click, function() {
        const myList = getJSON(data.next); // iter through the JSON
         console.log(myList);
    })
}
  