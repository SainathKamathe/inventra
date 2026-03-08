from fastapi import APIRouter

from backend.services.negotiation_service import get_negotiation_items

router = APIRouter(prefix="/negotiation", tags=["negotiation"])


@router.get("/items")
def negotiation_items() -> list[dict]:
    return get_negotiation_items()
