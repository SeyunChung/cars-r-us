import { setInteriorChoice } from "./TransientState.js"
//create change event for capturing the paint option chosen
const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "interiors") {
       const interiorIdChosen = changeEvent.target.value
       setInteriorChoice(parseInt(interiorIdChosen))
    }
 }
document.addEventListener("change", changeHandler)
//create html for displaying the paints menu
export const Interiors = async () => {
    //fetch the paints data from our local api
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json() 

    let interiorsHTML = `<select id="interiors">
        <option value="0">Select an interior material</option>`

    const interiorArray = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.seat}</option>`
        }
    )

    interiorsHTML += interiorArray.join("")
    interiorsHTML += "</select>"
    return interiorsHTML
}