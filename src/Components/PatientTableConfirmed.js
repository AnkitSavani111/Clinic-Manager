import React from "react";
import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const getURL = process.env.REACT_APP_API;

function PatientTableConfirmed() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);
  const cancelButtonRef = useRef(null);

  const [people, setPeople] = useState([]);
  const [deletionID, setDeletionID] = useState(0);
  const [updationID, setUpdatetionID] = useState(0);
  const [scheduleID, setScheduleID] = useState(0);
  const [currentPatient, setCurrentPatient] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
//   const [nameError, setNameError] = useState("");
//   const [genderError, setGenderError] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [ageError, setAgeError] = useState("");
//   const [generalError, setGeneralError] = useState("");
//   const [addressError, setAddressError] = useState("");
  const nav = useNavigate();

  const timeslots = [
    { id: 1, time: "10:00 AM" },
    { id: 2, time: "10:30 AM" },
    { id: 3, time: "11:00 AM" },
    { id: 4, time: "4:00 PM" },
    { id: 5, time: "4:30 AM" },
    { id: 6, time: "5:00 AM" },
    { id: 7, time: "5:30 AM" },
    { id: 8, time: "6:00 AM" },
    { id: 9, time: "6:30 AM" },
    { id: 10, time: "7:00 AM" },
  ];

  const insert = () => {
    axios
      .get(getURL + "/patient")
      .then((response) => {
        console.log(response);
        setPeople(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    insert();
  }, []);

  const handleUpdate = (personId) => {
    axios
      .get(`${getURL}/patient/${personId}`)
      .then((response) => {
        console.log(response);
        setCurrentPatient(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setOpenEdit(true);
    setUpdatetionID(personId);
  };

  const handleSchedule = (personId) => {
    setOpenSchedule(true);
    setScheduleID(personId);
  };

  const scheduleRecord = (insertedData) => {
    axios
      .post(`${getURL}/patient/${scheduleID}`, insertedData)
      .then((response) => {
        console.log("Schduled succesfully : ", response);
        setOpenSchedule(false);
        handleShowToast("Patient scheduled successfully", "success");
      })
      .catch((error) => {
        console.log("error in scheduling : ", error);
        handleShowToast("Error scheduling patient", "error");
      });
  };

//   const validateForm = (data) => {
//     var isValid = true;
//     setNameError("");
//     setGenderError("");
//     setPhoneError("");
//     setEmailError("");
//     setAgeError("");
//     setGeneralError("");
//     setAddressError("");

//     // Validate fields
//     if (data.name === undefined || data.name === "") {
//       setNameError("Name is required");
//       isValid = false;
//     }
//     if (data.gender === undefined || data.gender === "") {
//       setGenderError("Gender is required");
//       isValid = false;
//     }
//     if (data.phone === undefined || data.phone === "") {
//       setPhoneError("Phone number is required");
//       isValid = false;
//     }
//     if (data.email === undefined || data.email === "") {
//       setEmailError("Email address is required");
//       isValid = false;
//     }
//     if (data.age === undefined || data.age === "") {
//       setAgeError("Age is required");
//       isValid = false;
//     }
//     if (data.address === undefined || data.address === "") {
//       setAddressError("Address is required");
//       isValid = false;
//     }
//     return isValid;
//   };

  const updateRecord = (changedData) => {
    // if (!validateForm(changedData)) {
    //   return;
    // }

    axios
      .put(`${getURL}/patient/${updationID}`, changedData)
      .then((response) => {
        console.log("Patient updated successfully:", response);
        setOpenEdit(false);
        setPeople((prevPeople) =>
          prevPeople.map((person) =>
            person._id === updationID ? { ...person, ...changedData } : person
          )
        );
        handleShowToast("Patient updated successfully", "success");
      })
      .catch((error) => {
        console.error("Error updating patient:", error);
        handleShowToast("Error updating patient", "error");
      });
  };

  const handleShowToast = (message, type) => {
    if (type === "error") {
      toast.error(message, {
        position: "bottom-center",
      });
      return;
    } else if (type === "success") {
      toast.success(message, {
        position: "bottom-center",
      });
      return;
    }
  };

  return (
    <div className="py-4">
      <div className="h-auto">
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <Toaster />
              <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">
                  Confirmed Details
                </h1>
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Mobile Number
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Gender
                          </th>
                          {/* <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Age
                          </th> */}
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Time Slot
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Reschedule
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {people.map((person, personIdx) => (
                          <tr
                            key={person._id}
                            className={
                              personIdx % 2 === 0 ? undefined : "bg-gray-50"
                            }
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {person.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.phone}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.gender}
                            </td>
                            {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                              {person.age}
                            </td> */}
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                              {/* {person.date_registration} */}
                              time from appointment table
                            </td>
                            <td className="relative text-blue-500 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                              <button
                                key={person._id}
                                onClick={() => handleSchedule(person._id)}
                              >
                                Reschedule
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Transition.Root show={openSchedule} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-30"
              initialFocus={cancelButtonRef}
              onClose={() => {
                setOpenSchedule(false);
                // setNameError("");
                // setGenderError("");
                // setPhoneError("");
                // setEmailError("");
                // setAgeError("");
                // setGeneralError("");
                // setAddressError("");
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:m-5 xl:mx-64">
                      <form
                        className="space-y-8 divide-y divide-gray-200 px-20 py-10"
                        onSubmit={(e) => {
                          e.preventDefault();
                          scheduleRecord();
                          //   {
                          //   name: document.getElementById("name").value,
                          //   phone: document.getElementById("phone").value,
                          //   email: document.getElementById("email").value,
                          //   age: document.getElementById("age").value,
                          //   address: document.getElementById("address").value,
                          // }
                        }}
                      >
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                          <div className="space-y-6 sm:space-y-5">
                            <div>
                              <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Patient Scheduling
                              </h3>
                              {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                            </div>
                            <div className="space-y-6 sm:space-y-5">
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Patient Name
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  
                                  <p className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm">
                                    Name fetch from DB
                                  </p>
                                  
                                </div>
                              </div>

                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="gender"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Dentist
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center space-x-4">
                                    {/*  */}
                                    services from table
                                   
                                  </div>
                                </div>
                              </div>

                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="phone"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Status
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  fixed ststus from table
                                  
                                </div>
                              </div>

                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Time Slots
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0 flex gap-x-5">
                                  <select
                                    id="timeslot"
                                    name="timeslot"
                                    autoComplete="timeslot"
                                    className="w-32 block max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    // onChange={handleData}
                                    // value={data.timeslot}
                                  >
                                    {timeslots.map((timeslot) => (
                                      <option key={timeslot.id}>
                                        {timeslot.time}
                                      </option>
                                    ))}
                                  </select>
                                  <button
                                    id="currentTime"
                                    name="currentTime"
                                    onClick={(time)=>{
                                      time.preventDefault();
                                      document.getElementById("timeslot").value = new Date().toLocaleTimeString();
                                    }}
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Current time
                                  </button>
                                  
                                </div>
                              </div>

                              

                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 py-3 flex flex-row-reverse px-6 rounded-xl gap-x-5">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              updateRecord(currentPatient);
                            }}
                            type="submit"
                            disabled={isUpdating}
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            {isUpdating ? "Scheduling..." : "Schedule"}
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenSchedule(false);
                            }}
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>

        </>
      </div>
    </div>
  );
}

export default PatientTableConfirmed;
