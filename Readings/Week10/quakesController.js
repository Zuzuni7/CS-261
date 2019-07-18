import {getLocation} from './utilities.js';
import quake from './quake.js';
import quakeView from './quakeView.js';

export default class QuakesController {
    constructor(parent, position = null) {
      this.parent = parent;
      // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
      this.parentElement = null;
      // let's give ourselves the option of using a location other than the current location by passing it in.
      this.position = position || {
        lat: 0,
        lon: 0
      };
      // this is how our controller will know about the model and view...we add them right into the class as members.
      this.quakes = new quake();
      this.quakesView = new quakeView();
    }


async init() {
    this.initPos();
}

async initPos() {
    if (this.CaretPosition.lat === 0)
    {
        try{
            const position = await getLocation();
            console.log(position);
        } catch(error) {
            console.log(error);
        }
    }
}
}