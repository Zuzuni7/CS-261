const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
export function getJSON (url){
    return fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      } else {
        console.log(response.status);
      return response.json();
    }
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

export const getLocation = function (options) {
  return new Promise(function(resolve, reject) {
    if(itWorked) {
      resolve(stuff); //if this happens resolve it else reject it with err msg
    }
    else
    {
      reject(error);
    }
    navigator.geolocation.getCurrentPosition(resolve,reject,options);
  })
};
/***** TEST CASE: *****/
var newURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
getJSON(newURL).then(data=>{
  console.log(data);
});// if we had a .then() it would get sent to resolve. with a catch it would go to reject