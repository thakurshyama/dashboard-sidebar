import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
// import '../Css/Table.css';

function GetApi() {
  const [isModalOpendelivered, setIsModalOpendelivered] = useState(false);
  const [isModalOpendelivered2, setIsModalOpendelivered2] = useState(false);
  const [isModalOpendelivered3, setIsModalOpendelivered3] = useState(false);
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const token = "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjBhNDMyZiIsInJvbGVJZCI6IjJmMjdlYjgyIiwicm9sZSI6Mywic3ViUm9sZSI6Nzc3LCJpYXQiOjE2NzYyODQwMzEsImV4cCI6MTY3ODg3NjAzMX0.JwUUGgBXLv4s0MmYEqMMGh-cMs4w1gNAq5rJEb4_trWAXEhMBkjw74UWTTq62SWH838AFf6CkxtB99HKHukoQ7gvjDbSJS5JLtLN7PoHcJqG_Fh_1nX0TphT24z0PElm3Mttz-bcGs_-qtWKLyX9ghchn7Fo7gPswo-a0q7G7qVUHEHoNUXp6vMO-EV6_8LOCntS-NN_8EIgkS805GmmNlb0VT7pW4fs4og8BCSctHT0oJbu4h7Zjs8cH3qlIu9p2JY0mHJjluFq7Iflj0C7DOKgU5KphIsZqfZ16-wWc6_vZ04d8wyUn23WzXHmEJ8T6n_tQFtXKcmJcJ-tcefKPI8qjTEFKu-200RmWHQL8kH1aud4v--QEKRLTCcD_uLgfbL64l9GNISuVO9Lq7yQ7MlNIZcEhSHUsXEKvkit2OMrsZq0hsRKj7yRSxa5QGylT0roDokuqXBYVyX7TT3z25CtUMiicdvgtQFykN4OHjjdBojonCCVHEwpuRMYUv2zNkMhsEVhdw63tUyFcWtL-CY3qSI-X78giNZCjeZJJxmSSQx68Vy8XL1XKMcUKUlvaOt_ByI1dmh1HqQW3CqnAFALMh4zvAfBlYPHoXjLJpHh-TPLUhUNx7c52kQj-_aD0ixKSqboLYXF4rIwuHz1onNAFy-Q5Y-LpA2OCl6mmBM";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const d = new Date();
        const res = await axios.get(
          `http://139.59.60.119:4777/v1/order/outlets?status=delivered&from=2023-01-19&to=${d.toDateString()}`,
          { headers: { Authorization: `Bearer ${token}` }, }
        );
        setUsers(res.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [token]);

  const handleOpenModal = (user) => {
    setUserData(user);
    setIsModalOpendelivered(true);
  };
  const handleOk = () => {
    setIsModalOpendelivered(false);
  };
  const handleCloseModal = () => {
    setIsModalOpendelivered(false);
  };


  const handleOpenModal2 = (user) => {
    setUserData(user);
    setIsModalOpendelivered2(true);
  };
  const handleOk2 = () => {
    setIsModalOpendelivered2(false);
  };
  const handleCloseModal2 = () => {
    setIsModalOpendelivered2(false);
  };

  
  const handleOpenModal3 = (user) => {
    setUserData(user);
    setIsModalOpendelivered3(true);
  };
  const handleOk3 = () => {
    setIsModalOpendelivered3(false);
  };
  const handleCloseModal3 = () => {
    setIsModalOpendelivered3(false);
  };

  return (
    <div className='New'>
      <h2 style={{ paddingLeft: '50px' }}>All Ready Order</h2>
      <table>
        <thead>
          <tr>
            <th style={{ fontSize: '18px' }}>Customer</th>
            <th style={{ fontSize: '18px' }}>order Id</th>
            <th style={{ fontSize: '18px' }}>Payment Id</th>
            <th style={{ fontSize: '18px' }}>status</th>
            <th style={{ fontSize: '18px' }}>outlet Id</th>
            <th style={{ fontSize: '18px' }}>Payment</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.orderId}>
              <td>
                <button className='modal-button' onClick={() => handleOpenModal(user)}>
                  {user.client.clientName}
                </button>
              </td>
              <td>{user.orderId}</td>
              <td>{user.mpOrderId}</td>
              <td>{user.status}</td>
              <td>
                <button className='modal-button' onClick={() => handleOpenModal3(user)}>
                  {user.outlet.outletId}
                </button>
              </td>
              <td>
                <button className='modal-button' onClick={() => handleOpenModal2(user)}>
                  {user.amount.totalAmount}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal title='User Information' open={isModalOpendelivered} onOk={handleOk} onCancel={handleCloseModal}>
        {userData && (
          <div>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>clientName:</span>{' '}
              {userData.client.clientName}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>userId:</span>{' '}
              {userData.client.clientId}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>phone:</span>{' '}
              {userData.client.clientPhone}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>userAddress:</span>{' '}
              {userData.client.clientAddress}
            </p>
          </div>
        )}
      </Modal>
      <Modal title='User Information' open={isModalOpendelivered2} onOk={handleOk2} onCancel={handleCloseModal2}>
        {userData && (
          <div>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>taxAmount:</span>{' '}
              {userData.amount.taxAmount}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>deliveryTip:</span>{' '}
              {userData.amount.deliveryTip}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>deliveryCharge:</span>{' '}
              {userData.amount.deliveryCharge}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>totalAmount:</span>{' '}
              {userData.amount.totalAmount}
            </p>
          </div>
        )}
      </Modal>
      <Modal title='User Information' open={isModalOpendelivered3} onOk={handleOk3} onCancel={handleCloseModal3}>
        {userData && (
          <div>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>outletId:</span>{' '}
              {userData.outlet.outletId}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>sellerId:</span>{' '}
              {userData.outlet.sellerId}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>outletName:</span>{' '}
              {userData.outlet.outletName}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>outletArea:</span>{' '}
              {userData.outlet.outletArea}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>outletAddress:</span>{' '}
              {userData.outlet.outletAddress}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>outletLongitude:</span>{' '}
              {userData.outlet.outletLongitude}
            </p>
            <p>
              <span style={{ fontSize: '18px', color: '#2BB380' }}>outletLatitude:</span>{' '}
              {userData.outlet.outletLatitude}
            </p>
          </div>
        )}
      </Modal>
    </div>
  )
}
export default GetApi;
