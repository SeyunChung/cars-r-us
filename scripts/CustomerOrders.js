import { customOrder } from "./TransientState.js";

const handlePlacedOrderClick = (clickEvent) => {
    if(clickEvent.target.id === 'customOrder') {
        customOrder()
    }
}

export const placeOrderButton = () => {
    document.addEventListener("click", handlePlacedOrderClick)
    return `<button id="customOrder">Place Car Order</button>`
}