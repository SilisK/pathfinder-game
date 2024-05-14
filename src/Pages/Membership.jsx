import React from "react";
import "./Membership.css";
import { Link } from "react-router-dom";

const tiers = [
  {
    title: "Free",
    price: { amount: 0, frequency: "mo" },
    perks: [
      "Access to all Story Examples",
      "Assistance from Help Center",
      "Create Custom Stories",
    ],
    cta: "Sign Up Free",
  },
  {
    title: "Pro",
    price: { amount: 5, frequency: "mo" },
    perks: [
      "Everything in Free",
      "Access to Premium Stories",
      "Priority Email Support",
    ],
    cta: "Buy Now",
  },
  {
    title: "Expert",
    price: { amount: 10, frequency: "mo" },
    perks: ["Everything in Free + Pro", "Removes Ads"],
    cta: "Buy Now",
  },
];

export default function Membership() {
  return (
    <div className="membership-container min-h-screen grid gap-11 py-24">
      <header className="grid">
        <div className="align-items-center ms-auto grid">
          <div className="text-center my-4 mx-auto place-items-center grid">
            <h2>
              <strong>Membership Pricing</strong>
            </h2>
          </div>
        </div>
      </header>
      {/*  */}
      <main className="membership-col">
        <div className="grid w-full gap-11 lg:grid-cols-3">
          {/*  */}
          {tiers.map((tier) => (
            <div className="card-container flex justify-center">
              <div className="card text-center">
                <div className="card-header">
                  <h4 className="fw-normal">{tier.title}</h4>
                </div>
                <div className="card-body">
                  <p className="card-title">
                    ${tier.price.amount}
                    <small className="text-muted fw-light">
                      /{tier.price.frequency}
                    </small>
                  </p>
                  <ul className="flex flex-col gap-8 py-4">
                    {tier.perks.map((perk) => (
                      <li className="text-sm font-semibold">{perk}</li>
                    ))}
                  </ul>
                  <button className="btn-gradient">
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {tier.cta}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
