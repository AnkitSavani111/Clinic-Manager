import React from 'react'
import Navbar from './Navbar'
import Homebody from './Homebody'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Appointment() {

  const timeslots = [
    { id: 1, time: '10:00 AM' },
    { id: 2, time: '10:30 AM' },
    { id: 3, time: '11:00 AM' },
    { id: 4, time: '4:00 PM' },
    { id: 5, time: '4:30 AM' },
    { id: 6, time: '5:00 AM' },
    { id: 7, time: '5:30 AM' },
    { id: 8, time: '6:00 AM' },
    { id: 9, time: '6:30 AM' },
    { id: 10, time: '7:00 AM' }
  ]

  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  tomorrow = tomorrow.toISOString().slice(0, 10);
  console.log(tomorrow);


  return (
    <>
      <section
        className="bg-slate-100 md:pt-7 object-top bg-cover"
      >
        <div className='backdrop-blur-sm bg-opacity-60'>
          <Navbar />

          <form className="space-y-8 divide-y divide-gray-200 p-20">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">

              <div className="space-y-6 sm:space-y-5">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                  {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Full name
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="mobile-no" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Mobile Number
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="family-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Email address
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="timeslot" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Select Date and Time
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0 flex space-x-8">
                      <select
                        id="timeslot"
                        name="timeslot"
                        autoComplete="timeslot"
                        className="w-32 block max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      >
                        {timeslots.map((timeslot) => (
                          <option key={timeslot.id}>{timeslot.time}</option>
                        ))}
                      </select>
                      <input className='max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm' type="date" id="birthday" name="birthday" min={tomorrow}></input>
                    </div>
                  </div>


                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Age
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        type="number"
                        name="age"
                        id="age"
                        autoComplete="address-level2"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Address
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <textarea
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block h-20 resize-y w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      // className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                  </div>


                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Verified your details ?</h3>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="verify-details"
                          name="verify-details"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="verify-details" className="font-medium text-gray-700">
                          Yes, I have verified my details
                        </label>
                        <p className="text-gray-500">You won't able to change anything once you filled the form</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <Link to={'/'}>

                  <button

                    type="button"
                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default Appointment