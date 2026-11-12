
"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Login will be connected to Supabase in the next step.");
  }

  return (
    <main className="auth-container">
      <h1>Welcome Back</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary" type="submit">
          Sign In
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: 20 }}>
        Don't have an account? <a href="/register">Create Account</a>
      </p>
    </main>
  );
}
