import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Customer Login</h1>

        <p>Access your Manresa account</p>

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
