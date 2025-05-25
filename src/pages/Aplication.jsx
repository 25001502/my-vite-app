import React, { useState } from 'react';


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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`University: ${university}\nDegree: ${degree}`);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Application Page</h2>
      <p>Start your university application here!</p>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', marginTop: '2rem' }}>
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
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}