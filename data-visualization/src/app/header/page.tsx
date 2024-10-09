"use client";
import React, { useState } from 'react';

export default function Header() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-between pt-1 h-14 shadow-md fixed z-100 bg-white header pl-40">
        {/* Left Side Links */}
        <div className="flex gap-10 ">
          <a href="" className="hover:text-orange-900">
            <h1>Dashboard</h1>
          </a>
          <a href="" className="hover:text-orange-900">
            <h1>Leave</h1>
          </a>
          <a href="" className="hover:text-orange-900">
            <h1>Attendance</h1>
          </a>
          <a href="" className="hover:text-orange-900">
            <h1>Performance</h1>
          </a>
        </div>

        {/* Right Side: Search + Notifications */}
        <div className="flex items-center gap-6 mr-18">
          {/* Search Input */}
          <div className="relative search">
            <input
              type="text"
              placeholder="Enter employee name"
              className="border border-gray-300 rounded-full py-2 px-4 w-80 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <i className="fa-solid fa-search absolute top-2 right-3 text-gray-400"></i>
          </div>

          {/* Company Name */}
          <div>
            <h1 className="text-lg font-bold ml-26 text-purple-950">JNTUK</h1>
          </div>

          {/* Notifications and Profile */}
          <div className="flex items-center gap-6">
            <a href="" className="flex items-center mr-6">
              <i className="fa-sharp fa-regular fa-bell text-xl font-bold text-slate-400"></i>
            </a>
            <a href="" className="flex items-center mr-6">
              <i className="fa-sharp fa-regular fa-envelope text-xl font-bold text-slate-400"></i>
            </a>
            <img
              src="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6864.jpg"
              alt="girl"
              className="w-8 h-8 rounded-full mr-1.5 inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
