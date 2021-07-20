import React, { useState } from "react";
import Navbar from "../../shared/components/navbar";
import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { openAddTaskDialog } from "../../shared/reducers/taskdialog-reducer";

export default function Dashboardpage() {
  const dispatch = useDispatch();
  const tasks: [] = useSelector((state: any) => state.createtask.tasks);
  const Todaydate = new Date().toDateString();
  const [snackbar, setsnackbar] = useState(false);

  function opendialog() {
    dispatch(openAddTaskDialog());
  }

  function deleteTask() {
    setsnackbar(true);
  }
  function closeSnackbar() {
    setsnackbar(false);
  }

  return (
    <div>
      <Navbar />
      <div className="mt-20 px-12 flex flex-col gap-y-4">
        <div className="flex flex-row space-x-2 items-center ">
          <h1 className="text-2xl font-medium  text-black">Today</h1>
          <p className="text-sm text-gray-500">{Todaydate}</p>
        </div>
        {tasks.map((task: string) => {
          return (
            <div
              key={task.split(" ")[0]}
              className="flex flex-row space-x-4 items-start mb-2"
            >
              <div onClick={deleteTask}>
                <div className="w-4 h-4 rounded-full ring-1 ring-gray-500 mt-[6px]"></div>
              </div>
              <p className="overflow-y-auto">{task}</p>
            </div>
          );
        })}
        <button
          className="flex flex-row space-x-2 focus:outline-none
        cursor-pointer "
          onClick={opendialog}
        >
          <span className="material-icons text-primary">add</span>
          <p className="text-gray-500 hover:text-primary">Add task</p>
        </button>
      </div>
      <Snackbar
        open={snackbar}
        autoHideDuration={2500}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <div
          className="flex flex-row items-center justify-between gap-x-12
        bg-white py-2 px-2"
        >
          <p> 1 item completed</p>
          <div className="gap-x-2 flex flex-row items-center">
            <p className="text-primary font-medium">undo</p>
            <span
              className="material-icons text-gray-400 cursor-pointer"
              onClick={closeSnackbar}
            >
              close
            </span>
          </div>
        </div>
      </Snackbar>
    </div>
  );
}
