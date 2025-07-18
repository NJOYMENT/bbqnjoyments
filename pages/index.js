
import { useState } from "react";
import { useRouter } from "next/router";
import { guestRoles } from "../guestData";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = name.trim().toLowerCase().replace(/\s+/g, "-");
    const role = guestRoles[formatted];

    if (role) {
      router.push(`/${role}`);
    } else {
      alert("Name not found. Please check spelling or contact an organiser.");
    }
  };

  return (
    <div style={{
      backgroundColor: "white",
      color: "black",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <h1>Welcome to the BBQ Guest Page 🔥</h1>
      <p>Enter your full name to get your personalized message and instructions.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Janay Marie"
          style={{
            padding: "10px",
            fontSize: "1rem",
            width: "300px",
            border: "1px solid black",
            borderRadius: "4px"
          }}
          required
        />
        <br />
        <button type="submit" style={{
          marginTop: "1rem",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px"
        }}>Continue</button>
      </form>
    </div>
  );
}
