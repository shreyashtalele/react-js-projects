import { useState, useEffect } from "react";

export const GitHub = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const gitUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://api.github.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch GitHub users.");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    gitUsers();
  }, []);

  const filteredUsers = data.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub Users</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "20px",
        }}
      />

      {filteredUsers.length === 0 ? (
        <h3>No users found.</h3>
      ) : (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "15px",
              width: "300px",
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="80"
              style={{ borderRadius: "50%" }}
            />

            <h3>{user.login}</h3>

            <p>ID: {user.id}</p>

            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        ))
      )}
    </div>
  );
};
