from pydantic import BaseModel


class InventoryStatus(BaseModel):
    healthy_items: int
    low_stock_items: int
