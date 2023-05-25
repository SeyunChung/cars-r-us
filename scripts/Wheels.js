import { setWheelChoice } from "./TransientState.js"
//create change event for capturing the paint option chosen
const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
       const wheelIdChosen = changeEvent.target.value
       setWheelChoice(parseInt(wheelIdChosen))
    }
 }
document.addEventListener("change", changeHandler)
//create html for displaying the paints menu
export const Wheels = async () => {
    //fetch the paints data from our local api
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json() 

    let wheelsHTML = `<select id="wheels">
        <option value="0">Select a wheel style</option>`

    const wheelArray = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheel}</option>`
        }
    )

    wheelsHTML += wheelArray.join("")
    wheelsHTML+= "</select>"
    return wheelsHTML
}