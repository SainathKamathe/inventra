from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.config.settings import get_settings
from backend.routes import (
    alert_routes,
    billing_routes,
    dashboard_routes,
    inventory_routes,
    negotiation_routes,
    transfer_routes,
)

settings = get_settings()

app = FastAPI(title=settings.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard_routes.router, prefix=settings.api_prefix)
app.include_router(inventory_routes.router, prefix=settings.api_prefix)
app.include_router(alert_routes.router, prefix=settings.api_prefix)
app.include_router(transfer_routes.router, prefix=settings.api_prefix)
app.include_router(negotiation_routes.router, prefix=settings.api_prefix)
app.include_router(billing_routes.router, prefix=settings.api_prefix)


@app.get("/")
def health_check():
    return {"status": "ok", "app": settings.app_name}
