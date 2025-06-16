'use client';
import { useState } from 'react';

export default function StrategyGenerator() {
  const [skill, setSkill] = useState('');
  const [audience, setAudience] = useState('');
  const [goal, setGoal] = useState('');
  const [niche, setNiche] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function generateStrategy() {
    setLoading(true);
    setResult('');
    setError('');

    console.log('Sending strategy request:', { skill, audience, goal, niche, timeframe });

    try {
      const response = await fetch('/api/strategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skill, audience, goal, niche, timeframe })
      });

      const data = await response.json();

      if (data.strategy) {
        setResult(data.strategy);
      } else {
        setError('❌ No strategy returned from the server.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('❌ Failed to connect to the server.');
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">LaunchFlow AI Strategy Builder</h1>
      
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Your skill (e.g., social media marketing)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Target audience (e.g., local coffee shops)"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Income goal (e.g., $3,000/month)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Niche/Industry (e.g., food & beverage)"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Timeframe (e.g., 3 months)"
        value={timeframe}
        onChange={(e) => setTimeframe(e.target.value)}
      />

      <button
        onClick={generateStrategy}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        {loading ? 'Generating...' : 'Generate Strategy'}
      </button>

      {result && (
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{result}</pre>
      )}

      {error && (
        <div className="text-red-600 font-semibold">{error}</div>
      )}
    </div>
  );
}
