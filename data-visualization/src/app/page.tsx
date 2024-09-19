
'use client'; // Mark this file as a client-side component
import React from 'react';
import { useEffect, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';
import DashboardHome from './DashboardApp/page';


const App: React.FC = () => {
  return(
    <DashboardHome />
  )

}

export default App;