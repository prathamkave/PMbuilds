# server 🚀

A scalable, production-ready Express.js backend scaffolded with **[express-jetstart](https://github.com/AvusalaChetan/express-jetstart-CLI)** ⚡

---

## 📋 Features

- ⚡ **Production-Grade Architecture**: Clean separation of concerns with controllers, services, routes, models, and middlewares.
- 🛡️ **Security & Utility Middleware**: Pre-configured with `cors`, `morgan` HTTP logger, and centralized error handling.
- 🗄️ **Database Ready**: Pre-configured database connection helpers for MongoDB, PostgreSQL, and MySQL.
- ⚙️ **Environment Management**: Fully configured with `dotenv` and `.env.example` templates.
- 🧹 **Code Quality & Formatting**: Ready-to-use ESLint and Prettier configs for consistent standards.
- 🔄 **Hot Reloading**: Instant feedback loop during development with automated reloads.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Your `.env` file is pre-configured and ready to use:

| Variable | Description |
| :--- | :--- |
| `PORT` | Server listening port (default: 3000) |
| `DATABASE_URL` | Database connection URI |
| `JWT_SECRET` | Secret key for JWT signing |

### 3. Run the Server

**Development Mode (Hot Reload):**
```bash
npm run dev
```

**Production Build & Start:**
```bash
npm run build
npm start
```

Server will be running at `http://localhost:3000` 🚀
