from fastapi import APIRouter

router = APIRouter(prefix="/transfer", tags=["transfer"])


@router.get("/recommendations")
def recommendations() -> list[dict]:
    return [{"route": "Warehouse A -> Store B", "priority": "high"}]
