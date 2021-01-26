import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { LocationContext } from "../location/LocationProvider"
import { LocationCard } from "../location/LocationCard"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

		// The useHistory hook let's us tell React which route we want to visit. 
		// We will use it to tell React to render the animal form component.
		// const history = useHistory()

    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getLocations()
    }, [])


    return (
        <div className="locations">
          {console.log("LocationList: Render", locations)}
          {
            locations.map(location => {
              return <LocationCard key={location.id} location={location} />
            })
          }
        </div>
      )
}