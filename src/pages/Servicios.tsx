import React from "react";
import meetingImg from "../assets/servicios-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";

const Servicios = () => {
  return (
    <TopSectionOfEveryRoute image={meetingImg}>
      <p>Servicios</p>
    </TopSectionOfEveryRoute>
  );
};

export default Servicios;
