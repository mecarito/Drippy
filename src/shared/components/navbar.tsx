import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./sidebar";
import Dialog from "@material-ui/core/Dialog";
import Addtaskdialog from "./addTaskDialog";
import { useSelector, useDispatch } from "react-redux";
import { openAddTaskDialog } from "../reducers/taskdialog-reducer";

export default function Navbar() {
  const addtask = useSelector((state: any) => state.openAddTaskDialog.value);
  const dispatch = useDispatch();

  const [visibility, setvisibility] = useState(false);

  function toggleDrawer(visibility: boolean) {
    setvisibility(visibility);
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
            onClick={() => dispatch(openAddTaskDialog())}
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
          className="material-icons absolute right-0 mr-4 mt-4 cursor-pointer"
          onClick={() => {
            toggleDrawer(false);
          }}
        >
          close
        </span>
        <Sidebar />
      </Drawer>
      <Dialog
        aria-labelledby="simple-dialog-toaddtask"
        open={addtask}
        className="rounded-lg"
      >
        <Addtaskdialog />
      </Dialog>
    </>
  );
}
