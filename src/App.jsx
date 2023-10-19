import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Records from "./Components/Records";
import Dashboard from "./Components/Dashboard";
import Visualization from "./Components/Visualization";
import LoginLogout from "./Components/LoginLogout";
import TestRecord from "./Components/TestRecord";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginLogout />} />"
          <Route path="/dashboard" element={<Dashboard />} />"
          <Route path="/records" element={<TestRecord />} />"
          <Route path="/Visualization" element={<Visualization />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
