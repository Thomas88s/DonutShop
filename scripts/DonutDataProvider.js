

    let donutsArray = []
 
    export const getDonuts = () => {

        fetch("http://localhost:3000/donuts")
    .then(response => response.json())
    .then(donutsCollection => {
        donutsArray = donutsCollection
    console.log('donutsArray: ', donutsArray)
    })
}

export const useDonuts = () => donutsArray.slice()