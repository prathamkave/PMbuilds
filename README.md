# 🎬 StreamVerse — MERN OTT Platform

> A Netflix-inspired OTT streaming platform built with the **MERN Stack**, featuring user profiles, movies, web series, subscriptions, watch history, personalized recommendations, and an admin content management system.

---

## 📌 About The Project

**StreamVerse** is a full-stack OTT streaming platform developed using the MERN stack.

The goal is to build a production-style streaming platform inspired by modern OTT platforms such as Netflix, while implementing our own UI, architecture, branding, APIs, and features.

The project focuses on:

- Scalable backend architecture
- Secure authentication
- Multiple user profiles
- Movie and series management
- Video streaming
- Subscription management
- Online payments
- Watch history
- Watchlist
- Search and filtering
- Personalized recommendations
- Admin dashboard
- Analytics

---

# 🚀 Tech Stack

## Frontend

- React.js
- React Router
- Tailwind CSS
- Axios
- Redux Toolkit
- JavaScript
- HTML5
- CSS3

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt / bcryptjs
- Express Validator
- Multer

## Storage & Media

- Cloudinary / ImageKit
- AWS S3
- CDN
- HLS Streaming

## Payments

- Razorpay
- Stripe

## Development Tools

- Git
- GitHub
- Postman
- VS Code
- npm

---

# ✨ Features

## 👤 Authentication

- User registration
- User login
- User logout
- JWT authentication
- Access token
- Refresh token
- HTTP-only cookies
- Password hashing
- Forgot password
- Reset password
- Email verification
- Role-based authorization

---

# 👨‍👩‍👧 Profile System

Each account can have multiple profiles.

### Profile Features

- Create profile
- Update profile
- Delete profile
- Profile avatar
- Kids profile
- Profile PIN
- Language preference
- Maturity settings
- Autoplay settings
- Subtitle preferences

Example:

```text
Account
│
├── Main Profile
├── Family Profile
├── Kids Profile
└── Guest Profile
```

---

# 🎬 Movies

Users can:

- Browse movies
- View movie details
- Watch trailers
- Watch movies
- Add movies to My List
- Like / dislike movies
- Resume watching
- View related movies

### Movie Information

```text
Title
Description
Poster
Backdrop
Trailer
Video
Duration
Release Date
Language
Genres
Cast
Director
Age Rating
Quality
Premium Status
```

---

# 📺 Web Series

The platform supports complete web series.

```text
Series
│
├── Season 1
│   ├── Episode 1
│   ├── Episode 2
│   ├── Episode 3
│   └── Episode 4
│
└── Season 2
    ├── Episode 1
    ├── Episode 2
    └── Episode 3
```

### Series Features

- Multiple seasons
- Multiple episodes
- Episode thumbnails
- Episode descriptions
- Episode duration
- Continue watching
- Next episode
- Auto-play
- Season selection

---

# 🔎 Search

Users can search for:

- Movies
- Series
- Actors
- Directors
- Genres
- Languages

Example:

```http
GET /api/v1/search?q=batman
```

Future improvements:

- Search suggestions
- Search history
- Fuzzy search
- Advanced filtering
- Sorting
- MongoDB indexes

---

# 📚 Categories

The platform will provide different categories:

```text
Trending
Popular
New Releases
Movies
Series

Action
Comedy
Drama
Horror
Romance
Thriller
Sci-Fi
Crime
Adventure
Documentary
Anime

Hindi
English
Gujarati
Tamil
Telugu
Korean
```

---

# ▶️ Continue Watching

The platform stores the user's viewing progress.

Example:

```text
Continue Watching

Movie A   ███████░░░ 70%
Movie B   ████░░░░░░ 40%
Series C  █████████░ 90%
```

Users can resume playback from where they stopped.

---

# ❤️ Watchlist

Users can add content to their personal list.

```text
My List

├── Movies
├── Series
└── Premium Content
```

Features:

- Add to watchlist
- Remove from watchlist
- View watchlist
- Watch directly from watchlist

---

# 👍 Ratings & Feedback

Users can interact with content using:

```text
👍 Like
👎 Dislike
```

Future version:

```text
⭐ 1–5 Rating
```

Ratings will also be used for recommendation systems.

---

# 🧠 Recommendation System

The first version will use a rule-based recommendation system.

Example:

