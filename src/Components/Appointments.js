import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
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
