import React from 'react';
import { Table, Typography } from 'antd';

const { Title } = Typography;

const ProjectsList = () => {
  const projects = [
    { id: 1, name: 'John Doe', projectName: 'Website Redesign', fee: 5000, documents: 'contract.pdf' },
    { id: 2, name: 'Jane Smith', projectName: 'Mobile App Development', fee: 10000, documents: 'specs.docx' },
    { id: 3, name: 'Bob Johnson', projectName: 'SEO Optimization', fee: 2000, documents: 'report.pdf' },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      key: 'fee',
      render: (fee) => `$${fee.toLocaleString()}`,
    },
    {
      title: 'Documents',
      dataIndex: 'documents',
      key: 'documents',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ color: '#39FF14', marginBottom: '24px' }}>Projects List</Title>
      <Table 
        columns={columns} 
        dataSource={projects} 
        rowKey="id"
        pagination={{ 
          pageSize: 10,
          showSizeChanger: false,
        }}
      />
      <style jsx>{`
        :global(.ant-table) {
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }
        :global(.ant-table-thead > tr > th) {
          background: #f0f0f0;
          color: #333;
        }
        :global(.ant-table-tbody > tr > td) {
          border-bottom: 1px solid #f0f0f0;
        }
        :global(.ant-table-tbody > tr:hover > td) {
          background: #f9f9f9;
        }
        :global(.ant-pagination-item-active) {
          border-color: #39FF14;
        }
        :global(.ant-pagination-item-active a) {
          color: #39FF14;
        }
      `}</style>
    </div>
  );
};

export default ProjectsList;