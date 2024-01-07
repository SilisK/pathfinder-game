import React from 'react';
import './Membership.css';
import { Link } from 'react-router-dom';

export default function Membership() {
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
                    <li>Seed Games Access</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
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
                    $20 <small className="text-muted fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled py-3 text-start">
                    <li>Seed Games Access</li>
                    <li>Exclusive Access to additional Pathfinder games</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button className="btn btn-lg">Buy Now</button>
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
                    $50 <small className="text-muted fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled py-3 text-start">
                    <li>Seed Games Access</li>
                    <li>Exclusive Access to additional Pathfinder games</li>
                    <li>Game access to pathfinder Customized games</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button className="btn btn-lg">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
