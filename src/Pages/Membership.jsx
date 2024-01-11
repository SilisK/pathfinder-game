import React from "react";
import "./Membership.css";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

export default function Membership() {
  const handlePaymentClick = async (e) => {
    try {
      const stripe = await loadStripe(
        "pk_live_51OWh05DMdi2VrTPJn8PVegg3Amob5HTfjYlRva62GRmH517YIFUqEnpLeS4iitkVOPhD77V0D31WOBMnimPqoAcS00RxpqCE3T"
      );
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1OX12ADMdi2VrTPJjcL3pEfY",
            quantity: 1,
          },
        ],
        mode: "subscription",
        successUrl: "https://pathfinder-game.netlify.app",
        cancelUrl: "https://pathfinder-game.netlify.app/cancel",
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  const secondHandlePaymentClick = async (e) => {
    try {
      const stripe = await loadStripe(
        "pk_live_51OWh05DMdi2VrTPJn8PVegg3Amob5HTfjYlRva62GRmH517YIFUqEnpLeS4iitkVOPhD77V0D31WOBMnimPqoAcS00RxpqCE3T"
      );
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1OX14IDMdi2VrTPJsBRD56pK",
            quantity: 1,
          },
        ],
        mode: "subscription",
        successUrl: "https://pathfinder-game.netlify.app",
        cancelUrl: "https://pathfinder-game.netlify.app/cancel",
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="membership-container min-h-screen grid gap-11">
      <header className="grid">
        <div className="align-items-center ms-auto grid">
          <div className="text-center my-4 mx-auto lg:grid place-items-center">
            <h1>
              <strong>Membership Pricing</strong>
            </h1>
            <p>
              Subscribe today for exclusive scripts, tailored experiences, and
              expanded gaming storylines.
            </p>
          </div>
        </div>
      </header>
      <main className="grid place-items-center">
        <div className="grid gap-11 w-full lg:grid-cols-3">
          <div className="flex justify-center">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $0<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>Access to all Story Examples</li>
                  <li>Assistance from Help Center</li>
                  <li>Create Custom Stories</li>
                </ul>
                <button className="btn btn-lg">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Sign Up Free
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $5<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>Access to all Story Examples</li>
                  <li>Assistance from Help Center</li>
                  <li>Create Custom Stories</li>
                  <li>Access to Premium Stories</li>
                  <li>Priority Email Support</li>
                </ul>
                <button className="btn btn-lg" onClick={handlePaymentClick}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Expert</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $10<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>Access to all Story Examples</li>
                  <li>Assistance from Help Center</li>
                  <li>Create Custom Stories</li>
                  <li>Access to Premium Stories</li>
                  <li>Priority Email Support</li>
                  <li>Removes Ads</li>
                </ul>
                <button
                  className="btn btn-lg"
                  onClick={secondHandlePaymentClick}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
