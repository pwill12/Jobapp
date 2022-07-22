import { Button } from "@mui/material"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import RecruiterForm from "./RecruiterForm"

const PUBLIC_KEY = "pk_test_51KoT8oGgiVZF9GXJ2xzj0R5jMBYfgqDjXkdAuRpRclAa9KLPd0QDFWG6oHev6kA2uTgCFQfHy3iUkCloZxGnNiPO00MfG8ueV4"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<RecruiterForm />
		</Elements>
	)
}