import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
  const { getCustomerById } = useContext(CustomerContext)

	const [customer, setCustomer] = useState({})

	const {customerId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", customerId)
    getCustomerById(customerId)
    .then((response) => {
      setCustomer(response)
    })
    }, [])

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">{customer.address}</div>
    </section>
  )
}