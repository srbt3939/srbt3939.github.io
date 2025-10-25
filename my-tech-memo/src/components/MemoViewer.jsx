import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MemoViewer({ memo, onBack }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/memos/${memo}`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("読み込みエラー"));
  }, [memo]);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
      <button onClick={onBack} className="text-gray-500 hover:underline mb-4">
        ← 戻る
      </button>
      <ReactMarkdown className="prose">{content}</ReactMarkdown>
    </div>
  );
}
