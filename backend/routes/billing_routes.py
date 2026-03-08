from fastapi import APIRouter

from backend.services.billing_service import get_billing_summary

router = APIRouter(prefix="/billing", tags=["billing"])


@router.get("/summary")
def billing_summary() -> dict:
    return get_billing_summary()
