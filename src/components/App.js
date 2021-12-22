import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Courses from "./courses/Courses";
import CoursePage from "./courses/CoursePage";
import VideoPage from "./courses/VideoPage";
import Instructors from "./instructors/Instructors";
import Ambassdors from "./ambassdors/Ambassdors";
import OurTeam from "./our-team/OurTeam";
import Rewards from "./rewards/Rewards";

// fontawesome
// API
// const apiUrl = process.env.API_URL;

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:course_id" element={<CoursePage />} />
        <Route path="/courses/:course_id/:video_id" element={<VideoPage />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/ambassdors" element={<Ambassdors />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} position="top-left" />
    </Fragment>
  );
}

export default App;
