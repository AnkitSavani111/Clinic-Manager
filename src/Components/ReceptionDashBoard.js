import React from "react";
import RecNav from "./RecNav";
import RecSide from "./RecSide";
import RecBody from "./RecBody";

const ReceptionaDashBoard = () => {
  return (
    <>
    <div className="">
      <RecNav />
      <div className="">
        <RecSide />
        <RecBody />
      </div>
    </div>
    </>
  );
};

export default ReceptionaDashBoard;
