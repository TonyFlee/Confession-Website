confession-app/
├── backend/                    # Backend code
│   ├── controllers/            # API controllers
│   │   ├── authController.js   # Authentication-related logic
│   │   ├── confessionController.js # Confession-related logic
│   │   ├── userController.js   # User-related logic
│   ├── models/                 # Database models
│   │   ├── User.js             # User schema
│   │   ├── Confession.js       # Confession schema
│   │   └── Admin.js            # Admin schema
│   ├── routes/                 # API routes
│   │   ├── authRoutes.js       # Routes for authentication
│   │   ├── confessionRoutes.js # Routes for confessions
│   │   ├── userRoutes.js       # Routes for user management
│   ├── middlewares/            # Middleware functions
│   │   ├── authMiddleware.js   # Authentication middleware
│   │   ├── errorHandler.js     # Central error handling
│   ├── services/               # Business logic and helpers
│   │   ├── jwtService.js       # JWT token management
│   │   └── emailService.js     # Email sending utilities
│   ├── config/                 # Configuration files
│   │   ├── db.js               # MongoDB connection setup
│   │   ├── appConfig.js        # General app configurations
│   ├── utils/                  # Utility files
│   │   ├── logger.js           # Logging utilities
│   │   ├── validators.js       # Data validation
│   ├── server.js               # Main backend entry point
│   └── package.json            # Backend dependencies
├── frontend/                   # Frontend code
│   ├── public/                 # Static assets
│   ├── src/                    # React source code
│   │   ├── components/         # Reusable components
│   │   │   ├── Header.js       # Navbar/Header
│   │   │   ├── Footer.js       # Footer
│   │   │   ├── ConfessionForm.js # Form to submit a confession
│   │   │   ├── ConfessionList.js # List of confessions
│   │   │   ├── LoginForm.js    # Login form
│   │   │   └── Pagination.js   # Pagination component
│   │   ├── pages/              # Pages (e.g., Home, Dashboard)
│   │   │   ├── HomePage.js     # Home Page
│   │   │   ├── SubmitPage.js   # Submit Confession
│   │   │   ├── LoginPage.js    # User login
│   │   │   ├── SignupPage.js   # User signup
│   │   │   ├── AdminDashboard.js # Admin Dashboard
│   │   │   └── NotFound.js     # 404 Error Page
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useAuth.js      # Authentication hook
│   │   ├── styles/             # CSS or SCSS styles
│   │   │   ├── components/
│   │   │   │   ├── Footer.css
│   │   │   │   ├── ConfessionForm.css
│   │   │   │   ├── ConfessionList.css
│   │   │   │   ├── Header.css
│   │   │   │   ├── Pagination.css
│   │   │   │   ├── LoginForm.css
│   │   │   ├── global.css      # Global styles
│   │   │   ├── confession.css  # Styles for confession pages
│   │   │   └── admin.css       # Admin styles
│   │   ├── context/            # React Context for state management
│   │   │   └── AuthContext.js  # Authentication state context
│   │   ├── utils/              # Utility functions
│   │   │   └── api.js          # Axios API setup
│   │   ├── App.js              # React entry point
│   │   └── index.js            # ReactDOM entry point
│   └── package.json            # Frontend dependencies
├── tests/                      # Test files
│   ├── backend/                # Backend tests
│   │   ├── confession.test.js  # Confession API tests
│   │   └── auth.test.js        # Authentication API tests
│   ├── frontend/               # Frontend tests
│   │   ├── components.test.js  # Component unit tests
│   │   └── pages.test.js       # Page integration tests
├── .env                        # Environment variables
├── README.md                   # Documentation
└── docker-compose.yml          # Docker setup for deployment
