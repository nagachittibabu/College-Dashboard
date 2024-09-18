import Image from "next/image";
import DashboardHome from "./DashboardApp/page";
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Import reset CSS from Ant Design 5
import '../app/globals.css'; // Your global styles

export default function Home() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
    <DashboardHome></DashboardHome>
  </ConfigProvider>

  );
}
