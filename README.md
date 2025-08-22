# AlgoNest

AlgoNest is a full-stack trading and investment platform that provides users with tools for portfolio management, market analysis, and trading operations.

> **Note:** The frontend code is maintained in a separate private repository for security reasons. This repository contains only the dashboard and backend components.

## Project Structure

The project is divided into two main components:

### 2. Dashboard (`/dashboard`)
- Main trading interface
- Built with React and Chart.js
- Features:
  - WatchList: Monitor stocks in real-time
  - Holdings: View and manage your portfolio
  - Orders: Track and manage orders
  - Positions: Monitor current market positions
  - Funds: Manage your trading capital
  - Visual Analytics: Charts and graphs for data visualization

### 3. Backend (`/backend`)
- Server-side application
- Built with Node.js and Express
- Features:
  - RESTful API endpoints
  - MongoDB database integration
  - User authentication with Passport.js
  - Models for:
    - Holdings
    - Orders
    - Positions
    - Users

## Technologies Used

- **Frontend & Dashboard:**
  - React.js
  - Chart.js for data visualization
  - CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Passport.js for authentication

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/akarshanjangid/AlgoNest.git
   ```

2. Install dependencies for each component:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Dashboard
   cd ../dashboard
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. Start the development servers:
   ```bash
   # Backend
   cd backend
   npm start

   # Dashboard
   cd dashboard
   npm start

   # Frontend
   cd frontend
   npm start
   ```

## Features

- Real-time market data monitoring
- Portfolio management
- Order tracking and management
- Position monitoring
- Fund management
- Visual analytics and charts
- Secure user authentication
- Responsive design for all devices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- GitHub: [@akarshanjangid](https://github.com/akarshanjangid)
