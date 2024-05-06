import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
      e.preventDefault();
      console.log(e);
      // Send login request to API (Vercel)
      try {
          const response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
          });
          if (response.ok) {
              navigate('/admin'); // Redirect to admin page
          } else {
              // Handle error
          }
      } catch (error) {
          console.error('Error logging in:', error);
      }
  };

  return (
      <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Login</button>
          </form>
      </div>
  );
};

export default Login;