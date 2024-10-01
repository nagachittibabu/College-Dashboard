// export default function Modifiedsidenav () {
//     return (
//         <div className="flex pl-2 flex-col items-center gap-10 w-1/4 ml-6 p-4 bg-white shadow-lg border h-screen text-2xl fixed text-slate-700 rounded-2xl">
//             <div>
//                 <h1 className="text-4xl">JNTUK</h1>
//             </div>
//             <div className="float-left">
//                 <ul>
//                     <li>Main Menu</li>
//                     <li className="pt-4"> 
//                         <a href=" ">
//                         <i className="fa-solid fa-border-all "></i>
//                         <span className="ml-4">Dashboard</span>
//                         </a>
//                     </li>
//                      </ul>
//             </div>

//         </div>
//     )
// }
'use client';
import React from 'react';
import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

const text1 = `Professors List`;
const text2 = `Professors Details`;

const App: React.FC = () => (
    <div className="flex pl-2 flex-col items-center gap-10 w-1/4 ml-6 p-4 bg-white shadow-lg border h-screen text-2xl fixed text-slate-700 rounded-2xl">
        <div>
            <h1 className="text-4xl">JNTUK</h1>
        </div>
        <div className="mr-14">
            <ul>
                <li>Main Menu</li>
                <li className="pt-4">
                    <a href=" ">
                        <i className="fa-solid fa-border-all"></i>
                        <span className="ml-4">Dashboard</span>
                    </a>
                </li>
            </ul>
            <div className="pt-4">
                <TreeSelect
                    treeData={[
                        {
                            title: (
                                <span>
                                    <i className="fa-solid fa-user mr-4"></i>
                                    Professors
                                </span>
                            ),
                            value: 'professors',
                            key: '1',
                            children: [
                                {
                                    title: text1,
                                    value: 'professors-list',
                                    key: '1',
                                },
                                {
                                    title: text2,
                                    value: 'professors-details',
                                    key: '1-2',
                                },
                            ],
                        },
                    ]}
                    value="professors"
                    style={{ width: '100%' }}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }} // Optional: limit dropdown height
                    allowClear={true} // Allow clearing the selection
                    placeholder={null} // Remove the placeholder
                />
            </div>
        </div>
    </div>
);

export default App;