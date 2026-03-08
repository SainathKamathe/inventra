from fastapi import APIRouter

from backend.services.inventory_service import get_inventory_status

router = APIRouter(prefix="/inventory", tags=["inventory"])


@router.get("/status")
def inventory_status() -> dict:
    return get_inventory_status()
