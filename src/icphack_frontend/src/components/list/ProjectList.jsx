import React, { useEffect, useState } from 'react';
import { Button, message, Table, Typography } from 'antd';
import { icphack_backend } from 'declarations/icphack_backend';
import { AuthClient } from '@dfinity/auth-client';
import { uint8ArrayToUuid } from '../../utils/Uint8ArrayToUuid';
import SubmitSupportDocs from '../form/SubmitSuportDocs';
import SubmitTextToSign from '../form/SubmitTextToSign';

const { Title } = Typography;

const ProjectsList = () => {
  const [projectList, setProjectList] = useState([]);
  const [userData, setUserData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [actionClick, setActionClick] = useState("");

  const getDataProjects = async () => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));

    const dataProjects = await icphack_backend.listProjects(principal);
    
    if (dataProjects.data.length !== 0) {
      setProjectList(dataProjects.data[0]);
    }

    const selfRes = await icphack_backend.self(principal);
    setUserData(selfRes);
  }

  useEffect(() => {
    getDataProjects();
  }, []);

  const handleSign = async (id) => {
    setModalVisible(true);
    setSelectedProjectId(id);
    setActionClick("sign");
    localStorage.setItem("idProject", id);
  }

  const handleSignSubmit = async (id) => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));

    const signRes = await icphack_backend.signProject(principal, uint8ArrayToUuid(selectedProjectId), id);

    if (signRes.data.length !== 0) {
      message.success(`Project has been successfully signed`);
      window.location.reload();
    } else {
      message.error(`Project has been failed to signed`);
    }
  }

  const handleSubmit = async (id) => {
    setModalVisible(true);
    setSelectedProjectId(id);
    setActionClick("submit");
    localStorage.setItem("idProject", id);
  }

  const handleSupportingDocumentsSubmit = async (base64Files) => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));

    const idFromStorage = localStorage.getItem("idProject");

    const finalizationProofRes = await icphack_backend.finalizationProof(
      principal,
      uint8ArrayToUuid(selectedProjectId ? selectedProjectId : idFromStorage),
      base64Files
    );

    if (finalizationProofRes.data.length !== 0) {
      message.success(`Project has been successfully submitted`);
      window.location.reload();
    } else {
      message.error(`Project has been failed to submitted`);
    }
  }

  const handleFinalize = async () => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));

    const finalizeContractRes = await icphack_backend.finalizeContract(principal, uint8ArrayToUuid(id));

    if (finalizeContractRes.data.length !== 0) {
      message.success(`Project has been successfully finnalized`);
      window.location.reload();
    } else {
      message.error(`Project has been failed to finnalized`);
    }
  }

  const handleModalCancel = () => {
    setModalVisible(false);
    setSelectedProjectId(null);
  };

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Fee',
      dataIndex: 'agreedFee',
      key: 'agreedFee',
      render: (fee) => `${fee}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, data) => {
        if (data.signedAt?.length === 0) {
          return 'Unsigned';
        } else if (data.signedAt?.length !== 0 && data.supportingDocuments?.length === 0) {
          return 'Signed';
        } else if (data.supportingDocuments?.length !== 0 && data.finalizedAt?.length === 0) {
          return 'Submitted';
        } else {
          return 'Finialized';
        }
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (action, data) => {
        if (data.signedAt?.length === 0) {
          return (
            <Button style={{ backgroundColor: 'yellow' }} onClick={() => handleSign(data.id)}>Sign</Button>
          );
        } else if (data.signedAt?.length !== 0 && data.supportingDocuments?.length === 0) {
          if (userData?.data[0]?.isWorker) {
            return (
              <Button type='primary' onClick={() => handleSubmit(data.id)}>Submit</Button>
            );
          } else {
            return (
              <Button disabled>Awaiting Worker</Button>
            );
          }
        } else if (data.supportingDocuments?.length !== 0 && data.finalizedAt?.length === 0) {
          if (userData?.data[0]?.isWorker) {
            return (
              <Button disabled>Awaiting Customer</Button>
            )
          } else {
            return (
              <Button style={{ backgroundColor: 'green' }} onClick={handleFinalize}>Finalize</Button>
            );
          }
        }
      },
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {actionClick === "submit" &&
      <SubmitSupportDocs
        visible={modalVisible}
        onCancel={handleModalCancel}
        onSubmit={handleSupportingDocumentsSubmit}
      />}

      {actionClick === "sign" &&
      <SubmitTextToSign
        visible={modalVisible}
        onCancel={handleModalCancel}
        onSubmit={handleSignSubmit}
      />}
      <Title level={2} style={{ color: '#39FF14', marginBottom: '24px' }}>Projects List</Title>
      <Table 
        columns={columns} 
        dataSource={projectList} 
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