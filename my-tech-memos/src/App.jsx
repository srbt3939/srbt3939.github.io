// src/App.jsx
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchMemos();
  }, []);

  async function fetchMemos() {
    const files = [
      "memos/2025-10-26-react-note.md",
      "memos/aws-dynamodb-tips.md",
    ];
    setMemos(files);
  }

  async function loadMemo(path) {
    const res = await fetch(path);
    const text = await res.text();
    setContent(text);
  }

  return (
    <div className="container">
      <h1>技術メモ</h1>
      <ul>
        {memos.map((m) => (
          <li key={m}>
            <button onClick={() => loadMemo(m)}>{m}</button>
          </li>
        ))}
      </ul>
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

