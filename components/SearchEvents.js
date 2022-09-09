import React from 'react'

export default function SearchEvents ({searchFunction}) {
  return (
    <div className="flex justify-start items-center md:px-0 px-5">
                <p className="mr-5 md:block">Search</p>

                <div className="flex ">
                  <div className="flex border-1 border-black rounded-lg  rounded-lg">
                    <input
                      type="text"
                      className="px-4 rounded-lg "
                      placeholder=""
                      onChange={(e)=>searchFunction(e.target.value)}
                    />
                    <button className="px-2 py-2 m-1 text-white bg-black-50  rounded">
                      <svg
                        width="24"
                        height="24"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5 15.5L19 19"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
  )
}
