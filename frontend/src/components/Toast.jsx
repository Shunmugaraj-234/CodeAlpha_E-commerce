import React from 'react';
import { useShop } from '../context/ShopContext';

const Toast = () => {
    const { notification } = useShop();

    if (!notification) return null;

    return (
        <div className="toast-container">
            <div className="toast">
                <span>{notification.message}</span>
            </div>
        </div>
    );
};

export default Toast;
