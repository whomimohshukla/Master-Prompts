import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await client.responses.create({
    model: "gpt-5",
    input: "What is greater? 9.8 or 9.11?", // Zero-shot prompt
  });

  console.log(response.output_text);
}

main();