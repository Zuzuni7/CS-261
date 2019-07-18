class MultiplicatorUnitFailure extends Error {}
//error constructor.
//
function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b; //normal multiplcation
  } else {
    throw new MultiplicatorUnitFailure("Klunk");//send error string to custom error class
  }
}

function reliableMultiply(a, b) {
  for (;;) { //for all conditions
    try {
      return primitiveMultiply(a, b);//if its normal then send it to the normal function.
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) //throw custom error
        throw e; //display the error in an alert or something
    }
  }
}

console.log(reliableMultiply(8, 8));
//64