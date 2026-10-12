import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

const API_BASE_URL = 'http://localhost:5000/api';

const AVAILABLE_COUPONS = {
    'SEEDORA10': { type: 'percent', value: 10, code: 'SEEDORA10', desc: '10% OFF on all seeds' },
    'ORGANIC50': { type: 'flat', value: 50, code: 'ORGANIC50', desc: 'Flat ₹50 OFF on cart' },
    'WELCOME20': { type: 'percent', value: 20, code: 'WELCOME20', desc: '20% OFF for new gardeners' }
};

export const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [orders, setOrders] = useState([]);
    const [notification, setNotification] = useState(null);

    // Coupon Code State
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    // Filters & Search
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [maxPriceFilter, setMaxPriceFilter] = useState(1000);
    const [sortBy, setSortBy] = useState('default');

    // Modals visibility
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isOrdersOpen, setIsOrdersOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const [selectedProductDetails, setSelectedProductDetails] = useState(null);
    const [lastConfirmedOrder, setLastConfirmedOrder] = useState(null);

    // Load initial storage & user session
    useEffect(() => {
        const savedCart = localStorage.getItem('seedoraCart');
        if (savedCart) {
            try { setCart(JSON.parse(savedCart)); } catch (e) {}
        }
        const savedWishlist = localStorage.getItem('seedoraWishlist');
        if (savedWishlist) {
            try { setWishlist(JSON.parse(savedWishlist)); } catch (e) {}
        }
        const savedToken = localStorage.getItem('seedoraToken');
        const savedUser = localStorage.getItem('seedoraUser');
        if (savedToken && savedUser) {
            try {
                setToken(savedToken);
                setUser(JSON.parse(savedUser));
            } catch (e) {}
        }
    }, []);

    // Save cart & wishlist to local storage
    useEffect(() => {
        localStorage.setItem('seedoraCart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('seedoraWishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Fetch Products from Backend API
    const fetchProducts = useCallback(async () => {
        setLoadingProducts(true);
        try {
            const params = new URLSearchParams();
            if (searchQuery) params.append('search', searchQuery);
            if (selectedCategory && selectedCategory !== 'All') params.append('category', selectedCategory);
            if (maxPriceFilter) params.append('maxPrice', maxPriceFilter);
            if (sortBy && sortBy !== 'default') params.append('sortBy', sortBy);

            const res = await fetch(`${API_BASE_URL}/products?${params.toString()}`);
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) {
                    setProducts(data);
                    setLoadingProducts(false);
                    return;
                }
            }
        } catch (err) {
            console.warn('API product fetch failed:', err);
        }
        setProducts([]);
        setLoadingProducts(false);
    }, [searchQuery, selectedCategory, maxPriceFilter, sortBy]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification(null);
        }, 3500);
    };

    // Coupon Actions
    const applyCoupon = (codeStr) => {
        const cleanCode = codeStr.trim().toUpperCase();
        if (AVAILABLE_COUPONS[cleanCode]) {
            setAppliedCoupon(AVAILABLE_COUPONS[cleanCode]);
            showNotification(`Coupon '${cleanCode}' applied successfully!`, 'success');
            return { success: true };
        } else {
            showNotification('Invalid or expired coupon code.', 'error');
            return { success: false, error: 'Invalid coupon code' };
        }
    };

    const removeCoupon = () => {
        setAppliedCoupon(null);
        showNotification('Coupon removed.', 'info');
    };

    // User Authentication Actions
    const login = async (email, password) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }
            setUser(data);
            setToken(data.token);
            localStorage.setItem('seedoraToken', data.token);
            localStorage.setItem('seedoraUser', JSON.stringify(data));
            showNotification(`Welcome back to Seedora, ${data.name}!`);
            setIsAuthOpen(false);
            fetchMyOrders(data.token);
            return { success: true };
        } catch (err) {
            showNotification(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    const register = async (name, email, phone, password, confirmPassword) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, password, confirmPassword })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }
            setUser(data);
            setToken(data.token);
            localStorage.setItem('seedoraToken', data.token);
            localStorage.setItem('seedoraUser', JSON.stringify(data));
            showNotification(`Account created! Welcome to Seedora, ${data.name}.`);
            setIsAuthOpen(false);
            return { success: true };
        } catch (err) {
            showNotification(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setOrders([]);
        localStorage.removeItem('seedoraToken');
        localStorage.removeItem('seedoraUser');
        setIsProfileOpen(false);
        setIsAdminOpen(false);
        setIsOrdersOpen(false);
        showNotification('Logged out successfully.', 'info');
    };

    const updateProfile = async (name, phone) => {
        if (!token) return;
        try {
            const res = await fetch(`${API_BASE_URL}/auth/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name, phone })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            const updatedUser = { ...user, ...data };
            setUser(updatedUser);
            localStorage.setItem('seedoraUser', JSON.stringify(updatedUser));
            showNotification('Profile updated successfully!');
            return { success: true };
        } catch (err) {
            showNotification(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    const changePassword = async (oldPassword, newPassword) => {
        if (!token) return;
        try {
            const res = await fetch(`${API_BASE_URL}/auth/change-password`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ oldPassword, newPassword })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            showNotification('Password updated successfully!');
            return { success: true };
        } catch (err) {
            showNotification(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    // Cart Management
    const addToCart = (product, quantityToAdd = 1) => {
        const prodId = product._id || product.id;
        const availableStock = product.stock !== undefined ? product.stock : 50;

        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => (item._id || item.id) === prodId);
            const currentQty = existingItem ? existingItem.quantity : 0;

            if (currentQty + quantityToAdd > availableStock) {
                showNotification(`Only ${availableStock} items in stock for ${product.name}!`, 'error');
                return prevCart;
            }

            if (existingItem) {
                return prevCart.map((item) =>
                    (item._id || item.id) === prodId
                        ? { ...item, quantity: item.quantity + quantityToAdd }
                        : item
                );
            } else {
                return [...prevCart, { ...product, id: prodId, quantity: quantityToAdd }];
            }
        });

        showNotification(`Added ${product.name} to cart!`);
        setIsCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => (item._id || item.id) !== id));
        showNotification('Item removed from cart.', 'info');
    };

    const updateQuantity = (id, amount) => {
        setCart((prevCart) => {
            const item = prevCart.find((i) => (i._id || i.id) === id);
            if (!item) return prevCart;

            const newQuantity = item.quantity + amount;
            const maxStock = item.stock !== undefined ? item.stock : 50;

            if (amount > 0 && newQuantity > maxStock) {
                showNotification(`Maximum available stock reached (${maxStock}).`, 'info');
                return prevCart;
            }

            if (newQuantity <= 0) {
                return prevCart.filter((i) => (i._id || i.id) !== id);
            }

            return prevCart.map((i) =>
                (i._id || i.id) === id ? { ...i, quantity: newQuantity } : i
            );
        });
    };

    const clearCart = () => {
        setCart([]);
        setAppliedCoupon(null);
    };

    // Wishlist Management
    const toggleWishlist = (product) => {
        const prodId = product._id || product.id;
        if (isInWishlist(prodId)) {
            setWishlist(prev => prev.filter(item => (item._id || item.id) !== prodId));
            showNotification('Removed from wishlist.', 'info');
        } else {
            setWishlist(prev => [...prev, { ...product, id: prodId }]);
            showNotification(`Added ${product.name} to wishlist!`);
        }
    };

    const isInWishlist = (id) => {
        return wishlist.some(item => (item._id || item.id) === id);
    };

    // Order Placement & Tracking
    const placeOrder = async (shippingAddress, paymentMethod, extraPaymentDetails = {}) => {
        if (!user || !token) {
            setIsAuthOpen(true);
            setAuthMode('login');
            showNotification('Please login to place your order.', 'info');
            return { success: false, requireAuth: true };
        }

        try {
            const orderPayload = {
                items: cart,
                shippingAddress,
                paymentMethod,
                upiId: extraPaymentDetails.upiId || '',
                couponCode: appliedCoupon ? appliedCoupon.code : '',
                discountAmount: calculatedDiscount
            };

            const res = await fetch(`${API_BASE_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderPayload)
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Failed to place order');
            }

            setLastConfirmedOrder(data);
            clearCart();
            fetchProducts();
            fetchMyOrders(token);
            showNotification('Order placed successfully! Thank you for choosing Seedora.', 'success');
            return { success: true, order: data };
        } catch (err) {
            showNotification(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    const fetchMyOrders = async (authToken = token) => {
        if (!authToken) return;
        try {
            const res = await fetch(`${API_BASE_URL}/orders/my-orders`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            if (res.ok) {
                const data = await res.json();
                setOrders(data);
            }
        } catch (err) {
            console.error('Error fetching orders:', err);
        }
    };

    const cancelUserOrder = async (orderId) => {
        if (!token) return;
        try {
            const res = await fetch(`${API_BASE_URL}/orders/${orderId}/cancel`, {
                method: 'PUT',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            showNotification('Order cancelled.');
            fetchMyOrders(token);
            fetchProducts();
            return { success: true };
        } catch (err) {
            showNotification(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    useEffect(() => {
        if (token) fetchMyOrders(token);
    }, [token]);

    const rawSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    let calculatedDiscount = 0;
    if (appliedCoupon && rawSubtotal > 0) {
        if (appliedCoupon.type === 'percent') {
            calculatedDiscount = Math.round((rawSubtotal * appliedCoupon.value) / 100);
        } else if (appliedCoupon.type === 'flat') {
            calculatedDiscount = Math.min(rawSubtotal, appliedCoupon.value);
        }
    }

    const discountedSubtotal = Math.max(0, rawSubtotal - calculatedDiscount);
    const deliveryCharge = discountedSubtotal >= 499 || rawSubtotal === 0 ? 0 : 49;
    const finalCartTotal = discountedSubtotal + deliveryCharge;

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <ShopContext.Provider
            value={{
                products,
                loadingProducts,
                fetchProducts,
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                rawSubtotal,
                calculatedDiscount,
                discountedSubtotal,
                deliveryCharge,
                finalCartTotal,
                cartCount,
                wishlist,
                toggleWishlist,
                isInWishlist,
                wishlistCount: wishlist.length,
                appliedCoupon,
                applyCoupon,
                removeCoupon,
                availableCoupons: AVAILABLE_COUPONS,
                user,
                token,
                login,
                register,
                logout,
                updateProfile,
                changePassword,
                orders,
                fetchMyOrders,
                placeOrder,
                cancelUserOrder,
                lastConfirmedOrder,
                setLastConfirmedOrder,
                notification,
                showNotification,
                // Filters
                searchQuery,
                setSearchQuery,
                selectedCategory,
                setSelectedCategory,
                maxPriceFilter,
                setMaxPriceFilter,
                sortBy,
                setSortBy,
                // Modals
                isCartOpen,
                openCart: () => setIsCartOpen(true),
                closeCart: () => setIsCartOpen(false),
                isWishlistOpen,
                openWishlist: () => setIsWishlistOpen(true),
                closeWishlist: () => setIsWishlistOpen(false),
                isAuthOpen,
                authMode,
                openAuth: (mode = 'login') => { setAuthMode(mode); setIsAuthOpen(true); },
                closeAuth: () => setIsAuthOpen(false),
                isProfileOpen,
                openProfile: () => setIsProfileOpen(true),
                closeProfile: () => setIsProfileOpen(false),
                isCheckoutOpen,
                openCheckout: () => setIsCheckoutOpen(true),
                closeCheckout: () => setIsCheckoutOpen(false),
                isOrdersOpen,
                openOrders: () => { if (token) { fetchMyOrders(token); setIsOrdersOpen(true); } else { openAuth('login'); } },
                closeOrders: () => setIsOrdersOpen(false),
                isAdminOpen,
                openAdmin: () => setIsAdminOpen(true),
                closeAdmin: () => setIsAdminOpen(false),
                selectedProductDetails,
                openProductDetails: (prod) => setSelectedProductDetails(prod),
                closeProductDetails: () => setSelectedProductDetails(null)
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};
