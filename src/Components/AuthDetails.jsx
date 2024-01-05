import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Auth.css";

export default function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="signed-out-container">
        <p className="signed-out-text">
          {authUser ? `Signed In as ${authUser.email}` : "Signed Out"}
        </p>
        {authUser && (
          <button className="signout-route-btn" onClick={userSignOut}>
            Sign Out
          </button>
        )}
      </div>
    </>
  );
}