import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const RecordForm = () => {
  const [gps, setGps] = useState("");
  const [location, setLocation] = useState("");
  const [population, setPopulation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addRecord = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "records"), {
        RecordGPS: gps,
        RecordLocation: location,
        RecordPopulation: population,
        Date: Date.now(),
      });
      setGps("");
      setLocation("");
      setPopulation("");

      toast.success("Added Record");
      closeModal(); // Close the modal after adding the record.
    } catch (error) {
      console.log(error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleGpsChange = (e) => {
    setGps(e.target.value);
  };

  const handlePopulationChange = (e) => {
    setPopulation(e.target.value);
  };

  return (
    <div>
      <div className="cardHeader">
        <h2>Mobility Data Record</h2>
        <div className="btn">
          <button
            className="btn btn-good btn-add icon"
            onClick={openModal} // Open the modal on button click
          >
            Add Record
          </button>
        </div>
      </div>

      <div id="addModal" style={{ display: isModalOpen ? "block" : "none" }}>
        <h3>Add Record</h3>
        <form id="editForm">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            name="location"
            value={location}
            onChange={handleLocationChange}
          />
          <br />
          <label htmlFor="gps">GPS</label>
          <input
            type="text"
            id="gps"
            placeholder="Gps"
            name="gps"
            value={gps}
            onChange={handleGpsChange}
          />
          <br />
          {/* <label htmlFor="longitude">Longitude:</label>
              <input
                type="text"
                id="longitude"
                placeholder="Longitude"
                name="longitude"
              />
              <br /> */}
          <label htmlFor="longitude">Population:</label>
          <input
            type="number"
            id="population"
            placeholder="Population"
            name="population"
            value={population}
            onChange={handlePopulationChange}
          />
          <br />
          {/* <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" />
              <br /> */}
          <div className="btn">
            <input
              type="button"
              id="cancelAdd"
              className="btn btn-bad"
              value="Cancel"
              onClick={closeModal} // Close the modal on cancel
            />
            <input
              type="button"
              id="save"
              className="btn btn-good"
              value="Save"
              onClick={addRecord} // Trigger the addRecord function
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordForm;
