import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);
}
