import { getDonuts, useDonuts } from "./DonutDataProvider.js"
import { DonutHTMLRepresentation } from "./Donut.js"

export const DonutList = () => {

 
    
    getDonuts()
    .then(() => {
         donutsArray = useDonuts()
   
   const render = () => {

    let htmlDonutCollection = ""
   }
  donutsArray.map((donut) => {

    
  })
    })

}