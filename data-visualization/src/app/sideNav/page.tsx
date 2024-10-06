"use client";
import React, { useState } from 'react';
import Header from '../header/page';

interface NavItem {
  icon: string;
  label: string;
  path?: string; // Optional path for navigation
}
interface MenuItem {
  title: string;
  icon: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'fa-solid fa-border-all',
  },
  {
    title: 'Professors',
    icon: 'fa-solid fa-chalkboard-user',
    subItems: [
      {
        title: 'Professors List',
        icon: 'fa-solid fa-code-commit',
      },
      {
        title: 'Professors Details',
        icon: 'fa-solid fa-code-commit',
      },
    ],
  },
  {
    title: 'Students',
    icon: "fa-solid fa-user",
    subItems: [
      {
        title: 'Students List',
        icon: 'fa-solid fa-code-commit',
      },
      {
        title: 'Students Details',
        icon: 'fa-solid fa-code-commit',
      },
    ],
  },
  {
    title: 'Departments',
    icon: "fa-solid fa-building",
  },
  {
    title: 'Chat',
    icon: "fa-solid fa-comment",
  },
  {
    title: 'Leave',
    icon: 'fa-solid fa-border-all',
  },
  {
    title: 'Attendance',
    icon: "fa-solid fa-clipboard-user",
  },
  {
    title: 'Performance',
    icon: "fa-solid fa-chart-simple",
  },
];

const Sidenav: React.FC = () => {
  const navItems: NavItem[] = [
    { icon: "fa-user-graduate", label: "Students", path: "./StudentGrid" },
    { icon: "fa-trophy", label: "Academic Achievers" },
    { icon: "fa-exclamation-triangle", label: "Academic Deficiencies" },
    { icon: "fa-chalkboard-teacher", label: "Faculty" },
    { icon: "fa-money-bill-wave", label: "Fee Collection" },
    { icon: "fa-piggy-bank", label: "Budget" },
    { icon: "fa-book", label: "Courses" },
    { icon: "fa-user", label: "Account Details" },
    { icon: "fa-users-cog", label: "Manage Accounts" },
    { icon: "fa-sign-out-alt", label: "Logout" }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }));
  };

 

  return (
    <div>
      <div>
      <nav className="flex pl-2 flex-col items-center gap-10 w-fit p-4 bg-white shadow-lg border h-screen text-2xl fixed text-slate-700">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href={item.path} className="flex items-center">
              <i className={`fa-solid ${item.icon} cursor-pointer group-hover:text-orange-900`}></i>
            </a>
            {/* Tooltip */}
            {hoveredIndex === index && (
              <span className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded-lg transition-all duration-300">
                {item.label}
              </span>
            )}

          </div>
        ))}
      </nav>
      </div>
      <div className="w-1/5 flex flex-col items-start space-y-10 p-20 bg-white shadow-lg border h-screen text-2xl fixed text-slate-700 rounded-2xl">
        <div className='w-full flex justify-center'>
          <div className='w-1/4  h-42 box-content'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Jntuk-logo.png/220px-Jntuk-logo.png' alt='logo' className='w-52'></img>
          </div>
          <div className='h-14  box-content w-min flex items-center'>
            <h1 className="text-2xl font-bold  ">JNTUK</h1>
          </div>
        </div>
        <div className="w-full">
          <ul>
            <li className='text-xl font-semibold  hover:text-orange-500'>Main Menu</li>
            {menuItems.map(item => (
              <li key={item.title} className="pt-6">
                <a href="#" className="flex items-center text-lg hover:text-orange-500" onClick={() => item.subItems ? toggleMenu(item.title) : null}>
                  <i className={item.icon}></i>
                  <span className="ml-4 text-xl">{item.title}</span>
                  {item.subItems && (
                    <span className="flex items-center transition-transform duration-300 ml-auto text-sm">
                      <i className={`fa fa-angle-right ${openMenus[item.title] ? 'rotate-90 ' : ''}`}></i>
                    </span>
                  )}
                </a>
                {item.subItems && openMenus[item.title] && (
                  <ul className="treeview-menu pl-4 bg-gray-50 rounded-b-lg">
                    {item.subItems.map(subItem => (
                      <li key={subItem.title}>
                        <a href="#" className="flex items-center p-2 text-lg">
                          <i className={`${subItem.icon} mr-2 text-sm`}></i>
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

