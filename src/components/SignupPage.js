import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignup = () => {
    // Basic validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
  
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some((user) => user.email === email);
  
    if (userExists) {
      setError('User with this email already exists');
      return;
    }
  
    const newUser = {
      name,
      email,
      password, 
    };
  
    console.log('newUser', newUser); 
    localStorage.setItem('userData', JSON.stringify(newUser));
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    
    
    history.push('/profile');
    alert('Account created!'); 
  };
  

  return (
    <div className="centered-container">
      <h2>Create Account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
};

export default SignupPage;
