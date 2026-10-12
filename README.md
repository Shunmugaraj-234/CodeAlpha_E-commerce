# 🌱 Seedora — Smart Seed Marketplace

**Seedora** is a modern seed e-commerce platform designed to make purchasing quality seeds simple, convenient, and accessible. Users can explore seed products, view product details, manage their shopping cart, register or log in, and place orders through a streamlined checkout experience.

The project combines a responsive frontend with a backend API and database to demonstrate the core functionality of a real-world e-commerce application.

## ✨ Features

### 🛍️ Product Management
- Browse available seed products.
- View detailed product information.
- Search products by name or category.
- Filter products by category.
- Display product prices and availability.
- Manage product stock.

### 🛒 Shopping Cart
- Add products to the cart.
- Increase or decrease product quantities.
- Remove products from the cart.
- Calculate subtotal and total amount.
- View the number of items in the cart.
- Validate product availability before ordering.

### 👤 User Authentication
- User registration and login.
- Form validation.
- Secure password hashing.
- Authentication using JSON Web Tokens (JWT).
- Protected user-specific pages.

### 💳 Checkout & Demo Payment
- Enter and review delivery details.
- View an order summary before confirmation.
- Select a demo payment method.
- Support Cash on Delivery and simulated online payment options.
- Confirm orders using **Confirm & Place Order**.
- Display a successful order confirmation message.
- Generate an order ID.

**Note:** Online payments are simulated for demonstration purposes. No real money is processed.

### 📦 Order Management
- Save orders in the database.
- View previous orders.
- Display order details and order status.
- Validate product stock during order creation.
- Update stock after successful order placement.

### 🎨 UI/UX
- Responsive design for desktop, tablet, and mobile.
- Smooth hover effects and transitions.
- Interactive product cards and buttons.
- Loading and error states.
- Clean and user-friendly checkout experience.

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, animations, and responsive design |
| JavaScript | Frontend interactivity |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | Database modeling |
| bcrypt | Password hashing |
| JWT | User authentication |
| dotenv | Environment configuration |

## 🏗️ Project Architecture

```text
Seedora/
│
├── frontend/
│   ├── index.html
│   ├── products.html
│   ├── product-details.html
│   ├── cart.html
│   ├── login.html
│   ├── register.html
│   ├── checkout.html
│   ├── orders.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   ├── auth.js
│   │   └── checkout.js
│   │
│   └── assets/
│       └── images/
│
└── backend/
    ├── server.js
    ├── package.json
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── User.js
    │   ├── Product.js
    │   └── Order.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── productRoutes.js
    │   └── orderRoutes.js
    ├── controllers/
    │   ├── authController.js
    │   ├── productController.js
    │   └── orderController.js
    ├── middleware/
    │   └── authMiddleware.js
    └── .env
```

*The structure above is a recommended layout. Adjust filenames and folders to match the actual project implementation.*

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd Seedora
```

Replace the repository URL with your actual GitHub repository URL.

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key
```

Replace the MongoDB connection string and JWT secret with your own values. Never commit your `.env` file or expose credentials publicly.

### 4. Start the Backend

If the project uses `server.js` as its entry point:

```bash
node server.js
```

If a development script is configured in `package.json`, you can use:

```bash
npm run dev
```

The API should be available at:

```text
http://localhost:5000
```

### 5. Run the Frontend

Open the frontend's `index.html` using the VS Code Live Server extension, or use the development server already configured for your project.

Ensure that the frontend API URL matches the backend address.

## 🔌 API Endpoints

The following endpoints describe the intended API design. Implemented routes may differ.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve product details |
| POST | `/api/products` | Create a product (admin) |
| PUT | `/api/products/:id` | Update a product (admin) |
| DELETE | `/api/products/:id` | Delete a product (admin) |
| POST | `/api/orders` | Create an order |
| GET | `/api/orders` | Retrieve the authenticated user's orders |
| GET | `/api/orders/:id` | Retrieve a specific order |
| PUT | `/api/orders/:id/cancel` | Request order cancellation |

Admin routes should require authorization and appropriate role checks.

## 🛍️ Order Placement Workflow

```text
Browse Seeds
     ↓
View Product Details
     ↓
Add to Cart
     ↓
Review Cart
     ↓
Enter Delivery Address
     ↓
Select Payment Method
     ↓
Review Order
     ↓
Confirm & Place Order
     ↓
Create Order in MongoDB
     ↓
Display Order Success Message
```

When an order is submitted, the backend should validate product availability, calculate the final amount, create the order, and update stock safely. The frontend should clear the cart only after receiving a successful order response.

## 💳 Demo Payment Flow

Seedora currently uses a simulated payment process.

1. The user selects a payment method.
2. The checkout page displays the order summary.
3. The user clicks **Confirm & Place Order**.
4. A loading message appears.
5. The backend creates the order.
6. The website displays an order confirmation message and order ID.

No real payment gateway is connected. Do not collect or store real card credentials.

## 🔐 Security Considerations

- Hash passwords before storing them.
- Keep database credentials and JWT secrets in environment variables.
- Validate input on both the frontend and backend.
- Protect private API endpoints.
- Restrict order access to the order owner.
- Calculate prices on the backend instead of trusting client-submitted totals.
- Validate and update stock atomically to prevent overselling.
- Configure CORS appropriately for the deployed frontend.

## 🚀 Future Enhancements

- Real payment gateway integration.
- Email confirmation after placing an order.
- Order tracking and delivery updates.
- Admin dashboard with sales analytics.
- Product reviews and ratings.
- Wishlist functionality.
- Product recommendations.
- Advanced search and filtering.
- Inventory and low-stock alerts.
- Deployment with a production database.

## 🎯 Project Objective

The main objective of Seedora is to develop a responsive and functional e-commerce application that demonstrates frontend development, REST API integration, database management, authentication, shopping cart functionality, and order processing.

⭐ If you find this project interesting, consider giving the repository a star!
