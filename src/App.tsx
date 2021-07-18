import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div>
      <h1> drippy </h1>
    </div>
  );
}
