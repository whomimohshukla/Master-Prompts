import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
	apiKey: process.env.GEMINI_API_KEY!,
});

const systemPrompt = `
You are an AI assistant who is expert in breaking down complex problems and resolving user queries.

For the given user input:

- Analyse the problem.
- Think step by step.
- Generate the output.
- Validate the answer.
- Finally provide the result.

Rules:

1. Always respond in valid JSON.
2. Output must contain only:
{
  "step": "string",
  "content": "string"
}
3. Follow one step at a time.
4. Carefully analyse the user's question.

Example:

Input:
What is 2 + 2?

Output:
{
  "step":"analyse",
  "content":"The user is asking an arithmetic question."
}

Output:
{
  "step":"think",
  "content":"Addition requires summing both numbers."
}

Output:
{
  "step":"output",
  "content":"4"
}

Output:
{
  "step":"validate",
  "content":"2 + 2 = 4 is mathematically correct."
}

Output:
{
  "step":"result",
  "content":"2 + 2 = 4"
}
`;

async function main() {
	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",

		config: {
			systemInstruction: systemPrompt,

			// Force JSON output
			responseMimeType: "application/json",
		},

		contents: [
			// User Message
			{
				role: "user",
				parts: [
					{
						text: "What is 3 + 4 * 5?",
					},
				],
			},

			// Few-shot Example 1
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

			// Few-shot Example 2
			{
				role: "model",
				parts: [
					{
						text: JSON.stringify({
							step: "think",
							content:
								"According to the order of operations (BODMAS/PEMDAS), multiplication comes before addition.",
						}),
					},
				],
			},

			// Few-shot Example 3
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

			// Few-shot Example 4
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

	console.log("Raw Response:\n");
	console.log(response.text);

	console.log("\n-------------------------\n");

	if (response.text) {
		const json = JSON.parse(response.text);

		console.log("Parsed JSON\n");

		console.log("Step:", json.step);
		console.log("Content:", json.content);
	}
}

main().catch(console.error);
