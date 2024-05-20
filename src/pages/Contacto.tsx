import React from "react";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";
import meetingImg from "../assets/route-images/contacto-meeting.jpg";

const Contacto = () => {
  return (
    <TopSectionOfEveryRoute image={meetingImg}>
      <p>Contacto</p>
    </TopSectionOfEveryRoute>
  );
};

export default Contacto;
