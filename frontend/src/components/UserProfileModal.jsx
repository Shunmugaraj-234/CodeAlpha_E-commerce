import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const UserProfileModal = () => {
  const {
    isProfileOpen,
    closeProfile,
    user,
    logout,
    updateProfile,
    changePassword,
    openOrders
  } = useShop();

  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'edit' | 'security'

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [msg, setMsg] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  if (!isProfileOpen || !user) return null;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setMsg({ text: '', type: '' });
    setLoading(true);
    const res = await updateProfile(name, phone);
    setLoading(false);
    if (res.success) {
      setMsg({ text: 'Profile updated successfully!', type: 'success' });
    } else {
      setMsg({ text: res.error || 'Update failed', type: 'error' });
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMsg({ text: '', type: '' });
    if (newPassword !== confirmNewPassword) {
      setMsg({ text: 'New passwords do not match', type: 'error' });
      return;
    }
    if (newPassword.length < 6) {
      setMsg({ text: 'New password must be at least 6 characters', type: 'error' });
      return;
    }
    setLoading(true);
    const res = await changePassword(oldPassword, newPassword);
    setLoading(false);
    if (res.success) {
      setMsg({ text: 'Password changed successfully!', type: 'success' });
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      setMsg({ text: res.error || 'Password change failed', type: 'error' });
    }
  };

  return (
    <div className="modal-overlay" onClick={closeProfile}>
      <div className="profile-card fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeProfile}>✕</button>

        <div className="profile-header">
          <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <span className="role-tag">{user.role === 'admin' ? '🛡️ Administrator' : '🌱 Registered Gardener'}</span>
        </div>

        <div className="profile-nav">
          <button
            className={activeTab === 'details' ? 'active' : ''}
            onClick={() => { setActiveTab('details'); setMsg({ text: '', type: '' }); }}
          >
            Account Details
          </button>
          <button
            className={activeTab === 'edit' ? 'active' : ''}
            onClick={() => { setActiveTab('edit'); setMsg({ text: '', type: '' }); }}
          >
            Edit Profile
          </button>
          <button
            className={activeTab === 'security' ? 'active' : ''}
            onClick={() => { setActiveTab('security'); setMsg({ text: '', type: '' }); }}
          >
            Change Password
          </button>
        </div>

        {msg.text && (
          <div className={`msg-banner ${msg.type}`}>
            {msg.text}
          </div>
        )}

        {activeTab === 'details' && (
          <div className="tab-content">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Full Name</span>
                <span className="info-value">{user.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email Address</span>
                <span className="info-value">{user.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone Number</span>
                <span className="info-value">{user.phone || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Account Role</span>
                <span className="info-value">{user.role}</span>
              </div>
            </div>

            <div className="profile-actions">
              <button
                className="btn btn-outline flex-1"
                onClick={() => { closeProfile(); openOrders(); }}
              >
                📦 View My Orders
              </button>
              <button className="btn btn-accent flex-1" onClick={logout}>
                🚪 Logout
              </button>
            </div>
          </div>
        )}

        {activeTab === 'edit' && (
          <form className="tab-content profile-form" onSubmit={handleUpdateProfile}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Saving...' : 'Save Profile Changes'}
            </button>
          </form>
        )}

        {activeTab === 'security' && (
          <form className="tab-content profile-form" onSubmit={handleChangePassword}>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>New Password (min 6 chars)</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Updating Password...' : 'Update Password'}
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .profile-card {
          background: white;
          width: 100%;
          max-width: 480px;
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .profile-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .avatar {
          width: 64px;
          height: 64px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0 auto 0.75rem auto;
        }
        .profile-header h3 {
          font-size: 1.3rem;
          font-weight: 700;
        }
        .profile-header p {
          color: var(--color-text-light);
          font-size: 0.9rem;
        }
        .role-tag {
          display: inline-block;
          margin-top: 0.35rem;
          background: #dcfce7;
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }
        .profile-nav {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 1.25rem;
        }
        .profile-nav button {
          flex: 1;
          background: none;
          border: none;
          padding: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
          border-bottom: 2px solid transparent;
          cursor: pointer;
        }
        .profile-nav button.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .msg-banner {
          padding: 0.65rem 0.85rem;
          border-radius: 4px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        .msg-banner.success {
          background-color: #f0fdf4;
          color: #166534;
          border-left: 3px solid #16a34a;
        }
        .msg-banner.error {
          background-color: #fef2f2;
          color: #991b1b;
          border-left: 3px solid #ef4444;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
          background: #f8fafc;
          padding: 1rem;
          border-radius: 8px;
        }
        .info-item {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.75rem;
          color: var(--color-text-light);
          text-transform: uppercase;
        }
        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text);
        }
        .profile-actions {
          display: flex;
          gap: 0.75rem;
        }
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .form-group input {
          padding: 0.6rem 0.8rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.9rem;
        }
        .btn-block {
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.5rem;
        }
        .flex-1 { flex: 1; }
      `}</style>
    </div>
  );
};

export default UserProfileModal;
