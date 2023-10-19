import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase";

import { collection, updateDoc, doc } from "firebase/firestore";

const RecordEdit = ({ record }) => {
  const [isEditing, setEditing] = useState(false);
  const [gps, setGps] = useState(record.RecordGPS);
  const [location, setLocation] = useState(record.RecordLocation);
  const [population, setPopulation] = useState(record.RecordPopulation);
  const [isModalOpena, setIsModalOpena] = useState(false);

  const openModal = () => {
    setIsModalOpena(true);
  };

  const closeModal = () => {
    setIsModalOpena(false);
  };

  const handleSaveClick = async () => {
    // Update the record in the database
    const recordRef = doc(db, "records", record.id);
    const updatedRecord = {
      RecordGPS: gps,
      RecordLocation: location,
      RecordPopulation: population,
    };
    try {
      await updateDoc(recordRef, updatedRecord);
      toast.success("Record updated successfully");
      closeModal(false);
    } catch (error) {
      toast.error("Error updating record");
    }
  };

  return (
    <div>
      {/* <div class="details data">
        <div class="dataRecord"> */}
      <button
        type="button"
        className="btn btn-good btn-edit icon"
        onClick={openModal}
      >
        Edit
      </button>
      <div id="addModal" style={{ display: isModalOpena ? "block" : "none" }}>
        <h3>Edit Record</h3>
        <form id="editForm">
          <label htmlFor="location" style={{ color: "black" }}>Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="gps" style={{ color: "black" }}>GPS:</label>
          <input
            type="text"
            id="gps"
            placeholder="Gps"
            name="gps"
            value={gps}
            onChange={(e) => setGps(e.target.value)}
          />
          <label htmlFor="population" style={{ color: "black" }}>Population:</label>
          <input
            type="number"
            id="population"
            placeholder="Population"
            name="population"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
          />
          <div className="btn">
            <input
              type="button"
              id="save"
              className="btn btn-good"
              value="Save"
              onClick={handleSaveClick}
            />

            <input
              type="button"
              id="cancelAdd"
              className="btn btn-bad"
              value="Cancel"
              onClick={closeModal}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordEdit;
