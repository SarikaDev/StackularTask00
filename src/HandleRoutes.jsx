import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import StackularTask00 from "./Pages/StackularTask00";

const HandleRoutes = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/task00" element={<StackularTask00 />} />
      </Routes>
    </>
  );
};

export default HandleRoutes;
