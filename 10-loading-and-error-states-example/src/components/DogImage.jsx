import { useEffect, useState } from "react";
import { Loader } from "./Loader";

export const DogImage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  const fetchDog = async () => {
    try {
      setLoading(true);
      setError("");
      setData({});

      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      if (!response.ok) {
        throw new Error("Failed to fetch dog image.");
      }

      const result = await response.json();

      setData(result);
      setCount((prev) => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a dog image when the component mounts
  useEffect(() => {
    fetchDog();
  }, []);

  // Clear the image
  const clearImage = () => {
    setData({});
    setError("");
  };

  // Extract breed name from image URL
  const getBreedName = () => {
    if (!data.message) return "";

    const breed = data.message.split("/")[4]; // breeds/hound-afghan/...
    return breed
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <h1>Random Dog Generator</h1>

      <button onClick={fetchDog} disabled={loading}>
        {loading ? <Loader /> : "Get Dog Image"}
      </button>

      <button onClick={clearImage} style={{ marginLeft: "10px" }}>
        Clear Image
      </button>

      <h3>Images Loaded: {count}</h3>

      {loading && <h2>Loading...</h2>}

      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {!loading && !error && data.message && (
        <div style={{ marginTop: "20px" }}>
          <h3>Breed: {getBreedName()}</h3>

          <img
            src={data.message}
            alt="Dog"
            width="350"
            style={{
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DogImage;
