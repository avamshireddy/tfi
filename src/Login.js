import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "./assets/login-bg.jpg"; // import from src/assets

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", name);
      navigate("/quiz");
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${loginBg})`, // use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 style={{ color: "#ff1313" }}>KHANSAAR ENTRY BOOK</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="AAPKA NAAM KYA HAI?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />
        <input
          type="password"
          placeholder="TFI BANISA (optional password)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />
        <button type="submit"  style={{ padding: "10px 20px" }}>
              Khansaar entry button
        </button>
      </form>
    </div>
  );
}

export default Login;