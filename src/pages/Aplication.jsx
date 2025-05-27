import React, { useState } from 'react';
import db from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const universitySuggestions = [
  "University of Cape Town",
  "University of the Witwatersrand",
  "University of Pretoria",
  "University of Venda",
  "University of Johannesburg",
  "University of KwaZulu-Natal",
  "University of Limpopo",
  "University of Western Cape",
  "Tshwane University of Technology",
  "Nelson Mandela University",
  "University of South Africa",
  "University of Stellenbosch",
  "University of Rhodes",
];

const degreeSuggestions = [
  "Bachelor of Science",
  "Bachelor of Arts",
  "Bachelor of Commerce",
  "Bachelor of Engineering",
  "Bachelor of Laws",
  "Bachelor of Education",
  "Bachelor of Medicine",
  "Bachelor of Social Science",
  "Bachelor of Computer Science",
  "Bachelor of Nursing",
  "Bachelor of Architecture",
  "Bachelor of Fine Arts",
];

export default function Application() {
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [names, setNames] = useState('');
  const [surnames, setSurnames] = useState('');
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await addDoc(collection(db, "userApplications"), {
        names,
        surnames,
        school,
        address,
        university,
        degree,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setNames('');
      setSurnames('');
      setSchool('');
      setAddress('');
      setUniversity('');
      setDegree('');
    } catch (err) {
      alert("Error submitting application: " + err.message);
    }
    setLoading(false);
  };

  // Education-themed background and styles
  const backgroundStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
    backgroundImage: `url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: 0,
    margin: 0,
    fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
  };

  const cardStyle = {
    background: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    padding: '2.5rem 2rem',
    maxWidth: 500,
    margin: '3rem auto',
    border: '1px solid #e3e3e3',
    position: 'relative',
    animation: 'fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both'
  };

  const inputStyle = {
    marginLeft: '1rem',
    border: '1px solid #b3c6e0',
    borderRadius: 6,
    padding: '0.5rem',
    fontSize: '1rem',
    background: '#f7fafc',
    transition: 'box-shadow 0.2s, border 0.2s',
    boxShadow: '0 0 0 0 #4f8cff'
  };

  const labelStyle = {
    fontWeight: 500,
    color: '#2d3a4a'
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '0.7rem 2rem',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 2px 8px rgba(79,140,255,0.08)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  

  return (
    <div style={backgroundStyle}>
      <div style={{
        ...cardStyle,
        border: '2px solid #4f8cff',
        boxShadow: '0 12px 36px 0 rgba(79,140,255,0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <h2 style={{
          textAlign: 'center',
          color: '#4f8cff',
          fontWeight: 700,
          fontSize: '2rem',
          marginBottom: '0.5rem',
          letterSpacing: '0.5px',
          zIndex: 2,
          position: 'relative'
        }}>
          Nengovhela Application 
          Assistance 
        </h2>
        
                  <svg width="100%" height="60" viewBox="0 0 500 60" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                    <path d="M0,30 Q125,60 250,30 T500,30 V60 H0 Z" fill="#e0eafc" />
                    <path d="M0,40 Q125,20 250,40 T500,40 V60 H0 Z" fill="#4f8cff22" />
                  </svg>
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    
                    
                    <p style={{
                      color: '#4f8cff',
                      fontWeight: 500,
                      marginBottom: 24,
                      fontSize: '1.1rem'
                    }}>
                      Start your university application here!
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '1rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span role="img" aria-label="user" style={{ fontSize: 22, marginRight: 8 }}>👤</span>
                      <label style={labelStyle}>
                        Names:
                        <input
                    type="text"
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    style={inputStyle}
                    required
                        />
                      </label>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span role="img" aria-label="surname" style={{ fontSize: 22, marginRight: 8 }}>📝</span>
                      <label style={labelStyle}>
                        Surnames:
                        <input
                    type="text"
                    value={surnames}
                    onChange={(e) => setSurnames(e.target.value)}
                    style={inputStyle}
                    required
                        />
                      </label>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span role="img" aria-label="school" style={{ fontSize: 22, marginRight: 8 }}>🏫</span>
                      <label style={labelStyle}>
                        Current High School Name:
                        <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    style={inputStyle}
                    required
                        />
                      </label>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span role="img" aria-label="address" style={{ fontSize: 22, marginRight: 8 }}>📍</span>
                      <label style={labelStyle}>
                        School Address:
                        <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={inputStyle}
                    required
                        />
                      </label>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span role="img" aria-label="university" style={{ fontSize: 22, marginRight: 8 }}>🏛️</span>
                      <label style={labelStyle}>
                        University of Choice:
                        <input
                    type="text"
                    list="university-list"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    style={inputStyle}
                    required
                        />
                        <datalist id="university-list">
                    {universitySuggestions.map((uni) => (
                      <option key={uni} value={uni} />
                    ))}
                        </datalist>
                      </label>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span role="img" aria-label="degree" style={{ fontSize: 22, marginRight: 8 }}>🎓</span>
                      <label style={labelStyle}>
                        Degree of Choice:
                        <input
                    type="text"
                    list="degree-list"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    style={inputStyle}
                    required
                        />
                        <datalist id="degree-list">
                    {degreeSuggestions.map((deg) => (
                      <option key={deg} value={deg} />
                    ))}
                        </datalist>
                      </label>
                    </div>
                    <button type="submit" disabled={loading} style={{
                      ...buttonStyle,
                      boxShadow: '0 4px 16px #4f8cff33',
                      transition: 'background 0.2s, transform 0.2s',
                      transform: loading ? 'scale(0.98)' : 'scale(1)'
                    }}>
                      {loading ? (
                        <span>
                    <span className="loader" style={{
                      display: 'inline-block',
                      width: 18,
                      height: 18,
                      border: '3px solid #fff',
                      borderTop: '3px solid #4f8cff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      marginRight: 8,
                      verticalAlign: 'middle'
                    }} />
                    Submitting...
                        </span>
                      ) : "Submit Application"}
                    </button>
                  </form>
                  {success && (
                    <div style={{
                      color: 'green',
                      marginTop: '1rem',
                      fontWeight: 500,
                      background: '#e6ffe6',
                      border: '1px solid #b2f5b2',
                      borderRadius: 6,
                      padding: '0.7rem 1rem',
                      textAlign: 'center'
                    }}>
                      <span role="img" aria-label="success" style={{ marginRight: 6 }}>✅</span>
                      Application submitted successfully!
                    </div>
                  )}

                  <div style={{
                    background: '#f9f9f9',
                    border: '1px solid #ddd',
                    padding: '1rem',
                    margin: '1.5rem auto 0 auto',
                    maxWidth: 500,
                    borderRadius: 8,
                    fontSize: '0.98rem',
                    boxShadow: '0 2px 8px #e0eafc'
                  }}>
                    <strong style={{ color: '#4f8cff' }}>Important:</strong>
                    <p>
                      Please send all required supporting documents (such as your ID, academic transcripts, and proof of residence) to our email address:{" "}
                      <a href="mailto:applications@gmail.com" style={{ color: '#38b6ff', textDecoration: 'underline' }}>applications@gmail.com</a>
                    </p>
                    <p>
                      Your application will only be processed once we have received these documents.
                    </p>
                  </div>
                  {/* Decorative bottom wave */}
        <svg width="100%" height="60" viewBox="0 0 500 60" style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 0 }}>
          <path d="M0,30 Q125,0 250,30 T500,30 V60 H0 Z" fill="#e0eafc" />
          <path d="M0,40 Q125,60 250,40 T500,40 V60 H0 Z" fill="#4f8cff22" />
        </svg>
        {/* Loader animation keyframes */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}
        </style>
      </div>
    </div>
  );
}