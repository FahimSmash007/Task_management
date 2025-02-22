import React from 'react';
import { NavLink } from 'react-router-dom';
import Add_Category from './Add_Category';

const Sidebars = () => {
  return (
    <div className="flex flex-col items-center w-72 h-screen overflow-hidden text-gray-700 bg-gray-100 rounded">
      <NavLink
        to="/"
        className="flex items-center w-full px-3 mt-3"
      >
        <svg
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
        <span className="ml-2 text-sm font-bold">The App</span>
      </NavLink>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
         
          <SidebarItem
            to="all_task"
            iconPath="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            text="Task"
          />
          <SidebarItem
            to="docs"
            iconPath="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            text="Docs"
          />
        </div>
        <NavLink
        to="/account"
        className="flex  pl-3 items-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
      >
        <svg
          className="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-2 text-sm font-medium">Account</span>
      </NavLink>

        {/* <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
          <SidebarItem
            to="message"
            iconPath="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            text="Messages"
          />
        </div> */}
      </div>

      
    </div>
  );
};

const SidebarItem = ({ to, iconPath, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center w-full h-12 px-3 mt-2 rounded ${
          isActive ? 'bg-gray-300' : 'hover:bg-gray-300'
        }`
      }
    >
      <svg
        className="w-6 h-6 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
      </svg>
      <span className="ml-2 text-sm font-medium">{text}</span>
    </NavLink>
  );
};

export default Sidebars;
