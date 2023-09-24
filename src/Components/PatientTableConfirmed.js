import React from "react";
import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
const getURL = process.env.REACT_APP_API;

function PatientTableConfirmed() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);
  const cancelButtonRef = useRef(null);

  const [appointments, setAppointments] = useState([]);
  const [deletionID, setDeletionID] = useState(0);
  const [updationID, setUpdatetionID] = useState(0);
  const [scheduleID, setScheduleID] = useState(0);
  const [currentPatient, setCurrentPatient] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const nav = useNavigate();



  const [host_ip, setHost_ip] = useState("");

  axios.get(process.env.REACT_APP_API + "/user/ip").then((res) => {
    setHost_ip(res.data.ip);
  });
  const socket = io(`http://${host_ip}:4000`);

  socket.on("appointment", (data) => {
    console.log(data);
    getAppointments();
  });
  async function getAppointments() {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API + "/appointment"
      );
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAppointments();
  }, []);

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
      .get(getURL + "/appointment")
      .then((response) => {
        console.warn(response.data[0].patient);
        setAppointments(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    insert();
  }, []);

  const handleSchedule = (personId) => {
    setOpenSchedule(true);
    setScheduleID(personId);
  };


  return (
    <div className="py-4">
      <div className="h-auto">
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
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
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Time
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
                        {appointments.map((person, personIdx) => (
                          <tr
                            key={person._id}
                            className={
                              personIdx % 2 === 0 ? undefined : "bg-gray-50"
                            }
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {person.patient.name || "-"}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.patient.phone || "-"}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                              {person.timestamp ? new Date(person.timestamp).toLocaleDateString() : "Not Scheduled"}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                              {person.timestamp ? new Date(person.timestamp).toLocaleTimeString() : "Not Scheduled"}
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
        </>
      </div>
    </div>
  );
}

export default PatientTableConfirmed;
