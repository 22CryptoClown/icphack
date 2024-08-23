import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button, message, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { AuthClient } from '@dfinity/auth-client';

const DetailUser = ({ visible, onClose, user, onUpdate }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [userPrincipal, setUserPrincipal] = useState("");

  const handleOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      await onUpdate(values);
      onClose();
    } catch (error) {
      console.error('Validation failed Update User:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getId = async () => {
      const authClient = await AuthClient.create();
      const identity = authClient.getIdentity();
      const principal = identity.getPrincipal();
      setUserPrincipal(principal.toString());
    }
    getId();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(userPrincipal);
      message.success('Principal copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
      message.error('Failed to copy principal');
    }
  };

  return (
    <Modal
      open={visible}
      title="User Profile"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" style={{ background: '#000000', color: '#39FF14' }} loading={loading} onClick={handleOk}>
          Update
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          name: user.data[0]?.name,
          email: user.data[0]?.email,
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Principal" style={{ marginBottom: 0 }}>
          <Input 
            value={userPrincipal} 
            disabled 
            addonAfter={
              <Tooltip title="Copy to clipboard">
                <CopyOutlined onClick={copyToClipboard} style={{ cursor: 'pointer' }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DetailUser;