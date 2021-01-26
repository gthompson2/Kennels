import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

		// The useHistory hook let's us tell React which route we want to visit. 
		// We will use it to tell React to render the animal form component.
		const history = useHistory()

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])


    return (
        <div className="animals">
					<h2>Animals</h2>
						<button onClick={() => {history.push("/animals/create")}}>
							Add Animal
						</button>
          {animals.map(animal => {
    				const owner = customers.find(c => c.id === animal.customerId)
    				const clinic = locations.find(l => l.id === animal.locationId)

    				return <AnimalCard key={animal.id}
              location={clinic}
              customer={owner}
              animal={animal} />
						})}
        </div>
    )
}