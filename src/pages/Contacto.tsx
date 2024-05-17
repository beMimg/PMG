import React from "react";
import TopSectionOfEveryRoute from "../components/TopSectionOfEveryRoute";
import meetingImg from "../assets/contacto-meeting.jpg";

const Contacto = () => {
  return (
    <TopSectionOfEveryRoute image={meetingImg}>
      <p>Contacto</p>
    </TopSectionOfEveryRoute>
  );
};

export default Contacto;
