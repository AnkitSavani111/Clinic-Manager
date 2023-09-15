import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io(process.env.REACT_APP_SOCKET);
// Connect to your server

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  socket.on("appointment", (data) => {
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
    console.warn(process.env.REACT_APP_SOCKET);
  }, []);

  // Render your appointments list
  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={appointment._id}>
            <ul>{index}</ul>
            <ul>{appointment.status}</ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
