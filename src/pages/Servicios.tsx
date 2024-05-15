import React from "react";
import meetingImg from "../assets/servicios-meeting.jpg";

const Servicios = () => {
  return (
    <img
      src={meetingImg}
      alt=""
      className={`absolute left-0 top-0 -z-10 h-screen w-full   object-cover object-center`}
      style={{
        filter: "brightness(0.2)",
      }}
    />
  );
};

export default Servicios;
