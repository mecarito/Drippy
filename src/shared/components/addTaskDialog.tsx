import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeAddTaskDialog } from "../reducers/taskdialog-reducer";
import { createTask } from "../reducers/createTask-reducer";

export default function Addtaskdialog() {
  const [disabled, setdisabled] = useState(true);
  const [task, settask] = useState("");

  const dispatch = useDispatch();

  function detectInput(event: any) {
    if (event.target.value) {
      setdisabled(false);
      settask(event.target.value);
    }
  }

  function saveTask() {
    dispatch(createTask(task));
    dispatch(closeAddTaskDialog());
  }

  return (
    <div className="flex flex-col p-4 gap-y-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-black">Quick Add Task</p>
        <span
          className="material-icons text-gray-400 cursor-pointer"
          onClick={() => dispatch(closeAddTaskDialog())}
        >
          close
        </span>
      </div>
      <div>
        <textarea
          rows={2}
          className="border-none ring-1 ring-gray-400 rounded-md focus:ring-gray-400"
          onInput={(event) => detectInput(event)}
        ></textarea>
      </div>
      <div>
        <button
          className="bg-primary text-white px-2 py-[4px] rounded-[4px]
           disabled:opacity-40"
          disabled={disabled}
          onClick={saveTask}
        >
          Add task
        </button>
      </div>
    </div>
  );
}
