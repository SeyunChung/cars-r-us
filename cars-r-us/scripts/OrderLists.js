export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/customerOrders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel");
    const customerOrders = await fetchResponse.json();
    let customerOrdersHTML = "";
    const ordersArray = customerOrders.map((customerOrder) => {
      const customOrderPrice =
      customerOrder.paint.price + customerOrder.interior.price + customerOrder.wheel.price + customerOrder.technology.price;
      // To automatically format the number as currency
    const CustomOrderPrice = customOrderPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<div id="${customerOrder.id}" class="customerOrder">Order #${customerOrder.id} ${customerOrder.paint.color} car with ${customerOrder.wheel.wheel} wheels, ${customerOrder.interior.seat} interior, and the ${customerOrder.technology.package} for a total cost of ${CustomOrderPrice}</div>`
        }
    )
      /* customerOrdersHTML += `<div>
              Order #${customerOrder.id} cost $${customOrderPrice}
              </div>`;
    }); */
    customerOrdersHTML += ordersArray.join(" ");
    return customerOrdersHTML;
  };
