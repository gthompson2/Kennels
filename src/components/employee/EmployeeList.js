import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom" // import from libraries before your local modules
import {EmployeeContext } from "../employee/EmployeeProvider"
import { EmployeeCard } from "../employee/EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

		// The useHistory hook let's us tell React which route we want to visit. 
		// We will use it to tell React to render the animal form component.
		// const history = useHistory()

    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
    }, [])


    return (
        <div className="employees">
          {console.log("EmployeeList: Render", employees)}
          {
            employees.map(employee => {
              return <EmployeeCard key={employee.id} employee={employee} />
            })
          }
        </div>
      )
}