import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Layout, Menu, Form, Input } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  ProjectOutlined,
  FileTextOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { icphack_backend } from 'declarations/icphack_backend';
import '../../styles/dashboardLayout.css';
import CreateProject from '../../components/form/CreateProject';
import ProjectsList from '../../components/list/ProjectList';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { TextArea } = Input;

const Dashboard = ({ user }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();

  const isCreateProject = location.pathname === '/dashboard/create-projects';

  const handleMenuClick = (e) => {
    if (e.key === '6') {
      navigate('/dashboard/create-projects');
    } else if (e.key === '8') {
      navigate('/dashboard/projects');
    } else {
      navigate('/dashboard');
    }
  };

  const handleFileUpload = (info, fieldName) => {
    const { status } = info.file;
    if (status === 'done') {
      const reader = new FileReader();
      reader.onload = (e) => {
        // const blob = new Blob([e.target.result], { type: info.file.type });
        const blob = new Blob([e.target.result]);
        form.setFieldsValue({
          [fieldName]: blob
        });
        message.success(`${info.file.name} file uploaded successfully.`);
      };
      reader.readAsArrayBuffer(info.file.originFileObj);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = async (values) => {
    console.log('Form values:', values);
    console.log("🚀 ~ onFinish ~ values:", values)

    try {
      const createProjectRes = await icphack_backend.createProject({
        ...values,
        id: uuidv4()
      })
      console.log("🚀 ~ onFinish ~ createProjectRes:", createProjectRes)
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const renderContent = () => {
    return (
      <Routes>
        <Route path="projects" element={<ProjectsList />} />
        <Route path="create-projects" element={<CreateProject />} />
        <Route path="/" element={
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '8px' }}>Welcome to the Dashboard</h1>
            <p>Select an option from the menu to view details.</p>
          </div>
        } />
      </Routes>
    );
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        style={{ background: '#000000', marginTop: "60px" }}
      >
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          style={{ background: '#000000' }}
          onClick={handleMenuClick}
        >
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
      <Layout className="site-layout mt-[60px]">
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, background: '#ffffff' }}>
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;