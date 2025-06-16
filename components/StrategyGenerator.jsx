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

  async function generateStrategy() {
    setLoading(true);
    setResult('');

    // 🔍 Debug: Show inputs being sent
    console.log('Sending to backend:', { skill, audience, goal, niche, timeframe });

    const response = await fetch('/api/strategy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ skill, audience, goal, niche, timeframe }) // ✅ All inputs included
    });

    const data = await response.json();

    setResult(data.strategy || '❌ Error generating strategy.');
    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <input
        type="text"
        placeholder="Your skill (e.g., social media marketing)"
        value={skill}
        onChange={e => setSkill(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Target audience (e.g., local coffee shops)"
        value={audience}
        onChange={e => setAudience(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Income goal (e.g., $3,000/month)"
        value={goal}
        onChange={e => setGoal(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Target niche or industry (e.g., food & beverage)"
        value={niche}
        onChange={e => setNiche(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Timeframe to reach goal (e.g., 3 months)"
        value={timeframe}
        onChange={e => setTimeframe(e.target.value)}
        className="w-full border p-2"
      />
      <button
        onClick={generateStrategy}
        className="bg-black text-white px-4 py-2 w-full"
      >
        {loading ? 'Generating...' : 'Generate Strategy'}
      </button>

      <pre className="bg-gray-100 p-4 whitespace-pre-wrap">{result}</pre>
    </div>
  );
}
