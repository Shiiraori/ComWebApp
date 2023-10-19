import React, { useState, useEffect, useRef } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import RecordEdit from "./RecordEdit";
import RecordForm from "./RecordForm";

import { toast } from "react-toastify";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  getDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

const RecordList = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const tableRef = useRef(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribe = onSnapshot(
          query(collection(db, "records"), orderBy("Date", "desc")),
          (snapshot) => {
            const data = snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            });
            setRecords(data);
          }
        );

        return () => unsubscribe();
      } else if (!user) {
        navigate("/");
      }
    });
  }, [navigate]);

  useEffect(() => {
    // Initialize DataTables here, after records are loaded
    if (records.length > 0 && !tableRef.current) {
      const dataTable = $("#myTable").DataTable({
        retrieve: true,
        autoWidth: false,
      });
      tableRef.current = dataTable;
    }
  }, [records]);

  const handleDelete = async (id) => {
    const recordRef = doc(db, "records", id);
    try {
      await deleteDoc(recordRef);
      toast.success("Record deleted successfully");
    } catch (error) {
      toast.error("Error deleting record");
    }
  };

  return (
    <div>
      <div className="details data">
        <div className="dataRecord">
          <RecordForm></RecordForm>
          <table id="myTable">
            <thead>
              <tr>
                <th>No.</th>
                <th>Location</th>
                <th>GPS</th>
                <th>Population</th>
                {/* <th>Date Added</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record.id}>
                  <td>{index + 1}</td>
                  <td>{record.RecordLocation}</td>
                  <td>{record.RecordGPS}</td>
                  <td>{record.RecordPopulation}</td>
                  {/* <td>{record.Date}</td> */}
                  <td>
                    <center>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <RecordEdit record={record} />{" "}
                        {/*this is the edit button */}
                        <button
                          style={{ marginLeft: "5px" }}
                          type="button"
                          className="btn btn-bad btn-delete"
                          onClick={() => handleDelete(record.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </center>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecordList;
