import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  const { skill, audience, goal, niche, timeframe } = await req.json();

  console.log('✅ STRATEGY API RECEIVED:', { skill, audience, goal, niche, timeframe });

  if (!skill || !audience || !goal || !niche || !timeframe) {
    return NextResponse.json({ error: 'Missing input fields' }, { status: 400 });
  }

  const prompt = `
You are an AI business strategist helping users build income based on their actual skills.

Profile:
- Skill: ${skill}
- Audience: ${audience}
- Niche: ${niche}
- Income Goal: ${goal}
- Timeframe: ${timeframe}

Create a 5-step roadmap that includes:
1. Specific product/service idea based on their skill
2. A marketing strategy for the audience
3. Tools/platforms they should use
4. Realistic income path
5. Weekly plan tied to the timeframe

Be ultra specific. No generic productivity tool ideas unless they match the skill/niche.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You return highly specific and personalized strategies. No generic fluff.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
    });

    const strategy = completion.choices[0]?.message?.content || '⚠️ No strategy generated.';
    return NextResponse.json({ strategy });
  } catch (error) {
    console.error('OpenAI Error:', error);
    return NextResponse.json({ error: 'OpenAI request failed' }, { status: 500 });
  }
}
