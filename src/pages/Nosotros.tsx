import React from "react";
import meetingImg from "../assets/nosotros-meeting.jpg";
import TopSectionOfEveryRoute from "../components/TopSectionOfEveryRoute";

const Nosotros = () => {
  return (
    <TopSectionOfEveryRoute image={meetingImg}>
      <p>Nosotros</p>
    </TopSectionOfEveryRoute>
  );
};

export default Nosotros;
