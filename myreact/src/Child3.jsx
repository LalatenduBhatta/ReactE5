
function Child3() {
    let name = "Swapnil Kusale"
    let fruits = ["Mango", "Grapes", "Apple", "Banana", "Orange"]
    let displayFruits = []
    for (let fruit of fruits) {
        displayFruits.push(<li>{fruit}</li>)
    }
    return (
        <div>
            <h1>{name}</h1>
            {
                fruits.map(element => {
                    return <li>{element}</li>
                })
            }
            ------------------------------------------
            {
                displayFruits
            }
        </div>
    )
}

export default Child3;