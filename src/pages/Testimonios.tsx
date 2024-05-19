import React from "react";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";
import meetingImg from "../assets/testimonios-meeting.jpg";

const Testimonios = () => {
  return (
    <TopSectionOfEveryRoute image={meetingImg}>
      <p>Testimonios</p>
    </TopSectionOfEveryRoute>
  );
};

export default Testimonios;
