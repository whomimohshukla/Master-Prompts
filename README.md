# 🚀 Prompt Engineering Mastery (TypeScript + Gemini + OpenAI)

This repository contains everything I'm learning about Prompt Engineering using **TypeScript**, **Node.js**, **OpenAI**, and **Google Gemini**.

The goal of this repository is to understand **how Large Language Models (LLMs) think, respond, and can be instructed** to build production-ready AI applications.

---

# 📚 Table of Contents

1. What is Prompt Engineering?
2. What is a Prompt?
3. Why Prompt Engineering is Important?
4. How LLMs Process Prompts
5. Types of Prompting
   - Zero Shot
   - One Shot
   - Few Shot
   - System Prompt
   - Role Prompt
   - Instruction Prompt
   - Persona Prompt
   - Delimiter Prompt
   - Structured Output Prompt
   - Chain of Thought
   - Self Consistency
   - Tree of Thoughts
   - ReAct Prompting
   - Meta Prompting
   - Retrieval Prompting
   - Multi-turn Prompting
6. Best Practices
7. Common Mistakes
8. Learning Roadmap

---

# What is Prompt Engineering?

Prompt Engineering is the process of designing effective instructions (prompts) that guide an AI model to produce useful, accurate, and structured responses.

Think of an AI model as a highly knowledgeable assistant.

If your instructions are vague:

```
Explain JavaScript
```

You'll get a general answer.

If your instructions are clear:

```
Explain JavaScript for beginners.

Rules:

- Use simple language
- Include examples
- Keep it under 300 words
```

You'll usually receive a much better answer.

**Better Prompt → Better Response**

---

# What is a Prompt?

A prompt is simply the input you send to an AI model.

Example:

```
What is Node.js?
```

The prompt can be:

- A question
- Instructions
- Code
- Images
- Audio
- PDFs
- JSON
- A conversation

Everything sent to an LLM is considered a prompt.

---

# How an LLM Processes a Prompt

```
          User Prompt
               │
               ▼
     Tokenization
               │
               ▼
   Model understands context
               │
               ▼
       Generates response
               │
               ▼
       Returns output
```

---

# Types of Prompting

---

## 1. Zero-Shot Prompting

The model receives **no examples**.

Example:

```
Translate "Hello" into Hindi.
```

The AI relies entirely on its existing knowledge.

### When to use

- Simple questions
- General knowledge
- Basic coding

---

## 2. One-Shot Prompting

Provide **one example**.

Example:

```
Input:
Dog

Output:
Animal

Input:
Car

Output:
Vehicle

Input:
Apple

Output:
```

The model learns the expected pattern from a single example.

### When to use

- Classification
- Formatting
- Simple extraction

---

## 3. Few-Shot Prompting

Provide multiple examples.

```
Dog -> Animal

Cat -> Animal

Car -> Vehicle

Bike -> Vehicle

Apple ->
```

Few-shot prompting often produces more reliable results than zero-shot.

### Used for

- Entity extraction
- Classification
- Information extraction
- Data cleaning

---

## 4. System Prompting

A system prompt defines how the AI should behave.

Example:

```
You are a Senior Backend Engineer.

Always answer using TypeScript.

Explain everything with examples.
```

System prompts act like permanent instructions throughout the conversation.

### Used in

- Chatbots
- AI assistants
- Customer support
- Coding assistants

---

## 5. Role Prompting

Assign a specific role to the AI.

Example:

```
You are a Google Staff Engineer.

Review my Express.js project.
```

The AI responds from that perspective.

---

## 6. Instruction Prompting

Give clear and explicit instructions.

```
Explain JWT.

Rules:

- Beginner friendly
- Less than 200 words
- Include one example
```

The more precise the instructions, the more predictable the response.

---

## 7. Persona Prompting

Give the AI a personality or communication style.

```
Act like a friendly teacher.

Explain React Hooks.
```

or

```
Act like Elon Musk.

Explain startups.
```

---

## 8. Delimiter Prompting

Separate instructions from the data.

Example:

```
Summarize the article below.

"""

Very long article...

"""
```

Delimiters reduce ambiguity, especially with long inputs.

---

## 9. Structured Output Prompting

Request a specific output format.

Example:

```
Return ONLY JSON.

{
"title":"",
"price":"",
"description":""
}
```

This is one of the most common techniques used in production APIs.

---

## 10. Chain of Thought Prompting

Ask the model to explain its solution process.

Example:

```
Solve this step by step.

15 × 20 + 5
```

Useful for learning, debugging, and reasoning tasks.

> **Note:** Modern AI models don't expose their private internal reasoning. In production, prefer asking for an explanation or solution steps rather than hidden reasoning.

---

## 11. Self-Consistency Prompting

Ask the model to consider multiple approaches before deciding.

```
Solve this problem using different methods.

Compare each solution.

Return the best answer.
```

Useful for difficult reasoning problems.

---

## 12. Tree of Thoughts

Instead of following one reasoning path, the model explores multiple possible paths before choosing the best one.

Useful for:

- Planning
- Strategy
- Complex problem solving

---

## 13. ReAct Prompting

ReAct stands for:

**Reason + Act**

The model reasons about the problem and then decides what action or tool to use.

Example:

```
Reason about the problem.

Decide whether you need a calculator.

Then answer.
```

Widely used in AI Agents.

---

## 14. Meta Prompting

Prompt the AI to improve prompts.

Example:

```
Improve this prompt:

"Explain Docker."
```

Useful for writing better prompts over time.

---

## 15. Retrieval Prompting

Provide external information as context.

```
Context:

Prisma is a TypeScript ORM.

Question:

What is Prisma?
```

This is the foundation of **Retrieval-Augmented Generation (RAG)**.

---

## 16. Multi-turn Prompting

Maintain context across a conversation.

```
User:
Explain React.

Assistant:
...

User:
Now compare it with Angular.
```

The model remembers earlier messages to provide better follow-up responses.

---

# Best Practices

- Be specific.
- Clearly define the task.
- Provide examples when helpful.
- Request structured output when your application needs it.
- Break large tasks into smaller prompts.
- Test and refine prompts.

---

# Common Mistakes

❌ Being too vague.

```
Explain AI.
```

✅ Better

```
Explain Artificial Intelligence to a beginner.

Use simple English.

Give three real-world examples.

Limit the response to 300 words.
```

---

# Learning Roadmap

```
Prompt Engineering
        │
        ▼
Zero Shot
        │
        ▼
One Shot
        │
        ▼
Few Shot
        │
        ▼
System Prompt
        │
        ▼
Role Prompt
        │
        ▼
Structured Output
        │
        ▼
Function Calling
        │
        ▼
Embeddings
        │
        ▼
Vector Databases
        │
        ▼
RAG
        │
        ▼
AI Agents
        │
        ▼
Multi-Agent Systems
```

---

# Technologies Used

- TypeScript
- Node.js
- Google Gemini API
- OpenAI API
- dotenv

---

# Goal

By the end of this repository, you should be able to:

- Write effective prompts
- Build AI chat applications
- Generate structured JSON responses
- Use tool/function calling
- Build RAG pipelines
- Create AI agents
- Develop production-ready GenAI applications