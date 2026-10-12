import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const AuthModal = () => {
  const { isAuthOpen, closeAuth, authMode, setAuthMode, login, register } = useShop();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!loginEmail || !loginPassword) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    setLoading(true);
    const res = await login(loginEmail, loginPassword);
    setLoading(false);
    if (!res.success) {
      setErrorMsg(res.error || 'Login failed');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!regName || !regEmail || !regPassword) {
      setErrorMsg('Name, email, and password are required.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }
    if (regPassword.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    setLoading(true);
    const res = await register(regName, regEmail, regPhone, regPassword, regConfirmPassword);
    setLoading(false);
    if (!res.success) {
      setErrorMsg(res.error || 'Registration failed');
    }
  };

  return (
    <div className="modal-overlay" onClick={closeAuth}>
      <div className="auth-card fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeAuth}>✕</button>

        <div className="auth-tabs">
          <button
            className={`tab-btn ${authMode === 'login' ? 'active' : ''}`}
            onClick={() => { setAuthMode('login'); setErrorMsg(''); }}
          >
            User Login
          </button>
          <button
            className={`tab-btn ${authMode === 'register' ? 'active' : ''}`}
            onClick={() => { setAuthMode('register'); setErrorMsg(''); }}
          >
            Create Account
          </button>
        </div>

        {errorMsg && <div className="error-banner">{errorMsg}</div>}

        {authMode === 'login' ? (
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full btn-lg" disabled={loading}>
              {loading ? 'Logging in...' : 'Sign In'}
            </button>

            <div className="auth-footer-text">
              Don't have an account?{' '}
              <span onClick={() => { setAuthMode('register'); setErrorMsg(''); }}>Register here</span>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={regPhone}
                onChange={(e) => setRegPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password (min 6 chars) *</label>
              <input
                type="password"
                placeholder="••••••••"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password *</label>
              <input
                type="password"
                placeholder="••••••••"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full btn-lg" disabled={loading}>
              {loading ? 'Creating Account...' : 'Register Account'}
            </button>

            <div className="auth-footer-text">
              Already registered?{' '}
              <span onClick={() => { setAuthMode('login'); setErrorMsg(''); }}>Log in here</span>
            </div>
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
        .auth-card {
          background: white;
          width: 100%;
          max-width: 440px;
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
        .auth-tabs {
          display: flex;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 1.5rem;
        }
        .tab-btn {
          flex: 1;
          background: none;
          border: none;
          padding: 0.75rem;
          font-weight: 700;
          font-size: 1rem;
          color: #64748b;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          transition: all 0.2s;
        }
        .tab-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .error-banner {
          background-color: #fef2f2;
          border-left: 4px solid #ef4444;
          color: #991b1b;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          font-size: 0.88rem;
          margin-bottom: 1.25rem;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-text);
        }
        .form-group input {
          padding: 0.65rem 0.85rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.95rem;
          outline: none;
        }
        .form-group input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15);
        }
        .w-full { width: 100%; }
        .btn-lg { padding: 0.85rem; font-size: 1rem; }
        .auth-footer-text {
          text-align: center;
          font-size: 0.88rem;
          color: var(--color-text-light);
          margin-top: 0.5rem;
        }
        .auth-footer-text span {
          color: var(--color-primary);
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
