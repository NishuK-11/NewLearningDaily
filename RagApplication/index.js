import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion);
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "mera naam chatgpt nhi suyash(the suar) h ",
      },
      {
        role: "user",
        content: "dont reply",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}

main();