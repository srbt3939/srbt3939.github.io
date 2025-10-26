import { Routes, Route, Link } from "react-router-dom";
import MemoList from "./components/MemoList";
import MemoViewer from "./components/MemoViewer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            🧠 技術メモ
          </Link>
          <div></div>
          <a
            href="https://github.com/srbt3939"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<MemoList />} />
          <Route path="/memo/:name" element={<MemoViewer />} />
        </Routes>
      </main>

      <footer className="text-center py-6 text-sm text-gray-400 border-t">
        © srbt3939
      </footer>
    </div>
  );
}
