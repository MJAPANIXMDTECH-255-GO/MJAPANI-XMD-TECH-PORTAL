
"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    alert("Registration will be connected to Supabase in the next step.");
  }

  return (
    <main className="auth-container">
      <h1>Create Account</h1>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (minimum 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />

        <button className="btn btn-primary" type="submit">
          Create Account
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: 20 }}>
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </main>
  );
}
