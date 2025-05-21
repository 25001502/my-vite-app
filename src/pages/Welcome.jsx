import { useAuth } from '../context/AuthContext';

export default function Welcome() {
  const { user } = useAuth();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {user?.displayName || user?.email || 'Guest'}!</h1>
    </div>
  );
}
