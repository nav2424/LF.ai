'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert('Error sending login email: ' + error.message);
    } else {
      setSent(true);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>🔐 Login to LaunchFlow</h2>
      {sent ? (
        <p>✅ Check your email for a login link.</p>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Magic Link'}
          </button>
        </form>
      )}

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.7rem;
          margin: 1rem 0;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .button {
          width: 100%;
          background: black;
          color: white;
          padding: 0.7rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
