from dataclasses import dataclass


@dataclass
class DashboardItem:
    id: int
    title: str
    value: str
    description: str
