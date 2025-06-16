const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { skill, audience, goal } = req.body;

  if (!skill || !audience || !goal) {
    return res.status(400).json({ error: "Missing input fields" });
  }

  const prompt = `Create a 5-step business strategy for someone skilled in ${skill}, targeting ${audience}, who wants to earn ${goal} per month.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({ strategy: completion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