```text
User watches:

Action
Thriller
Crime

        ↓

Calculate user preferences

        ↓

Find similar content

        ↓

Generate recommendations
```

### Future Recommendation System

```text
Content-Based Filtering
        ↓
Collaborative Filtering
        ↓
Hybrid Recommendation
        ↓
Machine Learning
```

---

# 💳 Subscription System

The platform will support multiple subscription plans.

## 🟢 Mobile

```text
₹99 / Month

480p
1 Device
Mobile Only
Limited Downloads
Ads
```

## 🔵 Standard

```text
₹249 / Month

1080p
2 Devices
Mobile + Web + TV
Downloads
No Ads
```

## 🟣 Premium

```text
₹449 / Month

4K
4 Devices
Mobile + Web + TV
Downloads
HDR
No Ads
Premium Content
```

> Pricing is for demonstration purposes and can be changed according to the final product requirements.

---

# 💰 Payment System

Supported payment gateway:

```text
Razorpay
Stripe
```

Payment features:

- Create payment order
- Payment verification
- Subscription activation
- Payment history
- Failed payment handling
- Refund handling
- Subscription renewal
- Subscription cancellation

---

# 🎥 Video Streaming

Videos will not be stored directly inside MongoDB.

Architecture:

```text
User
 │
 ▼
React Frontend
 │
 ▼
Express API
 │
 ▼
Authentication
 │
 ▼
Video Authorization
 │
 ▼
CDN / Object Storage
 │
 ▼
HLS Streaming
 │
 ▼
Video Player
```

Future streaming features:

- HLS
- Adaptive bitrate streaming
- Multiple video qualities
- Signed URLs
- CDN
- Video authorization
- DRM

---

# 🛡️ Security

Security is a major part of the project.

Implemented / planned:

- Password hashing
- JWT authentication
- Refresh tokens
- HTTP-only cookies
- CORS
- Rate limiting
- Input validation
- MongoDB injection protection
- XSS protection
- Role-based authorization
- Secure payment verification
- Signed video URLs
- Environment variables

---

# 👨‍💼 Admin Panel

Admins can manage the entire platform.

## Dashboard

```text
Total Users
Total Movies
Total Series
Total Episodes
Total Revenue
Active Subscriptions
```

## Content Management

```text
Movies
Series
Episodes
Genres
Cast
Directors
Banners
Trailers
```

## User Management

```text
View Users
Block Users
Delete Users
Change Roles
View Subscriptions
View Devices
```

## Subscription Management

```text
Plans
Subscriptions
Payments
Revenue
Renewals
Cancellations
```

---

# 📊 Analytics

Future analytics dashboard:

```text
Total Users
Active Users
New Users
Watch Time
Popular Movies
Popular Series
Revenue
Subscriptions
Churn Rate
Most Watched Genres
```

---

# 🔔 Notifications

Users can receive:

- New movie notifications
- New episode notifications
- Subscription expiry notifications
- Payment notifications
- Promotional notifications

---

# 📱 Device Management

Users can view active devices.

Example:

```text
Your Devices

💻 Windows - Chrome
📱 Android
📺 Smart TV

Last Active:
2 minutes ago

[Sign Out]
```

---

# 🗄️ Database Models

The initial backend will contain the following models:

```text
User
Profile
Movie
Series
Episode
Genre
Cast
WatchHistory
Watchlist
Rating
Plan
Subscription
Payment
Device
Notification
Banner
```

Future models:

```text
Review
Coupon
SearchHistory
Recommendation
Download
PlaybackSession
ContentReport
AuditLog
Advertisement
ViewingAnalytics
```

---

# 🏗️ Backend Architecture

