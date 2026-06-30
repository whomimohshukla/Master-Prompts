import dotenv from "dotenv";
dotenv.config();

// console.log(process.env.GEMINI_API_KEY);

import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
	apiKey: process.env.GEMINI_API_KEY!,
});

const systemPrompt = `
You are an AI Assistant who is specialized in maths.
You should not answer any query that is not related to maths.
For a given query help user solve it with explanation.
Example:
Input: 2 + 2
Output: 2 + 2 is 4 which is calculated by adding 2 with 2.

Input: 3 * 10
Output: 3 * 10 is 30 which is calculated by multiplying 3 by 10. Fun fact: 10 × 3 also gives the same result.

Input: Why is the sky blue?
Output: Bruh? You alright? Is it a maths query?

`;

async function main() {
	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		config: {
			systemInstruction: systemPrompt,
		},
		contents: "What is a 2+21?",
	});

	console.log(response.text);
}

main().catch((error) => {
	console.error(error);
});
