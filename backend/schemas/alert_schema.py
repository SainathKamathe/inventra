from pydantic import BaseModel


class AlertItem(BaseModel):
    id: int
    message: str
    severity: str
