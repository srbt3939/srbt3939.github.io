import { useState } from "react";
import MemoList from "./components/MemoList";
import MemoViewer from "./components/MemoViewer";

export default function App() {
  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">技術メモ</h1>
      {selectedMemo ? (
        <MemoViewer memo={selectedMemo} onBack={() => setSelectedMemo(null)} />
      ) : (
        <MemoList onSelect={setSelectedMemo} />
      )}
    </div>
  );
}
