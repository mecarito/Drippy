import React from "react";

export default function Navbar() {
  return (
    <div className="bg-primary text-white py-2 px-2 flex flex-row justify-between">
      <div className="flex flex-row gap-2">
        <span className="material-icons">menu</span>
        <span className="material-icons">home</span>
        <span className="material-icons">search</span>
      </div>
      <div className="flex flex-row gap-4">
        <span className="material-icons">add</span>
        <span className="material-icons">dark_mode</span>
        <span className="material-icons">help_outline</span>
        <span className="material-icons">notifications</span>
      </div>
    </div>
  );
}
