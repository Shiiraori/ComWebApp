import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth  } from '../../firebase';
import { toast } from 'react-toastify';

function Navigation() {

  const navigate = useNavigate();
  // Function to handle mouseover event on navigation items
  const handleMouseOver = (item) => {
    // Remove the "hovered" class from all list items
    document.querySelectorAll(".navigation li").forEach((listItem) => {
      listItem.classList.remove("hovered");
    });

    // Add the "hovered" class to the current item
    item.classList.add("hovered");
  };

  // Function to handle menu toggle
  const handleToggleClick = () => {
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");

    // Toggle the "active" class on navigation and main elements
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      toast.success("Signed Out Successfully")
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <Link to="/dashboard">
              <span className="icon">
                <ion-icon name="speedometer"></ion-icon>
              </span>
              <span className="title">CommuMeter</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/records">
              <span className="icon">
                <ion-icon name="server-outline"></ion-icon>
              </span>
              <span className="title">Mobility Data</span>
            </Link>
          </li>

          <li>
            <Link to="/visualization">
              <span className="icon">
                <ion-icon name="analytics"></ion-icon>
              </span>
              <span className="title">Visualizations</span>
            </Link>
          </li>

          <li>
            <a onClick={handleSignOut}>
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title" onClick={handleSignOut}>Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Navigation;
