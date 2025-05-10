"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === "manish@admin.com" && password === "password") {
      setLoading(true);
      setTimeout(() => {
        router.push("/");
      }, 1000); // redirect after 1 second
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg border border-pink-200">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Welcome Back 👋
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-pink-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-pink-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-400 to-blue-500 text-white py-2 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
