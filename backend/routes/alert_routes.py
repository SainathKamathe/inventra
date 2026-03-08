from fastapi import APIRouter

router = APIRouter(prefix="/alert", tags=["alert"])


@router.get("/active")
def active_alerts() -> list[dict]:
    return [
        {"id": 1, "message": "Low stock in Store #3", "severity": "medium"},
        {"id": 2, "message": "Delayed transfer truck", "severity": "high"},
    ]
