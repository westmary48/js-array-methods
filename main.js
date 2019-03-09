const struggleBus = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
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
};

const busBuilder = (bus) => {
    // build domString from bus builder
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
    busBuilder(struggleBus);
    console.log(struggleBus);
}

init();
