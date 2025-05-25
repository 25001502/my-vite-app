import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './AuthForm';
import Welcome from './pages/Welcome';
import Application from './pages/Aplication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Aplication" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;
