import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [resourceName, setResourceName] = useState("");
  const [resources, setResources] = useState([]);
  const [allocations, setAllocations] = useState([]);

  const fetchAll = async () => {
    setResources((await api.get("/resources")).data);
    setAllocations((await api.get("/allocations")).data);
  };

  const addResource = async () => {
    if (!resourceName.trim()) return;
    await api.post("/resources", { name: resourceName });
    setResourceName("");
    fetchAll();
  };

  const approve = async (id) => {
    await api.put(`/allocations/${id}/approve`);
    fetchAll();
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="dashboard">
      {/* HEADER */}
      <header className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </header>

      {/* CREATE RESOURCE */}
      <section className="card">
        <h3>Create Resource</h3>
        <div className="row">
          <input
            placeholder="Resource name"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
          />
          <button onClick={addResource}>Add</button>
        </div>
      </section>

      {/* AVAILABLE RESOURCES */}
      <section className="card">
        <h3>Available Resources</h3>
        <ul>
          {resources
            .filter(r => !r.isAllocated)
            .map(r => (
              <li key={r._id} className="available">
                {r.name}
                <span className="badge available">Available</span>
              </li>
            ))}
        </ul>
      </section>

      {/* ALLOCATED RESOURCES (COLLAPSIBLE) */}
      <section className="card">
        <details>
          <summary>Allocated Resources</summary>
          <ul>
            {resources
              .filter(r => r.isAllocated)
              .map(r => (
                <li key={r._id} className="allocated">
                  {r.name}
                  <span className="badge allocated">Allocated</span>
                </li>
              ))}
          </ul>
        </details>
      </section>

      {/* ALLOCATION REQUESTS (COLLAPSIBLE) */}
      <section className="card">
        <details open>
          <summary>Allocation Requests</summary>
          <ul>
            {allocations.map(a => (
              <li key={a._id}>
                {a.resource?.name}
                <span className={`badge ${a.status.toLowerCase()}`}>
                  {a.status}
                </span>

                {a.status === "PENDING" && (
                  <button onClick={() => approve(a._id)}>
                    Approve
                  </button>
                )}
              </li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  );
}
