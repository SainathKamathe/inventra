from fastapi import APIRouter

from backend.database.seed_data import SAMPLE_DATA

router = APIRouter(tags=["dashboard"])


@router.get("/data")
def get_data() -> list[dict]:
    return SAMPLE_DATA
