
const myListPromise = fetch('data.json'); // fetch wasn't working with non-https path

//sets a delay. contains a callback aka something to do when it is done. in millisecs
setTimeout(()=> {console.log('delay')}, 1000);

// myListPromise.then(Response => {
//     if (Response.ok) {
//     console.log('in', 'then', Response);
//     return Response.json(); // sends back another promise.
//     // you process a promise with then();
// } else {
//     throw new Error('not ok');
//     console.log('will not run');
// }


// }).catch((err)=> {
//     console.log(err);
// })

console.log(myListPromise);

//you can process the fetch as .text(), .json(), or .blob().

function getJSON(url) {
    fetch(url)
    .then(Response => {
        if (Response.ok) {
        console.log('in', 'then', Response);
        return Response.json(); // sends back another promise.
        // you process a promise with then();
        } else {
        throw new Error('not ok');
        console.log('will not run');

    )}.catch(err=> {
        console.log(err);
    });
}
}


function buildList(data) {
    const myListElement = docuement.getElementById('list');
    myListElement.innerHTML = data.map(item=> `<li>${item.name}</li>`).join(``);
}


//building my own prompt in JS I guess.

function longProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(42);
        }, 200);
    })//takes 2 cllbakcs. resolve and reject
    // setTimeout(()=>{
    //     return 42;
    // }, 200);
}
longProcess().then((result)=> {
    let total = 100 + result;
    console.log('Total: ', total);
}).catch(err=> {
    console.log(err);
});
// let total = 100 + longProcess();

// console.log(total);