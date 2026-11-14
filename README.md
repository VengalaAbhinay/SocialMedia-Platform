SocialMedia Platform

A full-stack social media web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The platform allows users to create accounts, share image-based posts, interact with other users through likes and comments, follow people, manage profiles, and explore content.

The application also includes **JWT-based authentication, private account management, Cloudinary image storage, and an Admin Dashboard** for user management.

##  Features

### 1. User Authentication
- User registration and login.
- Secure password hashing using **bcryptjs**.
- **JWT-based authentication** using HTTP-only cookies.
- User logout and session validation.
- Protected routes for authenticated users.
- Account activation and blocking functionality.

### 2. User Profile Management
- Create and manage user profiles.
- Update username, name, bio, and profile picture.
- Upload profile pictures using **Cloudinary**.
- Public and private account settings.
- View followers and following lists.

### 3. Social Networking
- Search users by name or username.
- Follow and unfollow users.
- Send follow requests to private accounts.
- Accept or reject follow requests.
- Manage pending follow requests.
- View other users' profiles.

### 4. Post Management
- Create posts with images and captions.
- Upload images using Cloudinary.
- View personal posts.
- Explore posts from other users.
- Delete posts.
- View individual post details.

### 5. Post Interaction
- Like and unlike posts.
- Add and delete comments.
- Like comments.
- Reply to comments.
- Like replies.
- View post engagement.

### 6. Feed and Explore
- Personalized feed.
- Explore posts from different users.
- Discover content across the platform.
- Navigate to user profiles from posts.

### 7. Admin Dashboard
- Dedicated administrator interface.
- View registered users.
- Search and manage users.
- Monitor total, active, and blocked accounts.
- Block and reactivate user accounts.
- Role-based access control.

##  Technology Stack

### Frontend
- **React.js 19** – Component-based user interface.
- **Vite** – Frontend development and build tool.
- **Tailwind CSS 4** – Responsive UI styling.
- **React Router 7** – Client-side navigation.
- **Zustand** – Global state management.
- **Axios** – HTTP requests and API communication.
- **React Hook Form** – Form management.
- **React Hot Toast** – Notifications.

### Backend
- **Node.js** – JavaScript runtime environment.
- **Express.js 5** – Backend web framework.
- **MongoDB** – NoSQL database.
- **Mongoose 9** – MongoDB object data modeling.
- **JWT** – Authentication and authorization.
- **bcryptjs** – Password hashing.
- **Multer** – File upload handling.
- **Cloudinary** – Image storage and management.

##  Project Architecture

The application follows a client-server architecture.

1. **Frontend Layer:** React handles the user interface and user interactions.
2. **API Layer:** Axios communicates with the Express REST APIs.
3. **Authentication Layer:** JWT verifies user identity and protects restricted endpoints.
4. **Backend Layer:** Express handles business logic and API requests.
5. **Database Layer:** MongoDB stores users, posts, comments, and relationships.
6. **Cloud Storage:** Cloudinary stores uploaded profile pictures and post images.

### Architecture Workflow

```text
                 USER
                   |
                   v
           REACT FRONTEND
                   |
             AXIOS CLIENT
                   |
                   v
           EXPRESS REST API
                   |
          JWT AUTHENTICATION
                   |
          BUSINESS LOGIC
             /         \
            v           v
        MONGODB      CLOUDINARY
            |           |
            v           v
       USER DATA     IMAGE URLs
       POSTS
       COMMENTS
       FOLLOWERS
```

##  Project Structure

```text
SOCIALMEDIA-PLATFORM/
│
├── backend/
│   ├── API/
│   │   ├── AdminAPI.js
│   │   ├── FeedAPI.js
│   │   ├── PostAPI.js
│   │   └── UserAPI.js
│   │
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── cloudinaryUpload.js
│   │   └── multer.js
│   │
│   ├── middlewares/
│   │   └── verifyToken.js
│   │
│   ├── Models/
│   │   ├── UserModel.js
│   │   ├── PostModel.js
│   │   └── CommentModel.js
│   │
│   ├── REST CLIENTS/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosInstance.js
│   │   │
│   │   ├── components/
│   │   │   ├── AdminProfile.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── Explore.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── OtherUserProfile.jsx
│   │   │   ├── PostPage.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── RootLayout.jsx
│   │   │   ├── SearchUsers.jsx
│   │   │   ├── Unauthorized.jsx
│   │   │   └── UserProfile.jsx
│   │   │
│   │   ├── store/
│   │   │   └── authStore.js
│   │   │
│   │   ├── styles/
│   │   │   └── common.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

##  Installation and Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB or MongoDB Atlas account
- Cloudinary account
- Git

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd SOCIALMEDIA-PLATFORM
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Configure Backend Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=8000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Replace the placeholder values with your actual credentials.

### Step 4: Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### Step 5: Configure Frontend Environment Variables

Create a `.env` file inside the frontend directory.

```env
VITE_API_BASE_URL=http://localhost:8000
```

### Step 6: Run the Backend

```bash
cd backend
npm run dev
```

The backend server runs on:

```text
http://localhost:8000
```

### Step 7: Run the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend application runs on:

```text
http://localhost:5173
```

Open the frontend URL in your browser.

##  Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/register` | User registration |
| `/login` | User login |
| `/feed` | Personalized feed |
| `/explore` | Explore posts |
| `/create-post` | Create a new post |
| `/post/:id` | Individual post details |
| `/profile` | Current user's profile |
| `/profile/:id` | Other user's profile |
| `/search` | Search users |
| `/admin-profile` | Admin dashboard |
| `/unauthorized` | Unauthorized access page |

