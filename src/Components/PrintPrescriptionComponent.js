import React from "react";

// Custom component for printing prescription
const PrintPrescriptionComponent = ({ prescriptionData }) => {
  console.warn(prescriptionData);
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Prescription Details
      </h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Day
            </th>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Time
            </th>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Meal
            </th>
          </tr>
        </thead>
        <tbody>
          {prescriptionData.map((prescription) => (
            <tr key={prescription.id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {prescription.name}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {prescription.day}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {prescription.morning ? "1 " : " 0 "}-
                {prescription.afternoon ? " 1 " : " 0 "}-
                {prescription.night ? " 1 " : " 0"}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {prescription.whentotake}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintPrescriptionComponent;
