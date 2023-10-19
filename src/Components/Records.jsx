import React from "react";
import Navigation from "./CustomNav/Navigation";

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

          {/* UI here */}

          <div className="details data">
            <div className="dataRecord">
              <div className="cardHeader">
                <h2>Mobility Data Record</h2>
                <div className="btn">
                  <button className="btn btn-good btn-add" id="add">
                    <ion-icon
                      className="icon"
                      name="add-circle"
                      style={{ paddingRight: "5px", textAlign: "center" }}
                    ></ion-icon>
                    Add Record
                  </button>
                </div>
              </div>

              <table id="myTable">
                <thead>
                  <tr>
                    <td>No.</td>
                    <td>Location</td>
                    <td>Latitude</td>
                    <td>Longitude</td>
                    <td>Population</td>
                    <td>Date</td>
                    <td>Action</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sample</td>
                    <td>1234</td>
                    <td>5678</td>
                    <td>12034</td>
                    <td>01/22/2023</td>
                    <td>
                      <center>
                        <button type="button" className="btn btn-good btn-edit">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-bad btn-delete"
                        >
                          Delete
                        </button>
                      </center>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Test</td>
                    <td>3455</td>
                    <td>9847</td>
                    <td>23784</td>
                    <td>01/26/2023</td>
                    <td>
                      <center>
                        <button type="button" className="btn btn-good btn-edit">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-bad btn-delete"
                        >
                          Delete
                        </button>
                      </center>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div id="editModal">
                <h3>Edit Record</h3>
                <form id="editForm">
                  <label htmlFor="location">Location:</label>
                  <input type="text" id="location" name="location" />
                  <br />
                  <label htmlFor="latitude">Latitude:</label>
                  <input type="text" id="latitude" name="latitude" />
                  <br />
                  <label htmlFor="longitude">Longitude:</label>
                  <input type="text" id="longitude" name="longitude" />
                  <br />
                  <label htmlFor="longitude">Population:</label>
                  <input type="text" id="population" name="population" />
                  <br />
                  <label htmlFor="longitude">Date:</label>
                  <input type="date" id="date" name="date" />
                  <br />
                  <div className="btn">
                    <input
                      type="button"
                      id="cancelEdit"
                      className="btn btn-bad"
                      value="Cancel"
                    />
                    <input
                      type="button"
                      id="update"
                      className="btn btn-good"
                      value="Update"
                    />
                  </div>
                </form>
              </div>

              <div id="addModal">
                <h3>Add Record</h3>
                <form id="editForm">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    name="location"
                  />
                  <br />
                  <label htmlFor="latitude">Latitude:</label>
                  <input
                    type="text"
                    id="latitude"
                    placeholder="Latitude"
                    name="latitude"
                  />
                  <br />
                  <label htmlFor="longitude">Longitude:</label>
                  <input
                    type="text"
                    id="longitude"
                    placeholder="Longitude"
                    name="longitude"
                  />
                  <br />
                  <label htmlFor="longitude">Population:</label>
                  <input
                    type="text"
                    id="population"
                    placeholder="Population"
                    name="population"
                  />
                  <br />
                  <label htmlFor="longitude">Date:</label>
                  <input type="date" id="date" name="date" />
                  <br />
                  <div className="btn">
                    <input
                      type="button"
                      id="cancelAdd"
                      className="btn btn-bad"
                      value="Cancel"
                    />
                    <input
                      type="button"
                      id="save"
                      className="btn btn-good"
                      value="Save"
                    />
                  </div>
                </form>
              </div>

              <div id="deleteModal">
                <h3>Delete Confirmation</h3>
                <center>
                  <p style={{ paddingBottom: "10px" }}>
                    Are you sure you want to delete this record?
                  </p>
                  <div className="btn">
                    <button id="delCancel" className="btn btn-bad">
                      Cancel
                    </button>
                    <button id="delConfirm" className="btn btn-good">
                      Confirm
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
