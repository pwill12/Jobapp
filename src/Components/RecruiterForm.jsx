import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { publicRequest } from "../apirequests";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import RecruiterCheckout from "../Pages/RecruiterCheckout";
import Success from "./Success";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import { Mobile } from "../Mobile";

const Contain = styled.div`
  ${Mobile({display: 'none'})}

`

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

function RecruiterForm() {
  // const [stripeToken, setStripeToken] = useState(null);

  const [success, setSuccess] = useState(false);
  const history = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await publicRequest.post("/payment", {
          amount: 1000,
          id,
        });

        console.log(response);

        if (response.status === 200) {
          console.log("Successful payment");
          setSuccess(true);

          // history('/Success', { state: {stripeData: response} })
        }
      } catch (error) {
        console.log("hello", error);
        // history('/failed')
      }
    } else {
      console.log(error.message);
      history("/failed");
    }
  };


  const [myloading, setmyloading] = useState(false);
  return (
    <Contain>
      {success === false ? (
        // <GridComplexExample />
        <div>
          <form onSubmit={handleSubmit} className="myform">
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button className="btnn" onClick={() => setmyloading(true)}>
              {myloading === false ? (
                "pay"
              ) : (
                // "pay"
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span>loading</span>
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        <Success />
      )}
    </Contain>
  );
}

export default RecruiterForm;
