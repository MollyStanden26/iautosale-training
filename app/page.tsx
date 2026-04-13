"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn, AlertCircle } from "lucide-react";

/* ================================================================== */
/*  LOGIN PAGE — root page of the training portal                      */
/* ================================================================== */

const T = {
  bgPage: "#0B111E",
  bgCard: "#0D1525",
  border: "#1E2D4A",
  textPrimary: "#F1F5F9",
  textSecondary: "#C5CDD8",
  textMuted: "#94A3BB",
  textDim: "#A0AEBF",
  teal: "#008C7C",
  teal200: "#4DD9C7",
  red: "#F87171",
  redBg: "#2B0F0F",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/training");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: T.bgPage,
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: T.bgCard,
          borderRadius: 20,
          border: `1px solid ${T.border}`,
          padding: "40px 36px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span
            className="font-heading"
            style={{ fontSize: 28, color: T.teal200 }}
          >
            <span style={{ fontWeight: 300 }}>iAuto</span>
            <span style={{ fontWeight: 900 }}>Sale</span>
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="font-body"
          style={{
            textAlign: "center",
            fontSize: 14,
            color: T.textMuted,
            margin: "0 0 32px",
          }}
        >
          Sales Training Portal
        </p>

        {/* Error */}
        {error && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderRadius: 12,
              background: T.redBg,
              border: `1px solid ${T.red}30`,
              marginBottom: 20,
            }}
          >
            <AlertCircle size={16} style={{ color: T.red, flexShrink: 0 }} />
            <span
              className="font-body"
              style={{ fontSize: 13, color: T.red }}
            >
              {error}
            </span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label
              className="font-body"
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 500,
                color: T.textSecondary,
                marginBottom: 6,
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@iautosale.co.uk"
              required
              style={{
                width: "100%",
                padding: "11px 14px",
                fontSize: 14,
                borderRadius: 12,
                border: `1px solid ${T.border}`,
                background: "#FFFFFF",
                color: "#374151",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 24 }}>
            <label
              className="font-body"
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 500,
                color: T.textSecondary,
                marginBottom: 6,
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "11px 14px",
                fontSize: 14,
                borderRadius: 12,
                border: `1px solid ${T.border}`,
                background: "#FFFFFF",
                color: "#374151",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 600,
              color: "#FFFFFF",
              background: T.teal,
              border: "none",
              borderRadius: 100,
              cursor: loading ? "default" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "opacity 0.15s ease",
            }}
          >
            <LogIn size={16} />
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Demo hint */}
        <p
          className="font-mono"
          style={{
            textAlign: "center",
            fontSize: 11,
            color: T.textDim,
            marginTop: 24,
            lineHeight: 1.6,
          }}
        >
          Demo: demo@iautosale.co.uk / demo
        </p>
      </div>
    </div>
  );
}
