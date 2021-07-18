import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-drawercolor h-screen flex flex-col px-8 py-4 mt-8">
      <div
        className="flex flex-row space-x-2 py-2 pr-24 pl-2 
      hover:bg-hover cursor-pointer rounded-md"
      >
        <span className="material-icons  text-blue-500">inbox</span>
        <p>Inbox</p>
      </div>
      <div
        className="flex flex-row space-x-2 py-2 pr-24 pl-2 
      hover:bg-hover cursor-pointer rounded-md"
      >
        <span className="material-icons text-green-500 ">
          insert_invitation
        </span>
        <p>Today</p>
      </div>
      <div
        className="flex flex-row space-x-2 py-2 pr-24 pl-2 
      hover:bg-hover cursor-pointer rounded-md"
      >
        <span className="material-icons text-purple-500">date_range</span>
        <p>Upcomming</p>
      </div>
    </div>
  );
}