##  Backend API Endpoints

### User API

Base URL: `/user-api`

| Method | Endpoint | Functionality |
|---|---|---|
| POST | `/register` | Register a user |
| POST | `/login` | Authenticate user |
| GET | `/logout` | Logout user |
| GET | `/check-auth` | Verify authentication |
| GET | `/mine` | Get current profile |
| GET | `/profile/:id` | Get user profile |
| PUT | `/update` | Update profile |
| PATCH | `/privacy` | Update account privacy |
| PUT | `/follow/:id` | Follow or request to follow |
| PUT | `/unfollow/:id` | Unfollow user |
| PUT | `/follow-request/:requesterId/accept` | Accept request |
| PUT | `/follow-request/:requesterId/reject` | Reject request |
| GET | `/search?q=term` | Search users |
| PUT | `/change-password` | Change password |

### Post API

Base URL: `/post-api`

| Method | Endpoint | Functionality |
|---|---|---|
| POST | `/create` | Create post |
| GET | `/myposts` | Fetch personal posts |
| GET | `/:id` | Get post details |
| DELETE | `/:id` | Delete post |
| PUT | `/:id/like` | Like or unlike post |
| GET | `/:id/likes` | Get post likes |
| PUT | `/:id/comment` | Add comment |
| GET | `/:id/comments` | Get comments |
| DELETE | `/:postId/comment/:commentId` | Delete comment |
| PUT | `/:postId/comment/:commentId/like` | Like comment |
| POST | `/:postId/comment/:commentId/reply` | Add reply |
| PUT | `/:postId/comment/:commentId/reply/:replyId/like` | Like reply |

### Feed API

Base URL: `/feed-api`

| Method | Endpoint | Functionality |
|---|---|---|
| GET | `/` | Get personalized feed |
| GET | `/explore` | Explore posts |

### Admin API

Base URL: `/admin-api`

| Method | Endpoint | Functionality |
|---|---|---|
| GET | `/users` | Get registered users |
| PATCH | `/users` | Update account status |

##  Database Models

The application uses MongoDB with Mongoose schemas.

### 1. User Model

Stores user-related information:

- Name
- Username
- Email
- Hashed password
- Profile picture
- Bio
- Followers
- Following
- Follow requests
- Account privacy status
- Account activation status
- Admin role

### 2. Post Model

Stores post-related information:

- Author reference
- Image URL
- Caption
- Likes
- Comments
- Post activation status
- Creation and update timestamps

### 3. Comment Model

Stores comment-related information:

- Post reference
- Author reference
- Comment text
- Likes
- Replies
- Comment activation status
- Timestamps

##  Security Implementation

The application incorporates several security mechanisms:

- **Password Hashing:** bcryptjs protects stored passwords.
- **JWT Authentication:** Verifies authenticated users.
- **HTTP-only Cookies:** Helps prevent JavaScript access to authentication tokens.
- **Protected Routes:** Restricts access to authenticated pages.
- **Role-Based Authorization:** Separates administrator functionality from normal users.
- **Account Status Validation:** Prevents blocked accounts from accessing protected APIs.
- **Image Validation:** Restricts supported image MIME types and file size.
- **Environment Variables:** Keeps sensitive credentials outside application source code.

##  Cloudinary Image Upload

Cloudinary is integrated for image storage.

The image upload process:

1. User selects an image.
2. Frontend sends the image using `multipart/form-data`.
3. Multer processes the uploaded file.
4. The backend validates the file type and size.
5. The image buffer is uploaded to Cloudinary.
6. Cloudinary returns a secure image URL.
7. The URL is stored in MongoDB.

Supported image formats include JPEG, PNG, WebP, and GIF.

Maximum configured upload size: **5 MB**.

##  Deployment

The application can be deployed using:

- **Frontend:** Vercel
- **Backend:** Node.js hosting platform
- **Database:** MongoDB Atlas
- **Image Storage:** Cloudinary

Before deployment:

1. Configure production environment variables.
2. Update the frontend API base URL.
3. Configure backend CORS with the deployed frontend origin.
4. Ensure HTTPS and cross-site cookie settings are compatible.
5. Verify MongoDB and Cloudinary connections.
6. Build and deploy the frontend.

##  Future Enhancements

Potential improvements include:

- Real-time notifications.
- Direct messaging between users.
- Video sharing.
- Multiple image uploads.
- Hashtags and advanced search.
- Infinite scrolling and pagination.
- Advanced content moderation.
- Reporting inappropriate posts.
- Real-time chat functionality.
- Automated testing and API documentation.

##  Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch.
3. Implement your changes.
4. Test the application.
5. Submit a pull request.

##  License

No explicit license is included in the current source repository. Add an appropriate LICENSE file before distributing the project.

---

**SocialMedia Platform** — Connecting people through posts, conversations, and communities.

**Built with the MERN Stack.**

Deployment Link :- https://socialmedia-platform-gray.vercel.app