```text
server/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   │   └── cloud.js
│   │
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Profile.model.js
│   │   ├── Movie.model.js
│   │   ├── Series.model.js
│   │   ├── Episode.model.js
│   │   ├── Genre.model.js
│   │   ├── Cast.model.js
│   │   ├── WatchHistory.model.js
│   │   ├── Watchlist.model.js
│   │   ├── Rating.model.js
│   │   ├── Plan.model.js
│   │   ├── Subscription.model.js
│   │   ├── Payment.model.js
│   │   ├── Device.model.js
│   │   ├── Notification.model.js
│   │   └── Banner.model.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── profile.controller.js
│   │   ├── movie.controller.js
│   │   ├── series.controller.js
│   │   ├── episode.controller.js
│   │   ├── search.controller.js
│   │   ├── watchlist.controller.js
│   │   ├── history.controller.js
│   │   ├── rating.controller.js
│   │   ├── subscription.controller.js
│   │   ├── payment.controller.js
│   │   └── admin.controller.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── profile.routes.js
│   │   ├── movie.routes.js
│   │   ├── series.routes.js
│   │   ├── episode.routes.js
│   │   ├── genre.routes.js
│   │   ├── search.routes.js
│   │   ├── watchlist.routes.js
│   │   ├── history.routes.js
│   │   ├── rating.routes.js
│   │   ├── subscription.routes.js
│   │   ├── payment.routes.js
│   │   └── admin.routes.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── admin.middleware.js
│   │   ├── error.middleware.js
│   │   ├── upload.middleware.js
│   │   └── validation.middleware.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── recommendation.service.js
│   │   ├── payment.service.js
│   │   ├── streaming.service.js
│   │   └── notification.service.js
│   │
│   ├── validators/
│   │   ├── auth.validator.js
│   │   ├── movie.validator.js
│   │   └── payment.validator.js
│   │
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── bcrypt.js
│   │   ├── response.js
│   │   └── pagination.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# 🔌 API Structure

All APIs will use versioning.

```text
/api/v1
```

## Authentication

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
POST /api/v1/auth/refresh
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
```

## Profiles

```http
GET    /api/v1/profiles
POST   /api/v1/profiles
GET    /api/v1/profiles/:id
PATCH  /api/v1/profiles/:id
DELETE /api/v1/profiles/:id
```

## Movies

```http
GET    /api/v1/movies
POST   /api/v1/movies
GET    /api/v1/movies/:id
PATCH  /api/v1/movies/:id
DELETE /api/v1/movies/:id
```

## Series

```http
GET    /api/v1/series
POST   /api/v1/series
GET    /api/v1/series/:id
PATCH  /api/v1/series/:id
DELETE /api/v1/series/:id
```

## Episodes

```http
GET    /api/v1/series/:seriesId/episodes
POST   /api/v1/series/:seriesId/episodes
GET    /api/v1/episodes/:id
PATCH  /api/v1/episodes/:id
DELETE /api/v1/episodes/:id
```

## Search

```http
GET /api/v1/search?q=action
```

## Watchlist

```http
GET    /api/v1/watchlist
POST   /api/v1/watchlist/:contentId
DELETE /api/v1/watchlist/:contentId
```

## Watch History

```http
GET  /api/v1/history
POST /api/v1/history
```

## Ratings

```http
POST   /api/v1/ratings/:contentId
GET    /api/v1/ratings/:contentId
DELETE /api/v1/ratings/:contentId
```

## Subscriptions

```http
GET  /api/v1/plans
POST /api/v1/subscriptions
GET  /api/v1/subscriptions/me
POST /api/v1/subscriptions/cancel
```

## Payments

```http
POST /api/v1/payments/create
POST /api/v1/payments/verify
GET  /api/v1/payments/history
```

---

# 📈 Development Roadmap

## Phase 1 — Project Setup

- [ ] Initialize Node.js project
- [ ] Configure Express
- [ ] Configure MongoDB
- [ ] Configure environment variables
- [ ] Setup folder architecture
- [ ] Setup error handling
- [ ] Setup API versioning

## Phase 2 — Authentication

- [ ] Register
- [ ] Login
- [ ] Logout
- [ ] JWT
- [ ] Refresh token
- [ ] Password hashing
- [ ] Forgot password
- [ ] Email verification
- [ ] Role-based authorization

## Phase 3 — Profiles

- [ ] Create profile
- [ ] Update profile
- [ ] Delete profile
- [ ] Avatar
- [ ] Kids profile
- [ ] Profile PIN

## Phase 4 — Content Management

- [ ] Movie CRUD
- [ ] Series CRUD
- [ ] Episode CRUD
- [ ] Genre CRUD
- [ ] Cast
- [ ] Directors
- [ ] Banner management

## Phase 5 — User Features

- [ ] Search
- [ ] Watchlist
- [ ] Watch history
- [ ] Continue watching
- [ ] Like / dislike
- [ ] Categories
- [ ] Recommendations

## Phase 6 — Subscription

