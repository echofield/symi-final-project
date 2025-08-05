import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { answers } = await request.json();
    if (!answers) {
      return NextResponse.json({ error: 'Invalid request: "answers" are required.' }, { status: 400 });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.error('Server configuration error: Missing API Key.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // --- ENHANCED PROMPT ENGINEERING ---
    const SYMI_BLUEPRINT_PROMPT = `
      You are **Aria – Lead Systems Architect for Symi**. Your mandate is to conduct a forensic audit and design an executable "Business Twin" Blueprint. Compose a confidential strategic paper for visionary founders.

      **Core Doctrine:**
      1. Bottlenecks are fossilized decisions – unmake them
      2. Scalability = Vision → Workflow → Symbol → System alignment
      3. Preserve the founder's Strategic Singularity

      **Tone Protocol:**
      - Empathetic surgical precision; high-stakes consulting voice
      - Use strategic metaphors (e.g., "Your onboarding is Rembrandt trapped in a photocopier")
      - Bespoke, non-interchangeable language

      **Structured Output Rules:**
      - Generate valid JSON with exact specified keys
      - Use \\n for paragraph breaks within string values
      - KPIs must be realistic numbers/percentages based on client data
      - Strategic Seal must be <= 12 words

      **Client Context:**
      "${answers.main_goal ? 'Transformation Goal: ' + answers.main_goal : ''}"
      "${answers.business_model ? 'Business Models: ' + (Array.isArray(answers.business_model) ? answers.business_model.join(', ') : answers.business_model) : ''}"
      "${answers.scaling_challenge ? 'Scaling Challenge: ' + answers.scaling_challenge : ''}"
      "${answers.client_lifecycle ? 'Lifecycle Bottleneck: ' + answers.client_lifecycle : ''}"
      "${answers.biggest_asset ? 'Valuable IP: ' + answers.biggest_asset : ''}"
      "${answers.tech_stack ? 'Tech Stack: ' + answers.tech_stack : ''}"

      **TASK:**
      Generate JSON in this exact structure:
      {
        "visionStatement": "Refined one-sentence transformation goal",
        "executiveDiagnosis": "2-3 paragraph analysis of strategic paradox and leverage points\\nSecond paragraph continues here",
        "ipExcavation": "Analysis of dormant vs exploited IP\\nRevenue mapping strategies",
        "bottleneckForensics": "Constraint categorization (technical/human/strategic)\\nDownstream impact analysis",
        "kpis": {
          "timeSavings": { "value": "12-18", "unit": "hours/week" },
          "clientSuccess": { "value": "+20-35%", "unit": "increase" },
          "agentsDeployed": { "value": 3, "unit": "intelligent agents" },
          "timeline": { "value": 4, "unit": "weeks" }
        },
        "strategicSeal": "Single powerful sentence capturing transformation essence"
      }
    `;

    // --- ENHANCED API CALL WITH SAFEGUARDS ---
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000); // 25s timeout

    try {
      const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: SYMI_BLUEPRINT_PROMPT }] }],
          generationConfig: {
            response_mime_type: "application/json",
            temperature: 0.85, // Increased for creative metaphors
            top_p: 0.95,
            max_output_tokens: 2000
          },
          safetySettings: [
            { category: "HARM_CATEGORY_DANGEROUS", threshold: "BLOCK_ONLY_HIGH" }
          ]
        }),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error('Gemini API Error:', geminiResponse.status, errorText);
        return NextResponse.json({ error: `AI processing failed: ${geminiResponse.status}` }, { status: 500 });
      }

      const responseData = await geminiResponse.json();
      const blueprintJSON = responseData.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!blueprintJSON) {
        throw new Error('Empty response from AI model');
      }

      // --- VALIDATION LAYER ---
      try {
        const parsedBlueprint = JSON.parse(blueprintJSON);
        
        // Structure validation
        const requiredKeys = ['visionStatement', 'executiveDiagnosis', 'ipExcavation', 
                             'bottleneckForensics', 'kpis', 'strategicSeal'];
        if (!requiredKeys.every(key => key in parsedBlueprint)) {
          throw new Error('Invalid response structure from AI');
        }
        
        return NextResponse.json({ blueprint: parsedBlueprint });
        
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        return NextResponse.json({ error: 'AI response format invalid' }, { status: 500 });
      }

    } catch (fetchError) {
      console.error('Fetch Error:', fetchError);
      return NextResponse.json({ error: 'AI service timeout' }, { status: 504 });
    }

  } catch (error) {
    console.error('Endpoint Error:', error);
    return NextResponse.json({ error: 'Processing pipeline failed' }, { status: 500 });
  }
}
