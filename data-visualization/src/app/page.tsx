"use client";

import Image from "next/image";
import DashboardHome from "./DashboardApp/page";
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import '../app/globals.css';
import { useState, useEffect } from 'react';
import { Spin } from 'antd';  // Import Ant Design's Spin component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
    {loading ? (
      // Show loading screen
      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh'
      }}>
        <Spin size="large" className="custom-spinner" tip="Loading..." />  {/* Ant Design's animated spinner */}
      </div>
    ) : (
      <ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
      <DashboardHome></DashboardHome>
    </ConfigProvider>
    )}
  </div>


  );
}
