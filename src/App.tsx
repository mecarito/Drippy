/// <reference types="web-bluetooth" />

import React from "react";
import "./App.css";

export default function App() {
  function connection() {
    navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
        optionalServices: ["battery_service"], // Required to access service later.
      })
      .then((device) => {
        /* … */
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-indigo-700 text-3xl font-semibold">
        Bluetooth connection
      </h1>
      <button
        className="py-4 px-16 text-white bg-indigo-700 w-15 text-lg rounded-lg"
        onClick={connection}
      >
        All devices
      </button>
    </div>
  );
}
