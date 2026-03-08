# fullstack-dashboard

`fullstack-dashboard` is a full-stack web application built with:

- **Frontend:** React (Vite), Tailwind CSS, Axios
- **Backend:** FastAPI (Python)
- **Infra:** Docker Compose

It includes a modern dashboard UI with a navbar, responsive layout, and data cards populated from a FastAPI endpoint.

---

## Features

- React + Vite app with component-based structure
- Tailwind CSS for a clean responsive dashboard UI
- Axios-based API service layer
- FastAPI backend with REST endpoints
- CORS configured to allow frontend requests
- Environment-driven backend configuration
- Organized monorepo-style folder layout

---

## Folder Structure

```text
inventra/
│
├── README.md
├── .env
├── docker-compose.yml
├── requirements.txt
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   ├── logo.png
│   │   │   └── icons/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Table.jsx
│   │   │   ├── Chart.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Button.jsx
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Billing/
│   │   │   │   ├── POS.jsx
│   │   │   │   ├── CreateBill.jsx
│   │   │   │   └── BillHistory.jsx
│   │   │   ├── DataAgent/
│   │   │   │   └── DataAgentDashboard.jsx
│   │   │   ├── InventoryAgent/
│   │   │   │   └── InventoryDashboard.jsx
│   │   │   ├── AlertAgent/
│   │   │   │   └── AlertDashboard.jsx
│   │   │   ├── TransferAgent/
│   │   │   │   └── TransferDashboard.jsx
│   │   │   ├── NegotiationAgent/
│   │   │   │   └── NegotiationDashboard.jsx
│   │   │   └── VerificationAgent/
│   │   │       └── VerificationDashboard.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── billingApi.js
│   │   │   ├── inventoryApi.js
│   │   │   └── negotiationApi.js
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   └── useFetch.js
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/
│   ├── main.py
│   ├── config/
│   │   └── settings.py
│   ├── database/
│   │   ├── connection.py
│   │   ├── models.py
│   │   └── seed_data.py
│   ├── agents/
│   │   ├── data_agent.py
│   │   ├── inventory_agent.py
│   │   ├── alert_agent.py
│   │   ├── transfer_agent.py
│   │   ├── negotiation_agent.py
│   │   └── verification_agent.py
│   ├── routes/
│   │   ├── dashboard_routes.py
│   │   ├── inventory_routes.py
│   │   ├── alert_routes.py
│   │   ├── transfer_routes.py
│   │   ├── negotiation_routes.py
│   │   └── billing_routes.py
│   ├── services/
│   │   ├── inventory_service.py
│   │   ├── forecast_service.py
│   │   ├── negotiation_service.py
│   │   └── billing_service.py
│   ├── schemas/
│   │   ├── inventory_schema.py
│   │   ├── alert_schema.py
│   │   ├── transfer_schema.py
│   │   └── billing_schema.py
│   └── utils/
│       ├── logger.py
│       └── helpers.py
│
├── database/
│   └── schema.sql
│
└── docs/
    ├── architecture.png
    └── system_design.md
```

---

## Environment

The backend reads configuration from `.env`:

```env
APP_NAME=fullstack-dashboard
API_PREFIX=/api
BACKEND_HOST=0.0.0.0
BACKEND_PORT=8000
FRONTEND_URL=http://localhost:5173
ENVIRONMENT=development
```

---

## Run Locally

### 1) Backend (FastAPI on port 8000)

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

### 2) Frontend (Vite)

```bash
cd frontend
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`

---

## API Endpoints

### Required endpoint

- `GET /api/data`
  - Returns a JSON list of sample dashboard objects.

### Additional sample endpoints

- `GET /api/inventory/status`
- `GET /api/alert/active`
- `GET /api/transfer/recommendations`
- `GET /api/negotiation/items`
- `GET /api/billing/summary`

---

## Docker Compose

```bash
docker compose up --build
```

This starts:

- FastAPI backend on port `8000`
- Vite frontend on port `5173`

