# Short URL Generator

<p align="center">
  <img src="docs/banner.svg" alt="Short URL Generator Banner" width="600"/>
</p>

A simple and modern web application to shorten long URLs, track visit history, and manage your links with user authentication. Built with Node.js, Express, MongoDB, and EJS.

---

## Features

- 🔗 **Shorten URLs**: Instantly generate short links for any valid URL.
- 👤 **User Registration & Login**: Secure authentication with JWT and password hashing.
- 📜 **Visit History**: Authenticated users can view their shortened URLs and visit logs.
- 🛡️ **Validation**: Email, password, and URL validation for security and reliability.
- 🎨 **Responsive UI**: Clean, modern interface styled with CSS and EJS templates.

## Project Structure

```
.
├── config/              # Database connection
├── controllers/         # Route controllers (auth, shorturl)
├── helpers/             # Validation and utility functions
├── middlewares/         # Authentication middleware
├── modal/               # Mongoose schemas
├── public/              # Static assets (CSS, images)
├── router/              # Express routers
├── views/               # EJS templates
├── .env                 # Environment variables
├── index.js             # App entry point
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Atlas or local)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/short-url.git
   cd short-url
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB URI and JWT secret.

4. **Start the server:**
   ```sh
   npm start
   ```
   The app will run at [http://localhost:5000](http://localhost:5000).

## Usage

- Register a new account or log in.
- Paste your long URL and generate a short link.
- View your visit history and track link usage.

## Screenshots

<p align="center">
  <img src="docs/screenshot-home.png" width="400" alt="Home Page"/>
  <img src="docs/screenshot-history.png" width="400" alt="Visit History"/>
</p>

## License

[ISC](LICENSE)

---

## Banner SVG (`docs/banner.svg`)

````svg
<!-- filepath: docs/banner.svg -->
<svg width="600" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="120" rx="20" fill="#360259"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="38" font-family="Segoe UI, Arial, sans-serif" fill="#fff" font-weight="bold">
    Short URL Generator
  </text>
  <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" font-size="18" font-family="Segoe UI, Arial, sans-serif" fill="#ff7e5f">
    Shorten links & track visits easily!
  </text>
</svg>
