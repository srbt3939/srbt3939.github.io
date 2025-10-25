const MEMOS = [
  { title: "AWS", file: "aws.md" },
  { title: "React", file: "react.md" },
  { title: "Python", file: "python.md" },
];

export default function MemoList({ onSelect }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6">
      <ul>
        {MEMOS.map((memo) => (
          <li key={memo.file} className="my-3">
            <button
              className="text-blue-600 hover:underline"
              onClick={() => onSelect(memo.file)}
            >
              {memo.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
