/// <reference types="web-bluetooth" />

import React from "react";
import "./App.css";

export default function App() {
  function connection() {
    navigator.bluetooth
      .requestDevice({ filters: [{ services: ["battery_service"] }] })
      .then((device) => {
        /* … */
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function test() {
    let options = {
      filters: [
        { services: ["heart_rate"] },
        { services: [0x1802, 0x1803] },
        { services: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] },
        { name: "ExampleName" },
        { namePrefix: "Prefix" },
      ],
      optionalServices: ["battery_service"],
    };

    navigator.bluetooth
      .requestDevice(options)
      .then(function (device) {
        console.log("Name: " + device.name);
        // Do something with the device.
      })
      .catch(function (error) {
        console.log("Something went wrong. " + error);
      });
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-indigo-700 text-3xl font-semibold">
        Bluetooth connection
      </h1>
      <button
        className="py-4 px-16 text-white bg-indigo-700 w-15 text-lg rounded-lg"
        onClick={test}
      >
        Test
      </button>
      <button
        className="py-4 px-16 text-white bg-indigo-700 w-15 text-lg rounded-lg"
        onClick={connection}
      >
        Scan
      </button>
    </div>
  );
}
