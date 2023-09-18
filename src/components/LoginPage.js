import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory(); 
  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
  
    const userData = JSON.parse(localStorage.getItem('userData'));
  console.log('userData', userData);
  console.log('email', email);
  console.log('password', password);

    if (!userData) {
      setError('User data not found in local storage');
      return;
    }
  
   if (userData.email.trim() === email.trim() && userData.password.trim() === password.trim()) {
  // ...
  alert('Login successful!');
  history.push('/profile');
} else {
  setError('Invalid email or password');
}
   
    
  };
  

  return (
    <div className="centered-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
