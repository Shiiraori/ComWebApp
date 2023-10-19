import React from "react";
import Navigation from "./CustomNav/Navigation";
// import "./visual.css";

function Visualization() {
  const handleToggleClick = () => {
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");

    // Toggle the "active" class on navigation and main elements
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  return (
    <div>
      <Navigation>/</Navigation>
      <div className="container">
        <div className="main">
          <div className="topbar">
            <div className="toggle" onClick={handleToggleClick}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </div>

          <h2 style={{ paddingLeft: "20px" }}>Visualizations</h2>
          <div className="dashchartsBx" style={{ display: "block" }}>
            <div className="charts">
              <h2 className="chart-title">Butang lang title here</h2>
              <div style={{ height: "300px", width: "400px" }}>
                <canvas id="lineChart"></canvas>
              </div>
            </div>
            <br />

            <div className="charts">
              <h2 className="chart-title">Butang lang title here</h2>
              <div style={{ height: "300px", width: "400px" }}>
                <canvas id="pieChart"></canvas>
              </div>
            </div>
            <br />

            <div className="charts">
              <h2 className="chart-title">Butang lang title here</h2>
              <div style={{ height: "300px", width: "400px" }}>
                <canvas id="barChart"></canvas>
              </div>
            </div>
            <br />

            <div className="charts">
              <h2 className="chart-title">Butang lang title here</h2>
              <div style={{ height: "300px", width: "400px" }}>
                <canvas id="areaChart"></canvas>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visualization;
