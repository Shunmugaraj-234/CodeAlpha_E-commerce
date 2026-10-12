import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';

const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    closeCheckout,
    cart,
    rawSubtotal,
    calculatedDiscount,
    discountedSubtotal,
    deliveryCharge,
    finalCartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    user,
    token,
    openAuth,
    placeOrder,
    lastConfirmedOrder,
    setLastConfirmedOrder,
    openOrders
  } = useShop();

  // Wizard Step: 1 = Address, 2 = Payment, 3 = Confirm & Review, 4 = Success
  const [currentStep, setCurrentStep] = useState(1);

  // Address State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'Cash on Delivery', 'UPI', 'Credit/Debit Card', 'Net Banking'
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Coupon Input State
  const [couponInput, setCouponInput] = useState('');

  // Loading & Validation State
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync user info into address fields when logged in
  useEffect(() => {
    if (user) {
      if (!fullName) setFullName(user.name || '');
      if (!email) setEmail(user.email || '');
      if (!phone) setPhone(user.phone || '');
    }
  }, [user]);

  // Sync step 4 if lastConfirmedOrder exists
  useEffect(() => {
    if (lastConfirmedOrder) {
      setCurrentStep(4);
    }
  }, [lastConfirmedOrder]);

  if (!isCheckoutOpen) return null;

  // Handle Close / Exit
  const handleCloseModal = () => {
    setLastConfirmedOrder(null);
    setCurrentStep(1);
    setErrorMsg('');
    closeCheckout();
  };

  // Step 1 -> Step 2 Validation
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (cart.length === 0) {
      setErrorMsg('Your shopping cart is empty. Please add products before checking out.');
      return;
    }

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile phone number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!address.trim()) {
      setErrorMsg('Please enter your street address / house details.');
      return;
    }
    if (!city.trim()) {
      setErrorMsg('Please enter your city/district.');
      return;
    }
    if (!state.trim()) {
      setErrorMsg('Please enter your state.');
      return;
    }
    if (!pincode.trim() || pincode.trim().length < 6) {
      setErrorMsg('Please enter a valid 6-digit PIN code.');
      return;
    }

    // Check stock for items in cart
    for (const item of cart) {
      const stockAvailable = item.stock !== undefined ? item.stock : 50;
      if (item.quantity > stockAvailable) {
        setErrorMsg(`Insufficient stock for "${item.name}". Only ${stockAvailable} available.`);
        return;
      }
    }

    setCurrentStep(2);
  };

  // Step 2 -> Step 3 Validation
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (paymentMethod === 'UPI') {
      if (!upiId.trim()) {
        setErrorMsg('Please enter your VPA / UPI ID (e.g. name@upi, 9876543210@paytm).');
        return;
      }
    } else if (paymentMethod === 'Credit/Debit Card') {
      if (!cardNumber.trim() || cardNumber.replace(/\s/g, '').length < 15) {
        setErrorMsg('Please enter a valid card number.');
        return;
      }
      if (!cardExpiry.trim()) {
        setErrorMsg('Please enter the card expiry date (MM/YY).');
        return;
      }
      if (!cardCvv.trim() || cardCvv.trim().length < 3) {
        setErrorMsg('Please enter a 3 or 4 digit CVV code.');
        return;
      }
    } else if (paymentMethod === 'Net Banking') {
      if (!selectedBank) {
        setErrorMsg('Please select your bank for Net Banking.');
        return;
      }
    }

    setCurrentStep(3);
  };

  // Step 3 -> Confirm & Place Order (Calls Backend)
  const handleFinalConfirmOrder = async () => {
    setErrorMsg('');

    if (!token || !user) {
      openAuth('login');
      setErrorMsg('Please log in to place your order.');
      return;
    }

    setIsPlacingOrder(true);

    const shippingAddress = {
      fullName,
      email,
      phone,
      address,
      city,
      state: state || 'State',
      pincode
    };

    let paymentDetails = {};
    if (paymentMethod === 'UPI') {
      paymentDetails.upiId = upiId;
    } else if (paymentMethod === 'Net Banking') {
      paymentDetails.bank = selectedBank;
    }

    // Simulated short delay (1.5 seconds) for realistic checkout feedback
    setTimeout(async () => {
      const res = await placeOrder(shippingAddress, paymentMethod, paymentDetails);
      setIsPlacingOrder(false);

      if (res.success) {
        setCurrentStep(4);
      } else if (res.error) {
        setErrorMsg(res.error);
      }
    }, 1200);
  };

  // Apply coupon in checkout modal
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    applyCoupon(couponInput);
    setCouponInput('');
  };

  // Format Order ID for display
  const displayOrderId = lastConfirmedOrder
    ? (lastConfirmedOrder._id.startsWith('ord_')
        ? `#SEED${lastConfirmedOrder._id.replace('ord_', '').substring(0, 8).toUpperCase()}`
        : `#SEED${lastConfirmedOrder._id.substring(lastConfirmedOrder._id.length - 8).toUpperCase()}`)
    : '#SEED123456';

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="checkout-container fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleCloseModal} aria-label="Close checkout">
          ✕
        </button>

        {/* Header Title */}
        <div className="checkout-header">
          <span className="brand-logo-text">🌱 Seedora Checkout</span>
          <p className="checkout-subtitle">Safe & Secure Demo Checkout Experience</p>
        </div>

        {/* Step Progress Indicator (Flipkart Style) */}
        <div className="step-indicator-bar">
          <div
            className={`step-item ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}
            onClick={() => currentStep > 1 && currentStep < 4 && setCurrentStep(1)}
          >
            <div className="step-badge">{currentStep > 1 ? '✓' : '1'}</div>
            <span className="step-label">Delivery Address</span>
          </div>

          <div className="step-connector"></div>

          <div
            className={`step-item ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}
            onClick={() => currentStep > 2 && currentStep < 4 && setCurrentStep(2)}
          >
            <div className="step-badge">{currentStep > 2 ? '✓' : '2'}</div>
            <span className="step-label">Payment Method</span>
          </div>

          <div className="step-connector"></div>

          <div
            className={`step-item ${currentStep === 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}
            onClick={() => currentStep > 3 && setCurrentStep(3)}
          >
            <div className="step-badge">{currentStep > 3 ? '✓' : '3'}</div>
            <span className="step-label">Confirm Order</span>
          </div>

          <div className="step-connector"></div>

          <div className={`step-item ${currentStep === 4 ? 'active completed' : ''}`}>
            <div className="step-badge">✓</div>
            <span className="step-label">Order Placed</span>
          </div>
        </div>

        {/* Error Alert Banner */}
        {errorMsg && (
          <div className="error-banner">
            <span>⚠️ {errorMsg}</span>
            <button className="close-banner-btn" onClick={() => setErrorMsg('')}>✕</button>
          </div>
        )}

        {/* Authentication Notice if Guest */}
        {!user && currentStep < 4 && (
          <div className="auth-notice-banner">
            ℹ️ You are checking out as a guest. <button className="inline-login-btn" onClick={() => openAuth('login')}>Log in or Register</button> to link this order to your account!
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 1: DELIVERY ADDRESS */}
        {/* ========================================================================= */}
        {currentStep === 1 && (
          <div className="step-content-grid">
            <div className="main-form-col">
              <div className="section-header">
                <h3>📍 Delivery Address</h3>
                <span className="step-badge-mini">Step 1 of 3</span>
              </div>

              <form onSubmit={handleAddressSubmit} id="address-form" className="checkout-form">
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group flex-1">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="e.g. rahul.sharma@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Street Address / House No. / Landmark *</label>
                  <input
                    type="text"
                    placeholder="e.g. Flat 402, Green Acre Apartments, Indiranagar"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group flex-1">
                    <label>City / District *</label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group flex-1">
                    <label>State *</label>
                    <input
                      type="text"
                      placeholder="e.g. Karnataka"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group flex-1">
                    <label>Pincode *</label>
                    <input
                      type="text"
                      placeholder="e.g. 560038"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      maxLength={6}
                      required
                    />
                  </div>
                </div>

                <div className="form-actions-bar">
                  <button type="submit" className="btn btn-primary btn-lg continue-btn w-full">
                    Continue to Payment &rarr;
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar Summary */}
            <div className="sidebar-summary-col">
              <div className="summary-card">
                <h4>Order Summary ({cart.reduce((a, b) => a + b.quantity, 0)} items)</h4>

                <div className="mini-items-scroll">
                  {cart.map((item) => (
                    <div key={item._id || item.id} className="mini-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="mini-item-info">
                        <span className="mini-item-name">{item.name}</span>
                        <span className="mini-item-qty">Qty: {item.quantity} × ₹{Number(item.price)}</span>
                      </div>
                      <span className="mini-item-total">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="price-calc-divider"></div>

                <div className="price-row">
                  <span>Subtotal</span>
                  <span>₹{rawSubtotal}</span>
                </div>

                {calculatedDiscount > 0 && (
                  <div className="price-row discount">
                    <span>Discount ({appliedCoupon?.code})</span>
                    <span>-₹{calculatedDiscount}</span>
                  </div>
                )}

                <div className="price-row">
                  <span>Delivery Charge</span>
                  <span>{deliveryCharge === 0 ? <strong className="green-text">FREE</strong> : `₹${deliveryCharge}`}</span>
                </div>

                <div className="price-row total-row">
                  <span>Total Payable</span>
                  <span className="grand-price">₹{finalCartTotal}</span>
                </div>

                <div className="delivery-perk-badge">
                  🚚 Guaranteed Fresh Seed Delivery in 3-5 Business Days
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 2: SELECT PAYMENT METHOD */}
        {/* ========================================================================= */}
        {currentStep === 2 && (
          <div className="step-content-grid">
            <div className="main-form-col">
              <div className="section-header">
                <h3>💳 Select Payment Method</h3>
                <span className="step-badge-mini">Step 2 of 3</span>
              </div>

              {/* Delivery Address Summary Bar */}
              <div className="address-summary-pill">
                <div className="pill-text">
                  <strong>Deliver to:</strong> {fullName}, {address}, {city}, {state} - {pincode} ({phone})
                </div>
                <button type="button" className="edit-addr-btn" onClick={() => setCurrentStep(1)}>
                  ✏️ Edit
                </button>
              </div>

              <form onSubmit={handlePaymentSubmit} id="payment-form" className="checkout-form">
                <div className="payment-options-list">
                  {/* Option 1: Cash on Delivery */}
                  <label className={`pay-option-card ${paymentMethod === 'Cash on Delivery' ? 'selected' : ''}`}>
                    <div className="pay-radio-header">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Cash on Delivery"
                        checked={paymentMethod === 'Cash on Delivery'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="pay-icon">💵</span>
                      <div className="pay-info">
                        <strong>Cash on Delivery (COD)</strong>
                        <span className="pay-sub">Pay cash when your order arrives at your door</span>
                      </div>
                    </div>
                  </label>

                  {/* Option 2: UPI */}
                  <label className={`pay-option-card ${paymentMethod === 'UPI' ? 'selected' : ''}`}>
                    <div className="pay-radio-header">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="UPI"
                        checked={paymentMethod === 'UPI'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="pay-icon">📱</span>
                      <div className="pay-info">
                        <strong>UPI Payment</strong>
                        <span className="pay-sub">Instant payment via GPay, PhonePe, Paytm, BHIM</span>
                      </div>
                    </div>

                    {paymentMethod === 'UPI' && (
                      <div className="pay-details-box fade-in" onClick={(e) => e.stopPropagation()}>
                        <div className="upi-apps-badges">
                          <span className="upi-chip gpay">GPay</span>
                          <span className="upi-chip phonepe">PhonePe</span>
                          <span className="upi-chip paytm">Paytm</span>
                          <span className="upi-chip bhim">BHIM UPI</span>
                        </div>

                        <div className="form-group">
                          <label>Enter VPA / UPI ID *</label>
                          <input
                            type="text"
                            placeholder="e.g. 9876543210@paytm, user@okaxis, user@ybl"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            required={paymentMethod === 'UPI'}
                          />
                        </div>

                        <div className="qr-sim-banner">
                          <span className="qr-sim-icon">📲 QR Code</span>
                          <span>Scan QR Code with any UPI app to pay ₹{finalCartTotal}</span>
                        </div>
                      </div>
                    )}
                  </label>

                  {/* Option 3: Credit / Debit Card */}
                  <label className={`pay-option-card ${paymentMethod === 'Credit/Debit Card' ? 'selected' : ''}`}>
                    <div className="pay-radio-header">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Credit/Debit Card"
                        checked={paymentMethod === 'Credit/Debit Card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="pay-icon">💳</span>
                      <div className="pay-info">
                        <strong>Credit / Debit Card</strong>
                        <span className="pay-sub">Visa, MasterCard, RuPay, Maestro accepted</span>
                      </div>
                    </div>

                    {paymentMethod === 'Credit/Debit Card' && (
                      <div className="pay-details-box fade-in" onClick={(e) => e.stopPropagation()}>
                        <div className="form-group">
                          <label>Cardholder Name</label>
                          <input
                            type="text"
                            placeholder="Rahul Sharma"
                            value={cardHolder}
                            onChange={(e) => setCardHolder(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>Card Number *</label>
                          <input
                            type="text"
                            placeholder="4532 •••• •••• 8892"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required={paymentMethod === 'Credit/Debit Card'}
                          />
                        </div>

                        <div className="form-row">
                          <div className="form-group flex-1">
                            <label>Expiry (MM/YY) *</label>
                            <input
                              type="text"
                              placeholder="12/28"
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              required={paymentMethod === 'Credit/Debit Card'}
                            />
                          </div>

                          <div className="form-group flex-1">
                            <label>CVV *</label>
                            <input
                              type="password"
                              placeholder="123"
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value)}
                              maxLength={4}
                              required={paymentMethod === 'Credit/Debit Card'}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </label>

                  {/* Option 4: Net Banking */}
                  <label className={`pay-option-card ${paymentMethod === 'Net Banking' ? 'selected' : ''}`}>
                    <div className="pay-radio-header">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Net Banking"
                        checked={paymentMethod === 'Net Banking'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="pay-icon">🏦</span>
                      <div className="pay-info">
                        <strong>Net Banking</strong>
                        <span className="pay-sub">All major Indian banks supported</span>
                      </div>
                    </div>

                    {paymentMethod === 'Net Banking' && (
                      <div className="pay-details-box fade-in" onClick={(e) => e.stopPropagation()}>
                        <div className="form-group">
                          <label>Select Bank *</label>
                          <select
                            value={selectedBank}
                            onChange={(e) => setSelectedBank(e.target.value)}
                            className="bank-select"
                          >
                            <option value="HDFC Bank">HDFC Bank</option>
                            <option value="State Bank of India (SBI)">State Bank of India (SBI)</option>
                            <option value="ICICI Bank">ICICI Bank</option>
                            <option value="Axis Bank">Axis Bank</option>
                            <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                            <option value="Punjab National Bank">Punjab National Bank</option>
                            <option value="Bank of Baroda">Bank of Baroda</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </label>
                </div>

                <div className="form-actions-bar row-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setCurrentStep(1)}>
                    &larr; Back to Address
                  </button>
                  <button type="submit" className="btn btn-primary flex-1">
                    Proceed to Review Order &rarr;
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar Summary */}
            <div className="sidebar-summary-col">
              <div className="summary-card">
                <h4>Order Summary ({cart.reduce((a, b) => a + b.quantity, 0)} items)</h4>

                {/* Coupon Input Section */}
                <div className="coupon-checkout-box">
                  {appliedCoupon ? (
                    <div className="applied-coupon-pill">
                      <span>🏷️ <strong>{appliedCoupon.code}</strong> Applied</span>
                      <button type="button" onClick={removeCoupon}>✕</button>
                    </div>
                  ) : (
                    <div className="coupon-inline-form">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                      />
                      <button type="button" className="btn btn-outline btn-sm" onClick={handleApplyCoupon}>
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                <div className="price-row">
                  <span>Subtotal</span>
                  <span>₹{rawSubtotal}</span>
                </div>

                {calculatedDiscount > 0 && (
                  <div className="price-row discount">
                    <span>Discount ({appliedCoupon?.code})</span>
                    <span>-₹{calculatedDiscount}</span>
                  </div>
                )}

                <div className="price-row">
                  <span>Delivery Charge</span>
                  <span>{deliveryCharge === 0 ? <strong className="green-text">FREE</strong> : `₹${deliveryCharge}`}</span>
                </div>

                <div className="price-calc-divider"></div>

                <div className="price-row total-row">
                  <span>Total Payable</span>
                  <span className="grand-price">₹{finalCartTotal}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 3: CONFIRM & PLACE ORDER */}
        {/* ========================================================================= */}
        {currentStep === 3 && (
          <div className="step-confirm-container">
            <div className="section-header">
              <h3>📋 Confirm & Place Your Order</h3>
              <span className="step-badge-mini">Step 3 of 3</span>
            </div>

            <div className="confirm-review-grid">
              {/* Delivery Address Card */}
              <div className="review-card">
                <div className="review-card-header">
                  <h4>📍 Delivery Address</h4>
                  <button type="button" className="link-btn" onClick={() => setCurrentStep(1)}>
                    Change
                  </button>
                </div>
                <div className="review-card-body">
                  <p className="user-name">{fullName}</p>
                  <p>{address}</p>
                  <p>{city}, {state} - {pincode}</p>
                  <p><strong>Phone:</strong> {phone}</p>
                  <p><strong>Email:</strong> {email}</p>
                </div>
              </div>

              {/* Payment Method Card */}
              <div className="review-card">
                <div className="review-card-header">
                  <h4>💳 Payment Method</h4>
                  <button type="button" className="link-btn" onClick={() => setCurrentStep(2)}>
                    Change
                  </button>
                </div>
                <div className="review-card-body">
                  <p className="pay-method-title">
                    {paymentMethod === 'Cash on Delivery' && '💵 Cash on Delivery (COD)'}
                    {paymentMethod === 'UPI' && `📱 UPI Payment (${upiId || 'UPI'})`}
                    {paymentMethod === 'Credit/Debit Card' && `💳 Credit/Debit Card (${cardNumber ? `•••• ${cardNumber.slice(-4)}` : 'Demo Card'})`}
                    {paymentMethod === 'Net Banking' && `🏦 Net Banking (${selectedBank})`}
                  </p>
                  <p className="demo-pay-notice">Demo Payment — No money will be deducted.</p>
                </div>
              </div>
            </div>

            {/* Items List Review */}
            <div className="review-card items-review-card">
              <div className="review-card-header">
                <h4>📦 Items in Your Order ({cart.reduce((a, b) => a + b.quantity, 0)})</h4>
              </div>
              <div className="review-items-list">
                {cart.map((item) => (
                  <div key={item._id || item.id} className="review-item-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="review-item-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="review-item-details">
                      <span className="item-title">{item.name}</span>
                      <span className="item-meta">Qty: {item.quantity} × ₹{Number(item.price)}</span>
                    </div>
                    <span className="review-item-price">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Total Summary Box */}
            <div className="final-price-summary-box">
              <div className="price-row">
                <span>Items Subtotal</span>
                <span>₹{rawSubtotal}</span>
              </div>
              {calculatedDiscount > 0 && (
                <div className="price-row discount">
                  <span>Coupon Discount ({appliedCoupon?.code})</span>
                  <span>-₹{calculatedDiscount}</span>
                </div>
              )}
              <div className="price-row">
                <span>Delivery Charge</span>
                <span>{deliveryCharge === 0 ? <strong className="green-text">FREE</strong> : `₹${deliveryCharge}`}</span>
              </div>
              <div className="price-calc-divider"></div>
              <div className="price-row grand-total-row">
                <span>Total Amount Payable</span>
                <span className="grand-price-big">₹{finalCartTotal}</span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="confirm-actions-bar">
              <button
                type="button"
                className="btn btn-outline"
                disabled={isPlacingOrder}
                onClick={() => setCurrentStep(2)}
              >
                &larr; Back to Payment
              </button>

              <button
                type="button"
                className="btn btn-primary btn-lg place-order-btn flex-1"
                disabled={isPlacingOrder}
                onClick={handleFinalConfirmOrder}
              >
                {isPlacingOrder ? (
                  <span className="loading-spinner-wrap">
                    <span className="spinner"></span> Placing your order...
                  </span>
                ) : (
                  `Confirm & Place Order (₹${finalCartTotal})`
                )}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 4: ORDER SUCCESS SCREEN */}
        {/* ========================================================================= */}
        {currentStep === 4 && (
          <div className="order-success-screen fade-in">
            <div className="success-icon-circle">
              <svg className="checkmark-svg" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>

            <h2 className="success-title">Order Placed Successfully!</h2>
            <p className="success-tagline">Thank you for shopping with Seedora.</p>
            <p className="success-message">Your order has been placed successfully.</p>

            <div className="success-details-card">
              <div className="detail-pill">
                <span>Order ID</span>
                <strong>{displayOrderId}</strong>
              </div>

              <div className="detail-pill">
                <span>Total Amount</span>
                <strong className="green-text">₹{lastConfirmedOrder ? lastConfirmedOrder.totalAmount : finalCartTotal}</strong>
              </div>

              <div className="detail-pill">
                <span>Payment Method</span>
                <strong>{lastConfirmedOrder ? lastConfirmedOrder.paymentMethod : paymentMethod}</strong>
              </div>

              <div className="detail-pill">
                <span>Expected Delivery</span>
                <strong>3–5 Business Days</strong>
              </div>

              <div className="address-delivery-snippet">
                <span>📦 Shipping to:</span>
                <p>
                  <strong>{lastConfirmedOrder?.shippingAddress?.fullName || fullName}</strong> — {lastConfirmedOrder?.shippingAddress?.address || address}, {lastConfirmedOrder?.shippingAddress?.city || city}, {lastConfirmedOrder?.shippingAddress?.state || state} - {lastConfirmedOrder?.shippingAddress?.pincode || pincode} (Ph: {lastConfirmedOrder?.shippingAddress?.phone || phone})
                </p>
              </div>
            </div>

            <div className="success-actions-row">
              <button
                className="btn btn-outline flex-1"
                onClick={handleCloseModal}
              >
                Continue Shopping
              </button>
              <button
                className="btn btn-primary flex-1"
                onClick={() => {
                  handleCloseModal();
                  openOrders();
                }}
              >
                View My Orders &rarr;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .checkout-container {
          background: #ffffff;
          width: 100%;
          max-width: 900px;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          max-height: 92vh;
          overflow-y: auto;
          font-family: inherit;
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: #f1f5f9;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          color: #64748b;
          transition: all 0.2s ease;
        }
        .close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .checkout-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .brand-logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          color: #2d6a4f;
          display: block;
        }
        .checkout-subtitle {
          font-size: 0.85rem;
          color: #64748b;
          margin-top: 0.1rem;
        }

        /* Step Indicator Bar */
        .step-indicator-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.85rem 1.25rem;
          margin-bottom: 1.5rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          opacity: 0.55;
          transition: all 0.2s ease;
        }
        .step-item.active {
          opacity: 1;
        }
        .step-item.completed {
          opacity: 0.9;
        }

        .step-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #cbd5e1;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.82rem;
        }
        .step-item.active .step-badge {
          background: #2d6a4f;
          color: white;
          box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.2);
        }
        .step-item.completed .step-badge {
          background: #10b981;
          color: white;
        }

        .step-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #1e293b;
        }

        .step-connector {
          flex: 1;
          height: 2px;
          background: #e2e8f0;
          margin: 0 0.5rem;
        }

        .error-banner {
          background-color: #fef2f2;
          border: 1px solid #fca5a5;
          color: #b91c1c;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .close-banner-btn {
          background: none;
          border: none;
          color: #b91c1c;
          font-weight: bold;
          cursor: pointer;
        }

        .auth-notice-banner {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1d4ed8;
          padding: 0.65rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .inline-login-btn {
          background: none;
          border: none;
          color: #1d4ed8;
          font-weight: 700;
          text-decoration: underline;
          cursor: pointer;
        }

        /* Step Content Grid Layout */
        .step-content-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 1.75rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .section-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }
        .step-badge-mini {
          font-size: 0.75rem;
          font-weight: 700;
          background: #dcfce7;
          color: #166534;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }

        .checkout-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: flex;
          gap: 0.85rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }
        .form-group input, .bank-select {
          padding: 0.65rem 0.85rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .bank-select:focus {
          border-color: #2d6a4f;
          box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.1);
        }

        .form-actions-bar {
          margin-top: 1.25rem;
        }
        .row-actions {
          display: flex;
          gap: 0.75rem;
        }

        /* Address Summary Pill */
        .address-summary-pill {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .pill-text {
          color: #166534;
        }
        .edit-addr-btn {
          background: white;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          cursor: pointer;
        }

        /* Payment Options List */
        .payment-options-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .pay-option-card {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #ffffff;
        }
        .pay-option-card.selected {
          border-color: #2d6a4f;
          background: #f0fdf4;
          box-shadow: 0 0 0 2px rgba(45, 106, 79, 0.15);
        }

        .pay-radio-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pay-radio-header input[type="radio"] {
          accent-color: #2d6a4f;
          width: 18px;
          height: 18px;
        }
        .pay-icon {
          font-size: 1.4rem;
        }
        .pay-info {
          display: flex;
          flex-direction: column;
        }
        .pay-info strong {
          font-size: 0.95rem;
          color: #0f172a;
        }
        .pay-sub {
          font-size: 0.8rem;
          color: #64748b;
        }

        .pay-details-box {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed #bbf7d0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .upi-apps-badges {
          display: flex;
          gap: 0.5rem;
        }
        .upi-chip {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: white;
        }
        .gpay { background: #ea4335; }
        .phonepe { background: #5f259f; }
        .paytm { background: #00baf2; }
        .bhim { background: #008080; }

        .qr-sim-banner {
          background: white;
          border: 1px dashed #2d6a4f;
          padding: 0.65rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #2d6a4f;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Sidebar Summary Card */
        .sidebar-summary-col {
          display: flex;
          flex-direction: column;
        }
        .summary-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .summary-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.6rem;
        }

        .mini-items-scroll {
          max-height: 180px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .mini-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.82rem;
        }
        .mini-item img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 6px;
        }
        .mini-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .mini-item-name {
          font-weight: 600;
          color: #1e293b;
        }
        .mini-item-qty {
          color: #64748b;
          font-size: 0.75rem;
        }
        .mini-item-total {
          font-weight: 700;
          color: #0f172a;
        }

        .price-calc-divider {
          height: 1px;
          border-top: 1px dashed #cbd5e1;
          margin: 0.3rem 0;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: #334155;
        }
        .price-row.discount {
          color: #dc2626;
          font-weight: 600;
        }
        .price-row.total-row {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          padding-top: 0.4rem;
        }
        .grand-price {
          color: #2d6a4f;
        }
        .green-text {
          color: #10b981;
        }

        .coupon-checkout-box {
          margin-bottom: 0.5rem;
        }
        .coupon-inline-form {
          display: flex;
          gap: 0.4rem;
        }
        .coupon-inline-form input {
          flex: 1;
          padding: 0.4rem 0.6rem;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 0.82rem;
          text-transform: uppercase;
        }
        .applied-coupon-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #dcfce7;
          color: #166534;
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          font-size: 0.82rem;
        }
        .applied-coupon-pill button {
          background: none;
          border: none;
          color: #dc2626;
          font-weight: bold;
          cursor: pointer;
        }

        .delivery-perk-badge {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 0.78rem;
          padding: 0.5rem;
          border-radius: 6px;
          text-align: center;
          font-weight: 600;
          margin-top: 0.4rem;
        }

        /* Step 3: Confirm Review */
        .step-confirm-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .confirm-review-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .review-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 1.25rem;
        }

        .review-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .review-card-header h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .link-btn {
          background: none;
          border: none;
          color: #2d6a4f;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
        }
        .link-btn:hover {
          text-decoration: underline;
        }

        .review-card-body p {
          font-size: 0.88rem;
          color: #334155;
          margin-bottom: 0.25rem;
        }
        .review-card-body .user-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #0f172a;
        }
        .pay-method-title {
          font-weight: 700;
          color: #0f172a;
          font-size: 0.95rem;
        }
        .demo-pay-notice {
          font-size: 0.78rem;
          color: #64748b;
          font-style: italic;
          margin-top: 0.4rem;
        }

        .items-review-card {
          padding: 1.25rem;
        }
        .review-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 220px;
          overflow-y: auto;
        }
        .review-item-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-bottom: 0.65rem;
          border-bottom: 1px solid #f1f5f9;
        }
        .review-item-img {
          width: 48px;
          height: 48px;
          object-fit: cover;
          border-radius: 6px;
        }
        .review-item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .item-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: #0f172a;
        }
        .item-meta {
          font-size: 0.8rem;
          color: #64748b;
        }
        .review-item-price {
          font-weight: 700;
          font-size: 0.95rem;
          color: #0f172a;
        }

        .final-price-summary-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .grand-total-row {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          padding-top: 0.4rem;
        }
        .grand-price-big {
          color: #2d6a4f;
          font-size: 1.3rem;
        }

        .confirm-actions-bar {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .place-order-btn {
          font-size: 1.1rem;
          font-weight: 800;
          padding: 0.9rem 1.5rem;
        }

        .loading-spinner-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Step 4: Success Screen */
        .order-success-screen {
          text-align: center;
          padding: 1.5rem 1rem;
        }

        .success-icon-circle {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.25rem auto;
        }
        .checkmark-svg {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: block;
          stroke-width: 3;
          stroke: #10b981;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #10b981;
          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s stroke;
        }
        .checkmark-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 3;
          stroke-miterlimit: 10;
          stroke: #10b981;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark-check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
        }

        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }

        .success-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #2d6a4f;
          margin-bottom: 0.3rem;
        }
        .success-tagline {
          font-size: 1.05rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.2rem;
        }
        .success-message {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        .success-details-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.25rem;
          max-width: 540px;
          margin: 0 auto 1.75rem auto;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .detail-pill {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 0.4rem;
        }
        .detail-pill span {
          color: #64748b;
        }
        .detail-pill strong {
          color: #0f172a;
        }

        .address-delivery-snippet {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.85rem;
        }
        .address-delivery-snippet span {
          font-weight: 700;
          color: #2d6a4f;
          display: block;
          margin-bottom: 0.2rem;
        }
        .address-delivery-snippet p {
          color: #334155;
          margin: 0;
        }

        .success-actions-row {
          display: flex;
          gap: 1rem;
          max-width: 540px;
          margin: 0 auto;
        }

        .w-full { width: 100%; }
        .flex-1 { flex: 1; }

        @media (max-width: 768px) {
          .step-content-grid, .confirm-review-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            flex-direction: column;
          }
          .step-indicator-bar {
            overflow-x: auto;
            padding: 0.6rem;
          }
          .step-label {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckoutModal;
