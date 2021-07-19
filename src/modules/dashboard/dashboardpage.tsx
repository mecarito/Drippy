import React from "react";
import Navbar from "../../shared/components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { openAddTaskDialog } from "../../shared/reducers/taskdialog-reducer";

export default function Dashboardpage() {
  const dispatch = useDispatch();
  const tasks: [] = useSelector((state: any) => state.createtask.tasks);
  const Todaydate = new Date().toDateString();

  function opendialog() {
    dispatch(openAddTaskDialog());
  }

  return (
    <div>
      <Navbar />
      <div className="mt-20 px-12 flex flex-col gap-y-4">
        <div className="flex flex-row space-x-2 items-center ">
          <h1 className="text-2xl font-medium  text-black">Today</h1>
          <p className="text-sm text-gray-500">{Todaydate}</p>
        </div>
        {/* <div> */}
        {tasks.map((task) => {
          return (
            <div
              key={task}
              className="flex flex-row space-x-4 items-start mb-2"
            >
              <div>
                <div className="w-4 h-4 rounded-full ring-1 ring-gray-500 mt-2"></div>
              </div>
              <p className="overflow-y-auto">{task}</p>
            </div>
          );
        })}
        {/* </div> */}
        <button
          className="flex flex-row space-x-2 focus:outline-none
        cursor-pointer "
          onClick={opendialog}
        >
          <span className="material-icons text-primary">add</span>
          <p className="text-gray-500 hover:text-primary">Add task</p>
        </button>
      </div>
    </div>
  );
}
