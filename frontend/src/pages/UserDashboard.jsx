import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  const [allocations, setAllocations] = useState([]);

  const fetchData = async () => {
    setResources((await api.get("/resources")).data);
    setAllocations((await api.get("/allocations")).data);
  };

  const request = async (resourceId) => {
    await api.post("/allocations", { resourceId });
    fetchData();
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatus = (id) =>
    allocations.find(a => a.resource?._id === id)?.status;

  return (
    <div className="dashboard">
      <header>
        <h2>User Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </header>

      <section>
        <h3>Resources</h3>
        <ul>
          {resources.map(r => {
            const status = getStatus(r._id);

            return (
              <li key={r._id}>
                {r.name} — {status || (r.isAllocated ? "Allocated" : "Available")}

                {!status && !r.isAllocated && (
                  <button onClick={() => request(r._id)}>Request</button>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
