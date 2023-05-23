import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js";
import { placeOrderButton } from "./CustomerOrders.js";
import { Orders } from "./OrderLists.js";


const container = document.querySelector("#container");

const render = async () => {
    const paintsHTML = await Paints()
    const interiorsHTML = await Interiors()
    const wheelsHTML = await Wheels()
    const technologiesHTML = await Technologies()
    const orderButton = await placeOrderButton ()
    const customOrderLists = await Orders()

  const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintsHTML}
            </section>

            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorsHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsHTML}

            </section>

            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${technologiesHTML}

            </section>
        </article>

        <article class="order">
        <div class="centered">
        ${orderButton}
        </div>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
        ${customOrderLists}
        </article>
    `;

  container.innerHTML = composedHTML;
};
document.addEventListener("newCustomOrderCreated", render);

render();