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

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Application Page</h2>
      <p>Start your university application here!</p>

      {/* Inform users to send documents via email */}
    

      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Names:
            <input
              type="text"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              style={{ marginLeft: '1rem' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Surnames:
            <input
              type="text"
              value={surnames}
              onChange={(e) => setSurnames(e.target.value)}
              style={{ marginLeft: '1rem' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Current High School Name:
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              style={{ marginLeft: '1rem' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            School Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ marginLeft: '1rem' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            University of Choice:
            <input
              type="text"
              list="university-list"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              style={{ marginLeft: '1rem' }}
              required
            />
            <datalist id="university-list">
              {universitySuggestions.map((uni) => (
                <option key={uni} value={uni} />
              ))}
            </datalist>
          </label>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Degree of Choice:
            <input
              type="text"
              list="degree-list"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              style={{ marginLeft: '1rem' }}
              required
            />
            <datalist id="degree-list">
              {degreeSuggestions.map((deg) => (
                <option key={deg} value={deg} />
              ))}
            </datalist>
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
      {success && (
        <div style={{ color: 'green', marginTop: '1rem' }}>
          Application submitted successfully!
        </div>
      )}

        <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '1rem', margin: '1.5rem auto', maxWidth: 500, borderRadius: 8 }}>
        <strong>Important:</strong>
        <p>
          Please send all required supporting documents (such as your ID, academic transcripts, and proof of residence) to our email address:{" "}
          <a href="mailto:thandululo99@gmail.com">applications@gmail.com</a>
        </p>
        <p>
          Your application will only be processed once we have received these documents.
        </p>
      </div>

    </div>
  );
}