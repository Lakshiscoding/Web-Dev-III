# Assignment 3 - Inventory and Data Management System

Node.js, Express, MongoDB, Mongoose, dotenv.

## Run
1. `npm install`
2. Copy `.env.example` to `.env` (MongoDB should be running)
3. `npm start`  (server on http://localhost:5000)

## Endpoints
- POST   /api/products            create product
- GET    /api/products            list (filter, sort, pagination)
- GET    /api/products/:id        single product
- PUT    /api/products/:id        update product
- PATCH  /api/products/:id/stock  body {"change": 10} or {"change": -3}
- DELETE /api/products/:id        delete product
- GET    /api/products/low-stock  quantity <= reorderLevel
- GET    /api/products/summary    category-wise summary (aggregation)

Query params for GET /api/products: category, supplier, search, minPrice, maxPrice, sort (e.g. -price), page, limit