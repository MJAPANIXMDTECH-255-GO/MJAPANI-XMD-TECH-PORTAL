
"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            username: username.toLowerCase().trim(),
          },
        },
      });

      if (error) throw error;

      setMessage(
        "Registration submitted. Check your email for a confirmation link."
      );
    } catch (error) {
      setMessage(error.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
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

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      {message && (
        <p role="status" style={{ marginTop: 18, textAlign: "center" }}>
          {message}
        </p>
      )}

      <p style={{ textAlign: "center", marginTop: 20 }}>
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </main>
  );
}