- [ ] Subscription plans
- [ ] Razorpay integration
- [ ] Payment verification
- [ ] Subscription activation
- [ ] Subscription expiry
- [ ] Cancellation
- [ ] Payment history

## Phase 7 — Streaming

- [ ] Video upload
- [ ] Video processing
- [ ] HLS
- [ ] Multiple resolutions
- [ ] CDN
- [ ] Signed URLs
- [ ] Playback authorization

## Phase 8 — Admin

- [ ] Admin dashboard
- [ ] User management
- [ ] Content management
- [ ] Subscription management
- [ ] Payment management
- [ ] Analytics
- [ ] Reports

## Phase 9 — Advanced

- [ ] Recommendation engine
- [ ] Notifications
- [ ] Device management
- [ ] Downloads
- [ ] Coupons
- [ ] Referral system
- [ ] Advanced analytics
- [ ] DRM

---

# 🧪 Testing

Backend APIs will be tested using:

- Postman
- Jest
- Supertest

Testing areas:

```text
Authentication
Authorization
CRUD
Payments
Subscriptions
Watch History
Watchlist
Search
Admin APIs
```

---

# 🌐 Deployment

## Frontend

Possible platforms:

```text
Vercel
Netlify
```

## Backend

Possible platforms:

```text
Render
Railway
AWS
```

## Database

```text
MongoDB Atlas
```

## Storage

```text
AWS S3
Cloudinary
ImageKit
```

## CDN / Streaming

```text
CloudFront
Cloudflare
Mux
Bunny Stream
```

---

# 🔐 Environment Variables

Example:

```env
PORT=5000

NODE_ENV=development

MONGO_URI=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

CLIENT_URL=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
```

Never commit `.env` to GitHub.

---

# 👥 Team

This project is being developed by:

### Developer 1

**Backend + Database + Authentication**

Responsibilities:

- Node.js
- Express.js
- MongoDB
- Authentication
- APIs
- Payments
- Streaming
- Backend architecture

### Developer 2

**Frontend + UI + Integration**

Responsibilities:

- React
- Tailwind CSS
- UI/UX
- API integration
- State management
- Video player
- Responsive design

Both developers can collaborate on:

- Architecture
- Testing
- Deployment
- Security
- Documentation

---

# 📊 Project Architecture

```text
                    ┌───────────────┐
                    │     USER      │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ React Client  │
                    └───────┬───────┘
                            │
                         HTTPS
                            │
                            ▼
                    ┌───────────────┐
                    │ Express API   │
                    └───────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
          MongoDB       Payment       Media
          Database      Gateway       Service
              │             │             │
              │             │             ▼
              │             │           CDN
              │             │             │
              ▼             ▼             ▼
           Users       Razorpay       Streaming
           Movies
           Series
           Profiles
           History
           Watchlist
```

---

# 🎯 Project Goals

The main goals of this project are:

1. Build a complete MERN-based OTT platform.
2. Learn production-style backend architecture.
3. Implement secure authentication and authorization.
4. Design scalable MongoDB schemas.
5. Implement subscription and payment systems.
6. Implement video streaming.
7. Build a personalized recommendation system.
8. Create an admin content management system.
9. Deploy the complete application.
10. Build a production-quality portfolio project.

---

# 📜 Disclaimer

This project is **inspired by modern OTT platforms** for educational and portfolio purposes.

It is not affiliated with or endorsed by Netflix or any other streaming service.

All branding, UI designs, source code, content, and assets used in this project will be original or properly licensed.

---

# ⭐ Future Improvements

```text
AI Recommendations
Voice Search
Multi-language Audio
Subtitles
Offline Downloads
Smart TV Support
Mobile Applications
Live Streaming
Watch Party
Social Features
Parental Controls
DRM
Advanced Analytics
```

---

# 🤝 Contributing

Contributions are welcome.

```bash
git clone <repository-url>

cd streamverse

npm install

npm run dev
```

Create a new branch:

```bash
git checkout -b feature/your-feature
```

Commit your changes:

```bash
git add .

git commit -m "feat: add your feature"
```

Push:

```bash
git push origin feature/your-feature
```

Then create a Pull Request.

---

# 📄 License

This project is created for educational and portfolio purposes.

---

# 🎬 StreamVerse

### A modern OTT streaming platform built with MERN.

```text
Watch.
Discover.
Enjoy.
```