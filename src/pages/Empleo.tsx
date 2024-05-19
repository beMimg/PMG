import React from "react";
import meetingImg from "../assets/empleo-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";

const Empleo = () => {
  return (
    <TopSectionOfEveryRoute image={meetingImg}>
      <p>Empleo</p>
    </TopSectionOfEveryRoute>
  );
};

export default Empleo;
