# QuickWrench Setup Guide

## Prerequisites
- Node.js v22+
- PostgreSQL installed and running

## Project Structure
    root/
    ├── client/ # React frontend
    ├── server/ # Express backend
    └── docs/ # Project documentation

## Setup Instructions

1. Clone the repo and navigate to the root:
   
   git clone https://github.com/SethWatson91/QuickWrench.git
   cd QuickWrench
   
2. Install dependencies:

    npm run install-all

3. Set up .env in /server/:

    PGUSER=your_postgres_user
    PGPASSWORD=your_password
    PGHOST=localhost
    PGPORT=5432
    PGDATABASE=your_database

4. Run servers:

    In one terminal:

    cd server && npm run dev

    In another terminal:

    cd client && npm run dev

5. Test:

    Backend: http://localhost:3001/api/quickwrench/health

    Frontend: http://localhost:5173