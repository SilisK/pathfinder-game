import React from 'react';
import './Membership.css';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

export default function Membership() {
  const handlePaymentClick = async e => {
    const stripe = await loadStripe('pk_test_51OWh05DMdi2VrTPJlTIxUGzCykeybolCWMaQPb2D8MIgZf0UDG94QTNTSVhWEi2tj8zxlWdblblmTYPaOQJQy18Z0094ers8Pi')
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1OWpHYDMdi2VrTPJE6fhjzLP',
        quantity: 1
      }],
      mode: 'subscription',
      successUrl: 'https://pathfinder-game.netlify.app',
      cancelUrl: 'https://pathfinder-game.netlify.app/cancel'
    })
    console.log(error);
  }

  const secondHandlePaymentClick = async e => {
    const stripe = await loadStripe('pk_test_51OWh05DMdi2VrTPJlTIxUGzCykeybolCWMaQPb2D8MIgZf0UDG94QTNTSVhWEi2tj8zxlWdblblmTYPaOQJQy18Z0094ers8Pi')
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1OWpIlDMdi2VrTPJY3pTKpQh',
        quantity: 1
      }],
      mode: 'subscription',
      successUrl: 'https://pathfinder-game.netlify.app',
      cancelUrl: 'https://pathfinder-game.netlify.app/cancel'
    })
  }

  return (
    <>
      <div className="membership-container">
        <header>
          <div className="d-flex align-items-center ms-auto">
            <div className="text-center w-75 my-4 mx-auto">
              <h1>
                <strong>Membership Pricing</strong>
              </h1>
              <p className="fs-5 text-muted">
                Unlock a realm of limitless adventures with Pathfinder! Subscribe today for exclusive scripts, tailored experiences, and expanded gaming storylines. Level up your journey now.
              </p>
            </div>
          </div>
        </header>
        <main>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-header">
                  <h4 className="fw-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title">
                    $0 <small className="text-muted fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled py-3 text-start">
                    <li>Easy access to pathfinder Games at Your Fingertips</li>
                    <li>Gain Assistance with Our Support Team</li>
                  </ul>
                  <button className="btn btn-lg">
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Sign Up Free
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-header">
                  <h4 className="fw-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title">
                    $5 <small className="text-muted fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled py-3 text-start">
                    <li>Explore a Vast Array of Exciting Games</li>
                    <li>Removes Ads</li>
                    <li>Enjoy Priority Email Support for Swift Assistance</li>
                    <li>Access Comprehensive Support Resources in our Help Center</li>
                  </ul>
                  <button className="btn btn-lg" onClick={handlePaymentClick}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-header">
                  <h4 className="fw-normal">Expert</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title">
                    $10 <small className="text-muted fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled py-3 text-start">
                    <li>Explore a Bounty of Seed Games</li>
                    <li>Removes Ads</li>
                    <li>Unlock Exclusive Pathfinder Adventures</li>
                    <li>Embark on Tailored Pathfinder Adventures with Your Own Creations</li>
                    <li>Enjoy Priority Email Support for Swift Assistance</li>
                    <li>Access Comprehensive Support Resources in our Help Center</li>
                  </ul>
                  <button className="btn btn-lg" onClick={secondHandlePaymentClick}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
