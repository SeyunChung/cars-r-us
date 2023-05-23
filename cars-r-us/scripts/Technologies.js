import { setTechnologyChoice } from "./TransientState.js"
//create change event for capturing the paint option chosen
const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "technologies") {
       const technologyIdChosen = changeEvent.target.value
       setTechnologyChoice(parseInt(technologyIdChosen))
    }
 }
document.addEventListener("change", changeHandler)
//create html for displaying the paints menu
export const Technologies = async () => {
    //fetch the paints data from our local api
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json() 

    let technologiesHTML = `<select id="technologies">
        <option value="0">Select a technology package</option>`

    const technologyArray = technologies.map( (technology) => {
            return `<option value="${technology.id}">${technology.package}</option>`
        }
    )

    technologiesHTML += technologyArray.join("")
    technologiesHTML+= "</select>"
    return technologiesHTML
}