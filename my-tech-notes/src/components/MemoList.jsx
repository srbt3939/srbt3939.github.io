import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MemoList() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const base = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : import.meta.env.BASE_URL + "/";
    fetch(`${base}memos/index.json`)
      .then((res) => res.json())
      .then(setMemos)
      .catch(() => setMemos([]));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 border-b pb-1">📘 メモ一覧</h2>
      {memos.length === 0 ? (
        <p className="text-gray-500">メモが見つかりません。</p>
      ) : (
        <ul className="space-y-3">
          {memos.map((memo) => (
            <li key={memo.name} className="border rounded-lg bg-white hover:shadow transition p-3">
              <Link
                to={`/memo/${memo.name}`}
                className="text-blue-600 font-medium hover:underline"
              >
                {memo.title}
              </Link>
              {/* <div className="text-gray-400 text-sm mt-1">{memo.path}</div> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

