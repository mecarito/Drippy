import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [visibility, setvisibility] = useState(false);

  function toggleDrawer(visibility: boolean) {
    setvisibility(visibility);
  }
  return (
    <>
      <div
        className="bg-primary text-white py-2 px-2 flex flex-row justify-between
      cursor-pointer items-center"
      >
        <div className="flex flex-row gap-2">
          <span className="material-icons" onClick={() => toggleDrawer(true)}>
            menu
          </span>
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
      <Drawer
        anchor={"left"}
        open={visibility}
        onClose={() => toggleDrawer(false)}
      >
        <Sidebar />
      </Drawer>
    </>
  );
}
