import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const systemPrompt = `
You are an AI assistant who is expert in breaking down complex problems and then resolve the user query.

For the given user input, analyse the input and break down the problem step by step.

Think at least 5–6 steps before solving the problem.

Follow these steps in order:

1. analyse
2. think
3. output
4. validate
5. result

Rules:
- Always respond with valid JSON.
- Output must contain:
{
  "step": "string",
  "content": "string"
}
`;

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    config: {
      systemInstruction: systemPrompt,

      responseMimeType: "application/json",
    },

    contents: [
      {
        role: "user",
        parts: [
          {
            text: "What is 3 + 4 * 5?",
          },
        ],
      },

      // Few-shot examples
      {
        role: "model",
        parts: [
          {
            text: JSON.stringify({
              step: "analyse",
              content:
                "The user is asking for an arithmetic operation involving multiplication and addition.",
            }),
          },
        ],
      },

      {
        role: "model",
        parts: [
          {
            text: JSON.stringify({
              step: "think",
              content:
                "According to BODMAS/PEMDAS, multiplication happens before addition.",
            }),
          },
        ],
      },

      {
        role: "model",
        parts: [
          {
            text: JSON.stringify({
              step: "think",
              content: "4 × 5 = 20",
            }),
          },
        ],
      },

      {
        role: "model",
        parts: [
          {
            text: JSON.stringify({
              step: "think",
              content: "Now add 3 + 20.",
            }),
          },
        ],
      },
    ],
  });

  console.log(response.text);

  const json = JSON.parse(response.text!);

  console.log(json);
}

main().catch(console.error);