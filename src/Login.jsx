import React, { useState } from 'react';
import { database, ref, set } from './firebase';

function Login() {
  const [name, setNameValue] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (name.trim()) {
      // Save to Firebase under /students/
      const userRef = ref(database, 'students/' + name);
      set(userRef, {
        name,
        loggedInAt: new Date().toISOString(),
      }).then(() => {
        alert('Student saved!');
        localStorage.setItem('studentName', name);
        window.location.href = 'https://my-reacr-app.vercel.app/';
      });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={name}
        onChange={(e) => setNameValue(e.target.value)}
        placeholder="Enter your name"
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
