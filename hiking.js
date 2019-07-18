// DOM Manipulation
// We can get a hld of DOM elements by using "getElementById("element")"
// query selector or query selector(all). 
/* Returns all and any matches found.

    When we wanna ref one of those things we normally start by referencing the DOM
    through "document.getElementById" or window.whateverWeNeed().value.



*/

//hikes doesn't exist yet....
function listHikes() {
    const listElement = document.getElementById("hikes");

    console.dir(listElement);
    listElement.innerHTML=" ";

    hikeList.forEach(hike => {
        listElement.appendChild(renderHike(hike));
        newHike.addEventListener('touchend'), (ev) => {
            console.log(ev);
        } //append to list element
});
}

//
function createHike(hike) {
    const item = document.createElement('li');
    console.dir(item);
    const image = document.createElement('img')
    image.src = hike.imgSrc;
    image.alt = hike.imgAlt;

    item.appendChild(image);
    const title = document.createElement('h2');
    title.innerText = hike.name;
    item.appendChild(title);



    return item;
}




function renderHike(hike) {
    const item = document.createElement();
    item.innerHTML = `<div>
    <h3>Distance</h3>
    <p>3 miles</p>
  </div>
  <div>
    <h3>Difficulty</h3>
    <p>Easy</p>
  </div>
  <div>
    <h3>Description</h3>
    <p>Beautiful short hike along the Bechler river to Bechler Falls</p>
  </div>
  <div>
    <h3>How to get there</h3>
    <p>
      Take Highway 20 north to Ashton. Turn right into the town and
      continue through. Follow that road for a few miles then turn left
      again onto the Cave Falls road. Drive to the end of the Cave Falls
      road. There is a parking area at the trailhead.
    </p>
  </div>`;
}
//when the window has finished loading do.... listHikes().
window.addEventListener('load',()=>{
    listHikes();
})


//we need to event handle better here
/*
    we can put the script tag down at hte bottom of the html
                            or
    defer... see script.js tag.

*/