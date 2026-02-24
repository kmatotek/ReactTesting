import React, { useState } from "react";
import api from "../api/axios";
import Alert from "./Alert";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertType, setAlertType] = useState<"success" | "danger" | null>(null);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", { email, password });
      setAlertType("success");
      setAlertMessage("register Successful!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // this reads the message your backend sends back
        setAlertMessage(
          error.response?.data?.message || "Something went wrong",
        );
      } else {
        setAlertMessage("something went wronog");
      }
      setAlertType("danger");
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
      <button type="submit">Register</button>
    </form>
  );
}
