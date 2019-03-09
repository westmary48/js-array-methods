const struggleBus = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

// const addMiddlePassenger = (struggleBus, passenger) => {
//     let newArray = []
//     let middle = struggleBus.length/2;
//     newArray.push(struggleBus.splice(middle, 0, passenger));
// };

const addMiddle = (struggleBus, passenger) => {
    // created a variable that represented the middle and how to get there ( divide the array by 2 so we know to place the passenger in the middle)
    var middle = struggleBus.length/2;
    // then the array.splice ( then the first element is the index, 0 means you are not removing any exisiting elemenets, and then passenger is who you are adding)
    struggleBus.splice( middle, 0 , passenger);
}

const addPassenger = (name, wallet, isStruggling, seat) => {
// make a passenger object
// add it on the bus
  const passenger = {
      name: name,
      wallet: wallet,
      isStruggling: isStruggling
      }

      if ( seat === 'back') {
          // push allows you to add values to the end of an array
          struggleBus.push(passenger);
      }
      else if ( seat === 'front') {
          // unshift adds value to the front of the array
          // shift takes value off the front of the array
          // pop takes the value off the back of the array
          struggleBus.unshift(passenger);
      }
      else if ( seat === 'middle') {
        addMiddle(struggleBus, passenger);
      }

};

const unloadPassenger = (bus, seat) => {
// remove a passenger from the bus
// return the passenger object
if ( seat === 'front') {
    return bus.shift(); // kicks off matt first ( kicks off person in the first order)
} else if (seat === 'back') {
  return bus.pop(); // kicks off the person in back of the bus and replaces them ( kicks off greg);
}
};

 const allAboard = (bus) => {
     //loop over the passengers
     // given the bus costs 5 bucks
     // if the passenger can afford it, charge them
     // if not, kick them off the bus
     const busFare = 5;
     const validPassengers = [];

     bus.forEach((passenger) => {
        if (passenger.wallet >= busFare){
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
        }
     })
     return validPassengers;
    }

const busBuilder = (bus) => {
   let domString = '';
   for (let i = 0; i < bus.length; i++) {
    domString += `<div class = "bus-seat">`
    domString += `<h4>${bus[i].name}</h4>`;
    domString += `<p>${bus[i].wallet}</p>`
    domString += `<p>${bus[i].isStruggling}</p>`
    domString += `</div>`
   }
printToDom('the-bus', domString);
}

const init = () => {
    addPassenger('Mary', 3, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('Saul', 12, true, 'front');
    addPassenger('Matt1', 5, true, 'front');
    addPassenger('Matt2', 15, true, 'front');
    addPassenger('Matt3', 3, true, 'front');
    addPassenger('Sarah', 25, false, 'middle');
    // console.log(unloadPassenger(struggleBus, 'front'));
    // console.log(unloadPassenger(struggleBus, 'middle'));
    // need to store the function in varible so we can actually use the variable when we print to the dom
    busBuilder(allAboard(struggleBus));
    console.log(struggleBus);

}

init();
