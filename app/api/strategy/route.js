import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  const { skill, audience, goal, niche, timeframe } = await req.json();

  console.log('✅ API INPUTS:', { skill, audience, goal, niche, timeframe });

  if (!skill || !audience || !goal || !niche || !timeframe) {
    return NextResponse.json({ error: 'Missing input fields' }, { status: 400 });
  }

  const prompt = `
You are a senior business strategist AI. A user wants to build a side hustle or business based on their current skills and goals.

Their profile:
- Skill: ${skill}
- Target Audience: ${audience}
- Niche/Industry: ${niche}
- Monthly Income Goal: ${goal}
- Timeframe: ${timeframe}

🎯 Your task:
Create a 5-step personalized business strategy. Your plan must be specific and tailored, avoiding general advice like "start a newsletter" or "create templates" unless it truly fits.

Respond with:
1. The ideal product or service based on their skill
2. A niche-specific marketing plan
3. Relevant platforms/tools to use
4. A revenue estimate and how to achieve it
5. A weekly action roadmap for the given timeframe

Only give grounded, user-specific suggestions that help them realistically reach their goal.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You only respond with highly specific, skill-aligned strategies. No generic fluff.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
    });

    const strategy = completion.choices[0]?.message?.content || '⚠️ No strategy returned.';
    return NextResponse.json({ strategy });
  } catch (error) {
    console.error('❌ OpenAI API error:', error);
    return NextResponse.json({ error: 'Something went wrong generating strategy' }, { status: 500 });
  }
}
