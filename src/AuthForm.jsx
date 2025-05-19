import React, { useState } from 'react';
import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                alert('Logged in!');
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('Account created!');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div
        
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #e3f0ff 0%, #f9e7ff 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <h1
                style={{
                    color: '#1976d2',
                    marginBottom: '2rem',
                    fontWeight: 700,
                    fontSize: '2rem',
                    letterSpacing: 1,
                    textAlign: 'center',
                    fontFamily: 'Segoe UI, sans-serif',
                    textShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
                }}
            >
                University of Venda Application Assistance
            </h1>
            <div
                style={{
                    padding: '2rem',
                    maxWidth: 350,
                    width: '100%',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: 18,
                    boxShadow: '0 8px 32px rgba(25,118,210,0.10), 0 1.5px 8px rgba(249,231,255,0.12)',
                    fontFamily: 'Segoe UI, sans-serif',
                    backdropFilter: 'blur(2px)',
                }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                        color: '#1976d2',
                        marginBottom: '1.5rem',
                        letterSpacing: 1,
                    }}
                >
                    {isLogin ? 'Login' : 'Create Account'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            marginBottom: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: 6,
                            fontSize: 16,
                            outline: 'none',
                            transition: 'border 0.2s',
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            marginBottom: '1.5rem',
                            border: '1px solid #ccc',
                            borderRadius: 6,
                            fontSize: 16,
                            outline: 'none',
                            transition: 'border 0.2s',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: '#1976d2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 6,
                            fontWeight: 600,
                            fontSize: 16,
                            cursor: 'pointer',
                            marginBottom: '1rem',
                            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
                            transition: 'background 0.2s',
                        }}
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        background: 'none',
                        color: '#1976d2',
                        border: 'none',
                        borderRadius: 6,
                        fontWeight: 500,
                        fontSize: 15,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                    }}
                >
                    {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
                </button>
            </div>
        </div>
    );
}
