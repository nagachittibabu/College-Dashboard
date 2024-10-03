
"use client";
import React, { useState } from 'react';

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

const MenusideNav: React.FC = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (title: string) => {
        setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className="w-1/5 flex flex-col items-start gap-10 p-4 bg-white shadow-lg border h-screen text-2xl fixed text-slate-700 rounded-2xl ml-6">
            <div className='w-full'>
                <h1 className="text-3xl font-bold text-center">JNTUK</h1>
            </div>
            <div className="w-full">
                <ul>
                    <li className='text-2xl font-semibold  hover:text-orange-200'>Main Menu</li>
                    {menuItems.map(item => (
                        <li key={item.title} className="pt-4">
                            <a href="#" className="flex items-center  hover:text-orange-200" onClick={() => item.subItems ? toggleMenu(item.title) : null}>
                                <i className={item.icon}></i>
                                <span className="ml-4 text-xl">{item.title}</span>
                                {item.subItems && (
                                    <span className="flex items-center transition-transform duration-300 ml-auto text-xl">
                                        <i className={`fa fa-angle-right ${openMenus[item.title] ? 'rotate-90' : ''}`}></i>
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
    );
};

export default MenusideNav;