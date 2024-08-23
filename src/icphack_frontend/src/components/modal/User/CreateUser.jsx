
import { AuthClient } from '@dfinity/auth-client';
import { Button, Form, Input, Modal, Select } from 'antd';
import { icphack_backend } from 'declarations/icphack_backend';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export const CreateUser = ({
  showModal,
  setShowModal,
  inputUser,
  setInputUser,
  setUser,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    try {
      setLoading(true);
      const authClient = await AuthClient.create();
      const identity = authClient.getIdentity();
      let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));
  
      const loginRes = await icphack_backend.login({
        principal: principal,
        name: inputUser.name,
        isWorker: inputUser.isWorker,
        email: inputUser.email,
      });

      const selfRes = await icphack_backend.self(principal);
  
      if (selfRes?.error.length === 0) {
        setUser(selfRes);
        navigate('/dashboard');
        localStorage.setItem('principal', JSON.stringify(principal));
      }
    } catch (error) {
      console.error('Validation failed Create User:', error);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const handleChange = (name, value) => {
    if (name !== "role") {
      setInputUser({ ...inputUser, [name]: value });
    } else {
      setInputUser({ ...inputUser, isWorker: value === "Worker" });
    }
  }

  return (
    <Modal
      title="Create User"
      open={showModal}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" style={{ background: '#000000', color: '#39FF14' }} loading={loading} onClick={handleOk}>
          Create
        </Button>,
      ]}
    >
      <Form
        name="basic"
        layout="horizontal"
        autoComplete="off"
        className='mt-4'
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your Name!' }]}
        >
          <Input name='name' onChange={(e) => handleChange("name", e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input name='email' onChange={(e) => handleChange("email", e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please input your Role!' }]}
        >
          <Select
            placeholder="Select your role"
            onChange={(value) => handleChange("role", value)}
            allowClear
            name='role'
          >
            <Option value="Customer">Customer</Option>
            <Option value="Worker">Worker</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>

  )
}