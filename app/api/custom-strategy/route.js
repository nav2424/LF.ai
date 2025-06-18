import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// 🔐 Make sure your .env file has OPENAI_API_KEY=your-key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  // 🔍 Extract body from request
  const { skill, audience, goal, niche, timeframe } = await req.json();

  console.log('✅ API RECEIVED:', { skill, audience, goal, niche, timeframe });

  // ❌ Validate input
  if (!skill || !audience || !goal || !niche || !timeframe) {
    return NextResponse.json({ error: 'Missing input fields' }, { status: 400 });
  }

  // ✏️ Build the GPT prompt
  const prompt = `
You are a senior business strategist helping users launch profitable side hustles.

User Profile:
- Skill: ${skill}
- Target Audience: ${audience}
- Niche: ${niche}
- Monthly Income Goal: ${goal}
- Timeframe: ${timeframe}

🎯 Generate a 5-step business roadmap that includes:
1. A product or service based on their skill
2. A niche-specific marketing strategy
3. Tools/platforms they should use
4. Realistic path to ${goal} within ${timeframe}
5. A weekly action plan

Do NOT suggest generic things like productivity tools or Notion templates unless they directly match the user’s skill or niche.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You generate specific, relevant, and actionable business strategies. No fluff. No generic SaaS ideas.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7
    });

    const strategy = completion.choices[0]?.message?.content || '⚠️ No strategy returned.';
    return NextResponse.json({ strategy });
  } catch (error) {
    console.error('❌ OpenAI API error:', error);
    return NextResponse.json({ error: 'OpenAI request failed' }, { status: 500 });
  }
}
