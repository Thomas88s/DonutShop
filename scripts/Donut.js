
let donutsArray = []

  export const DonutHTMLRepresentation = (donut) => {

    const htmlForOneDonut = 
    `<section>
        <h3>Flavor: ${donut.flavor}</h3>
        <p>Topping:${donut.Topping}</p>
        <p>Filling:${donut.Filling}</p>
        <p>Price:${donut.Price}</p>
    </section>`
 
    return htmlForOneDonut
     }