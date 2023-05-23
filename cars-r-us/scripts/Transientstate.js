//we need the transient state to hold the options chosen for each order
let transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}

//setter functions for storing options chosen in our transient state
export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const setTechnologyChoice = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const customOrder = async () => {
    /*
          Add the required keys to the object below that are
          needed for a POST operation.
      */
  
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    };
  
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/customerOrders", postOptions);
    const customEvent = new CustomEvent("newCustomOrderCreated");
    document.dispatchEvent(customEvent);
};