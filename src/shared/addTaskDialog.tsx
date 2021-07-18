import React, { useState } from "react";

export default function Addtaskdialog() {
  const [disabled, setdisabled] = useState(true);
  function detectInput(event: any) {
    if (event.target.value) {
      setdisabled(false);
    }
  }
  return (
    <div className="flex flex-col p-4 gap-y-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-black">Quick Add Task</p>
        <span className="material-icons text-gray-400 ">close</span>
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
        >
          Add task
        </button>
      </div>
    </div>
  );
}
