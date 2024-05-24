import React from "react";
import meetingImg from "../assets/route-images/empleo-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/HeroSection";

const Empleo = () => {
  return (
    <TopSectionOfEveryRoute image={meetingImg}>
      <p>Empleo</p>
    </TopSectionOfEveryRoute>
  );
};

export default Empleo;
