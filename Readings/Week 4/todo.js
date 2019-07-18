
export const apiKey = 'jWDNEUFWENKJSNDasdnasjd';

let itemList= [];

export const apiURL = 'localhost:5500'; //export is made available outside of the file

//default only lets us export one thing in.
//export default createItem(data) {... etc.
export function createItem(data){
    const item = document.createElement('li');
    item.innerHTML = `Date: ${data}`;
    return item;
}