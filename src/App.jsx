import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './AuthForm';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
