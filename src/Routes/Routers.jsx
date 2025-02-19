import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../Home";
import About from '../Components/About';
import ALL_Taskes from '../Task_Pages/ALL_Taskes';
import Profile from '../Task_Pages/Profile';
import TaskPage from '../Task_Pages/TaskPage';
import Dashboard from '../Components/Taskpage/Dashboard';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>} />
      {/* task dashboard */}
      <Route path="/task" element={<TaskPage></TaskPage>}>
        <Route  path='dashboard' element={<Dashboard></Dashboard>} />
        <Route  path='all_task' element={<ALL_Taskes></ALL_Taskes>} />
        <Route path="user_profile" element={<Profile></Profile>} />


      </Route>

    </Routes>
  );
};

export default Routers;