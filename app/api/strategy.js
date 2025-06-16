console.log('STRATEGY API RECEIVED:', { skill, audience, goal, niche, timeframe });


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

  const messages = [
    {
      role: 'system',
      content: `You are an AI business strategist that builds personalized business plans for users based ONLY on their actual skills and goals. Never mention generic productivity niches or templates unless the user's input directly asks for them.`
    },
    {
      role: 'user',
      content: `
The user has the following profile:

Skill: ${skill}
Target Audience: ${audience}
Industry/Niche: ${niche}
Monthly Income Goal: ${goal}
Timeframe: ${timeframe}

Based on these, generate a **specific and tailored 5-step business roadmap**. The plan must:

1. Suggest a realistic and specific product or service the user can offer using their actual skill.
2. Include a marketing approach targeting their exact audience.
3. Recommend specific tools or platforms relevant to their niche and skill.
4. Provide a revenue estimate based on their timeline and audience.
5. Outline an actionable weekly roadmap tied directly to their goal and skill.

Avoid generic templates or irrelevant examples. Only generate ideas directly aligned with the user's skill, niche, and audience.
      `
    }
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages,
      temperature: 0.7,
    });

    const responseText = completion.choices[0]?.message?.content;

    res.status(200).json({ strategy: responseText });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Failed to generate strategy' });
  }
}
