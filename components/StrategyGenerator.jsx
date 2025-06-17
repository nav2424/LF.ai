'use client';
import React, { useState } from 'react';

export default function StrategyGenerator() {
  const [form, setForm] = useState({
    skill: '',
    audience: '',
    goal: '',
    niche: '',
    timeframe: ''
  });

  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const generateStrategy = async () => {
    setLoading(true);
    setOutput('');

    try {
      const response = await fetch('/api/custom-strategy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (data.strategy) {
        setOutput(data.strategy);
      } else {
        setOutput('❌ Error generating strategy.');
      }
    } catch (err) {
      console.error('❌ API call failed:', err);
      setOutput('❌ Failed to connect to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2>🚀 Launch Strategy Generator</h2>
      <p>Let AI generate a custom business roadmap based on your skills.</p>

      <input id="skill" value={form.skill} onChange={handleChange} placeholder="Your skill" className="input" />
      <input id="audience" value={form.audience} onChange={handleChange} placeholder="Target audience" className="input" />
      <input id="goal" value={form.goal} onChange={handleChange} placeholder="Income goal (e.g., $5,000/month)" className="input" />
      <input id="niche" value={form.niche} onChange={handleChange} placeholder="Niche or industry" className="input" />
      <input id="timeframe" value={form.timeframe} onChange={handleChange} placeholder="Timeframe (e.g., 6 months)" className="input" />

      <button onClick={generateStrategy} disabled={loading} className="button">
        {loading ? 'Generating...' : 'Generate Strategy'}
      </button>

      <pre style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '1rem', marginTop: '1rem' }}>
        {output}
      </pre>

      <style jsx>{`
        .input {
          display: block;
          width: 100%;
          padding: 0.6rem;
          margin: 0.5rem 0;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .button {
          background-color: #000;
          color: #fff;
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 1rem;
        }
        .button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
