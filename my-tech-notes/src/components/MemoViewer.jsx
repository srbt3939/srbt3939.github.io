import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MemoViewer() {
  const { name } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const base = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : import.meta.env.BASE_URL + "/";
    fetch(`${base}memos/${name}.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("# メモが見つかりません"));
  }, [name]);

  return (
    <article className="prose max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
