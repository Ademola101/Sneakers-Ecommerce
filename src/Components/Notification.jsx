import React from 'react';
import { useSelector } from 'react-redux';
import { NotificationStyle } from '../Styles/Notification.styles';
const Notification = () => {

  const message = useSelector(state => state.Notification.message);
  return (
    <div>
      <NotificationStyle>{message}</NotificationStyle>

    </div>
  );
};

export default Notification;
