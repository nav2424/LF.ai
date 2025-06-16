import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { skill, audience, goal, niche, timeframe } = req.body;

  if (!skill || !audience || !goal || !niche || !timeframe) {
    return res.status(400).json({ error: 'Missing input fields' });
  }

  const prompt = `
You are a world-class business strategy AI assistant.

A user has the following profile:
- Skill: ${skill}
- Target Audience: ${audience}
- Niche/Industry: ${niche}
- Income Goal: ${goal} per month
- Timeframe: ${timeframe}

Based on this, generate a clear, personalized 5-step roadmap they can follow to start a side hustle or online business. Include:

1. A highly relevant product or service idea they can offer using their skill
2. A suggested launch strategy targeting their audience in the ${niche} space
3. Recommended marketing channels and platforms (with tactics)
4. Expected timeline to reach ${goal} monthly
5. Tools they should use + a weekly action plan for the next ${timeframe}

Make the output concise, practical, and tailored — not generic.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You generate targeted business strategies based on user goals.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
    });

    const responseText = completion.choices[0]?.message?.content;

    res.status(200).json({ strategy: responseText });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Failed to generate strategy' });
  }
}
