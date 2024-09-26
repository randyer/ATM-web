import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="fixed top-0 flex justify-between items-center w-full p-4 bg-black">
        <h1 className="text-white">Alton Therapeutic Massage</h1>
        <ul className="flex justify-between items-center gap-x-4 text-white">
          <li>
            <a href="#Treatments">Treatments</a>
          </li>
          <li>
            <a href="#Expectations">Expectations</a>
          </li>
          <li>
            <a href="#Reviews">Reviews</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Qualifications">Qualifications</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col justify-center items-center header w-full h-screen bg-black text-white">
        <h1>Craniosacral Therapy</h1>
        <h2>Healing through gentle touch</h2>
      </div>
    </>
  );
}

export default App;
