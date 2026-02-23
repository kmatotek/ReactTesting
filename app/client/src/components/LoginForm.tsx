import React, { useState } from "react";
import api from "../api/axios";
import Alert from "../components/Alert";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertType, setAlertType] = useState<"success" | "danger" | null>(null);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      setAlertType("success");
      setAlertMessage("Login Successful!");
    } catch (error) {
      setAlertType("danger");
      setAlertMessage("Invalid email or password");
    }
  };

  //{alertType && <Alert type={alertType} message={alertMessage} />}
  // this prevents it from showing when alertType is null

  return (
    <form onSubmit={handleSubmit}>
      {alertType && <Alert type={alertType} message={alertMessage} />}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
