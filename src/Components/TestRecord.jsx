import React from "react";
import Navigation from "./CustomNav/Navigation";
import RecordList from "./Records/RecordList.jsx";

function Records() {
  const handleToggleClick = () => {
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");

    // Toggle the "active" class on navigation and main elements
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <div className="main">
          <div className="topbar">
            <div className="toggle" onClick={handleToggleClick}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </div>
          <RecordList></RecordList>
        </div>
      </div>
    </div>
  );
}

export default Records;
