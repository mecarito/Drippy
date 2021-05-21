import React, { useState, useMemo, useRef } from "react";
import "./App.css";

export default function App() {
  let [count, setcount] = useState(0);
  let [firstname, setfirstname] = useState("react is cool");
  // let [data, setdata] = useState("");
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  let [results] = useFetchdata();
  let sum = useMemo(() => () => a + b, [a, b]);
  const parentref = useRef(null);

  function getfirstname(event: any) {
    setfirstname(event.target.value);
  }

  function useFetchdata() {
    // useEffect(() => {
    //   async function fetchdata() {
    //     let response = await fetch("https://randomuser.me/api/");
    //     let info = response.json();
    //     await info.then((val) => setdata(val.results[0]));
    //   }

    //   fetchdata();
    // }, []);
    return [{ name: "james" }];
  }

  return (
    <>
      {console.log(sum(), a, b)}
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
                    <div className="col-span-6 sm:col-span-3" ref={parentref}>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        onChange={() => seta(a + 1)}
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
                        onChange={() => setb(b + 1)}
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
              onClick={() => console.log(parentref.current)}
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
