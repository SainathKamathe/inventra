from pydantic import BaseModel


class BillingSummary(BaseModel):
    today_total: str
    transactions: int
