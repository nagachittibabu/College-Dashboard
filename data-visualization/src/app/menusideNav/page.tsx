"use client";
import React, { useState } from 'react';

interface MenuItem {
    title: string;
    icon: string;
    subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: 'fa-solid fa-border-all' },
    { title: 'Professors', icon: 'fa-solid fa-chalkboard-user', subItems: [{ title: 'Professors List', icon: 'fa-solid fa-code-commit' }, { title: 'Professors Details', icon: 'fa-solid fa-code-commit' }] },
    { title: 'Students', icon: "fa-solid fa-user", subItems: [{ title: 'Students List', icon: 'fa-solid fa-code-commit' }, { title: 'Students Details', icon: 'fa-solid fa-code-commit' }] },
    { title: 'Departments', icon: "fa-solid fa-building" },
    { title: 'Chat', icon: "fa-solid fa-comment" },
    { title: 'Leave', icon: 'fa-solid fa-border-all' },
    { title: 'Attendance', icon: "fa-solid fa-clipboard-user" },
    { title: 'Performance', icon: "fa-solid fa-chart-simple" },
];


const MenusideNav: React.FC<{ isOpen: boolean; isMinimized: boolean }> = ({ isOpen, isMinimized }) => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (title: string) => {
        setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className={`fixed top-0 left-0 h-screen transition-width duration-300 bg-white shadow-lg border ${isOpen ? (isMinimized ? 'w-16' : 'w-1/5') : 'w-0 overflow-hidden'}`}>
            <div className='flex flex-col items-start space-y-10 p-4 pt-20'>
                <div className='w-full flex justify-center'>
                    <div className='w-1/4 h-42 box-content'>
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Jntuk-logo.png/220px-Jntuk-logo.png' alt='logo' className={`w-52 ${isMinimized ? 'block w-52 ' : ''}`} />
                    </div>
                    <div className='h-14 box-content w-min flex items-center'>
                        <h1 className={`text-2xl font-bold ${isMinimized ? 'hidden ' : ''}`}>JNTUK</h1>
                    </div>
                </div>
                <div className="w-full">
                    <ul>
                        <li className={`text-xl font-semibold hover:text-orange-200 ${isMinimized ? 'hidden ' : ''} `}>Main Menu</li>
                        {menuItems.map(item => (
                            <li key={item.title} className="pt-6">
                                <a href="#" className="flex items-center text-lg hover:text-orange-200" onClick={() => item.subItems ? toggleMenu(item.title) : null}>
                                    <i className={item.icon} ></i>
                                    <span className={`ml-4 text-xl ${isMinimized ? 'hidden' : ''}`}>{item.title}</span>
                                    {item.subItems && (
                                        <span className={`flex items-center transition-transform duration-300 ml-auto text-sm ${isMinimized ? 'hidden ' : ''}`}>
                                            <i className={`fa fa-angle-right  ${openMenus[item.title] ? 'rotate-90 ' : ''}`}></i>
                                        </span>
                                    )}
                                </a>
                                {item.subItems && openMenus[item.title] && (
                                    <ul className="treeview-menu pl-4 bg-gray-50 rounded-b-lg">
                                        {item.subItems.map(subItem => (
                                            <li key={subItem.title}>
                                                <a href="#" className="flex items-center p-2 text-lg hover:text-orange-200">
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

export default MenusideNav;
