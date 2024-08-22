import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  ProjectOutlined,
  FileTextOutlined,
  DollarOutlined,
  PlusOutlined,
  UploadOutlined,
  UnorderedListOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import '../../styles/dashboardLayout.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className='mt-[60px]'>
        <Sider 
          collapsible 
          collapsed={collapsed} 
          onCollapse={setCollapsed}
          style={{ background: '#000000' }}
        >
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ background: '#000000' }}>
            <Menu.Item key="1" icon={<DashboardOutlined />} style={{ background: '#39FF14', color: '#000000' }}>
              Dashboard
            </Menu.Item>
            {user.data[0]?.isWorker ? (
              <SubMenu key="worker" icon={<UserOutlined />} title="Worker">
                <Menu.Item key="6" icon={<PlusOutlined />}>Create new project</Menu.Item>
                <Menu.Item key="8" icon={<UnorderedListOutlined />}>List all projects</Menu.Item>
              </SubMenu>
            ) : (
              <SubMenu key="customer" icon={<UserOutlined />} title="Customer">
                <Menu.Item key="2" icon={<ProjectOutlined />}>List Projects</Menu.Item>
                <Menu.Item key="3" icon={<FileTextOutlined />}>Incoming request list</Menu.Item>
              </SubMenu>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', background: '#ffffff' }}>
              <h1 style={{ fontSize: '48px', marginBottom: '8px' }}>Welcome to the Dashboard</h1>
              <p>Select an option from the menu to view details.</p>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;