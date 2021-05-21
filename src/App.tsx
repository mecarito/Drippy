import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  let [count, setcount] = useState(0);
  let [firstname, setfirstname] = useState("");

  function names(name: string) {
    return { name };
  }

  const { name } = names("mary");

  function getfirstname(event: any) {
    setfirstname(event.target.value);
  }

  useEffect(() => {
    document.title = firstname;
    console.log(name);
    return () => {
      setfirstname("");
    };
  });

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        onChange={(e) => getfirstname(e)}
                        type="text"
                        placeholder="name"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="placeholder-green-600-500 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <h1> {count}</h1>
                <p> firstname is {firstname}</p>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
              </div>
            </form>
            <button
              onClick={() => setcount(count + 10)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
