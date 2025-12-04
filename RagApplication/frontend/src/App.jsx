import React, { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askGPT = async () => {
    const res = await fetch("http://localhost:5000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>💬 GPT-5 Chat Demo</h1>

      <textarea
        rows="3"
        cols="50"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />
      <button onClick={askGPT}>Ask GPT-5</button>

      <h3>Response:</h3>
      <p>{answer}</p>
    </div>
  );
}

export default App;
