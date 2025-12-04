import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const client = new Groq({
  apiKey: process.env.OPENAI_API_KEY, // 👈 Groq key here
});

app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "Talk like a drunkard." },
        { role: "user", content: question },
      ],
    });

    res.json({ answer: response.choices[0].message.content });
  } catch (err) {
    console.error("❌ ERROR DETAILS:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
