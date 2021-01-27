import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

		// The useHistory hook let's us tell React which route we want to visit. 
		// We will use it to tell React to render the animal form component.
		// const history = useHistory()

    useEffect(() => {
        console.log("CustomerList: Initial render before data")
        getCustomers()
    }, [])


    return (
        <div className="customers">
          {console.log("CustomerList: Render", customers)}
          {
            customers.map(customer => {
              return <CustomerCard key={customer.id} customer={customer} />
            })
          }
        </div>
      )
}