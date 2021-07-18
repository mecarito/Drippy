import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./sidebar";
import Dialog from "@material-ui/core/Dialog";
import Addtaskdialog from "./addTaskDialog";

export default function Navbar() {
  const [visibility, setvisibility] = useState(false);
  const [dialogvisibility, setdialogvisibility] = useState(false);

  function toggleDrawer(visibility: boolean) {
    setvisibility(visibility);
  }
  function openandclosedialog(toggle: boolean) {
    setdialogvisibility(toggle);
  }

  return (
    <>
      <div
        className="bg-primary text-white py-2 px-2 flex flex-row justify-between
      cursor-pointer items-center fixed top-0 left-0 right-0"
      >
        <div className="flex flex-row gap-2">
          <span className="material-icons" onClick={() => toggleDrawer(true)}>
            menu
          </span>
          <span className="material-icons">home</span>
          <span className="material-icons">search</span>
        </div>
        <div className="flex flex-row gap-4">
          <span
            className="material-icons"
            onClick={() => openandclosedialog(true)}
          >
            add
          </span>
          <span className="material-icons">dark_mode</span>
          <span className="material-icons">help_outline</span>
          <span className="material-icons">notifications</span>
        </div>
      </div>
      <Drawer
        anchor={"left"}
        open={visibility}
        onClose={() => toggleDrawer(false)}
        className="fixed "
      >
        <span
          className="material-icons absolute right-0 mr-4 mt-4"
          onClick={() => {
            toggleDrawer(false);
          }}
        >
          close
        </span>
        <Sidebar />
      </Drawer>
      <Dialog
        onClose={() => openandclosedialog(false)}
        aria-labelledby="simple-dialog-toaddtask"
        open={dialogvisibility}
        className="rounded-lg"
      >
        <Addtaskdialog />
      </Dialog>
    </>
  );
}
