Resource Allocation Management System (MERN Stack)

A full-stack Resource Allocation Management System built using the MERN stack, allowing administrators to manage resources and handle allocation requests, while users can request, track, and view the status of allocated resources in real time.



live vercel link - resource-allocation-management-syst.vercel.app

📌 Live Backend Server

🔗 Backend API (Render):
https://resource-allocation-management-system.onrender.com/

✅ Status: Live & Running

Visiting the above URL confirms the backend service is active.

🛠️ Tech Stack
Frontend

React.js (Vite)

Axios

React Router DOM

Custom CSS (Dark UI)

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

bcrypt.js

Deployment

Backend: Render

Database: MongoDB Atlas

Frontend: Vercel (or Local during development)

👥 User Roles
👤 User

Register & Login

View available resources

Request resource allocation

Track allocation status:

PENDING

APPROVED

REJECTED

🛡️ Admin

Login with ADMIN role

Create resources

View all resources

View allocation requests

Approve or reject requests

Manage resource availability

🔑 Authentication & Authorization

JWT-based authentication

Role-based access control

Secure password hashing using bcrypt

Protected API routes using middleware

📂 Project Structure
Resource_Allocation_Management_System
│
├── backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── pages
│   │   ├── components
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md

🔗 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login

Resources
GET    /api/resources
POST   /api/resources        (Admin only)

Allocations
GET    /api/allocations
POST   /api/allocations
PUT    /api/allocations/:id/approve   (Admin only)
PUT    /api/allocations/:id/reject    (Admin only)

🧪 Testing with Postman

Login via:

POST /api/auth/login


Copy the JWT token

Add Header:

Authorization: Bearer <TOKEN>


Access protected routes

⚙️ Environment Variables

Create a .env file in backend/

PORT=5000
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key

🚀 Running Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

✅ Features Summary

✔ Role-based access (Admin/User)
✔ Resource creation & management
✔ Approval & rejection workflow
✔ Real-time status updates
✔ Secure authentication
✔ Clean, professional UI

📈 Future Enhancements

Email notifications for approvals/rejections

Admin analytics dashboard

Resource allocation history

Pagination & search

UI animations & toasts

👨‍💻 Author

Mohamed Ajmal
B.Tech – Artificial Intelligence & Machine Learning
Full-Stack Developer (MERN)
