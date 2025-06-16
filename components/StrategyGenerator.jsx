'use client';
import { useState } from 'react';

export default function StrategyGenerator() {
  const [skill, setSkill] = useState('');
  const [audience, setAudience] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function generateStrategy() {
    setLoading(true);
    setResult('');
    const res = await fetch('/api/strategy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ skill, audience, goal })
    });
    const data = await res.json();
    setResult(data.strategy || '❌ Error generating strategy.');
    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <input
        type="text"
        placeholder="Your skill"
        value={skill}
        onChange={e => setSkill(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Target audience"
        value={audience}
        onChange={e => setAudience(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Your income goal"
        value={goal}
        onChange={e => setGoal(e.target.value)}
        className="w-full border p-2"
      />
      <button onClick={generateStrategy} className="bg-black text-white px-4 py-2">
        {loading ? 'Generating...' : 'Generate Strategy'}
      </button>

      <pre className="bg-gray-100 p-4 whitespace-pre-wrap">{result}</pre>
    </div>
  );
}
