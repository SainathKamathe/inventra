import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Chart from "../../components/Chart";
import { fetchDashboardData } from "../../services/api";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDashboardData();
        setItems(data);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-slate-800">Homepage Dashboard</h2>
        <p className="text-slate-500">Overview of live sample metrics</p>
      </header>

      {loading ? (
        <p className="text-slate-500">Loading data...</p>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                value={item.value}
                subtitle={item.description}
              />
            ))}
          </div>
          <Chart title="Performance Trend" />
          <Table
            columns={["Title", "Value", "Description"]}
            data={items.map((item) => ({
              title: item.title,
              value: item.value,
              description: item.description,
            }))}
          />
        </>
      )}
    </section>
  );
};

export default Dashboard;
