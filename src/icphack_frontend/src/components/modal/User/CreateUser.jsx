import { Modal } from 'antd';

export const CreateUser = ({ showModal}) => {
  return (
    <Modal
        title="Create User"
        open={showModal}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  )
}