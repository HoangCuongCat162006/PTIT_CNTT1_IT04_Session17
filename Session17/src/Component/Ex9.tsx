import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const err: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) err.email = "Email không hợp lệ";
    if (password.length < 6) err.password = "Mật khẩu phải >= 6 ký tự";
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }
    setError({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Đăng nhập thành công!");
    }, 1500);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Secure Access Login</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />{" "}
            Remember me
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
