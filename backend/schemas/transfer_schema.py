from pydantic import BaseModel


class TransferRecommendation(BaseModel):
    route: str
    priority: str
