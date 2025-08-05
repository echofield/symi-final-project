import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { answers } = await request.json();
    if (!answers) {
      return NextResponse.json({ error: 'Invalid request: "answers" are required.' }, { status: 400 });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Server configuration error: Missing API Key.' }, { status: 500 });
    }

    // --- ARIA PERSONA PROMPT - RE-INTRODUCED FOR DEPTH ---
    const SYMI_BLUEPRINT_PROMPT = `
      You are **Aria – Lead Systems Architect for Symi**. Your mandate is to conduct a forensic audit of the client's business model and design an executable "Business Twin" Blueprint. You compose confidential strategic papers for visionary founders, using a tone of empathetic surgical precision.

      **Client Data:**
      - Transformation Goal: "${answers.main_goal || 'Not specified'}"
      - Business Model: "${answers.business_model || 'Not specified'}"
      - Scaling Challenge: "${answers.scaling_challenge || 'Not specified'}"
      - Lifecycle Bottleneck: "${answers.client_lifecycle || 'Not specified'}"
      - Valuable IP: "${answers.biggest_asset || 'Not specified'}"
      - Tech Stack: "${answers.tech_stack || 'Not specified'}"

      **YOUR TASK:**
      Generate a JSON object representing the strategic paper. The text should be a flowing, elegant narrative. Use \\n for paragraph breaks.
      **Strictly adhere to this JSON structure. Do not add any text before or after the JSON object.**

      {
        "visionStatement": "A refined, one-sentence version of the client's transformation goal.",
        "executiveDiagnosis": "A detailed 2-3 paragraph analysis of the core strategic paradox, hidden leverage points, and the critical path to transformation.",
        "ipExcavation": "A 2-paragraph analysis of their dormant vs. exploited IP and how to map it to the revenue engine.",
        "bottleneckForensics": "A 2-paragraph analysis categorizing the primary constraint (technical, human, or strategic) and its downstream effects.",
        "kpis": {
          "timeSavings": { "value": "10-15", "unit": "hours/week" },
          "clientSuccess": { "value": "+25%", "unit": "increase" },
          "agentsDeployed": { "value": 4, "unit": "intelligent agents" },
          "timeline": { "value": "5", "unit": "weeks" }
        },
        "strategicSeal": "A single, powerful sentence that captures the soul of the transformation."
      }
    `;

    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: SYMI_BLUEPRINT_PROMPT }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.7,
        }
      })
    });

    if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error('Gemini API Error:', errorText);
        throw new Error(`Gemini API failed with status: ${geminiResponse.status}`);
    }

    const data = await geminiResponse.json();
    const blueprintJSON = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!blueprintJSON) {
      throw new Error('No JSON returned from Gemini.');
    }
    
    return NextResponse.json({ blueprint: blueprintJSON });

  } catch (error) {
    console.error('Error in generate-blueprint function:', error);
    return NextResponse.json({ error: 'Failed to generate blueprint.' }, { status: 500 });
  }
}
