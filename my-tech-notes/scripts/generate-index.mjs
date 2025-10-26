import fs from "fs";
import path from "path";

const memosDir = path.resolve("public/memos");
const outputFile = path.join(memosDir, "index.json");

const files = fs
  .readdirSync(memosDir)
  .filter((f) => f.endsWith(".md") && f !== "README.md");

const memos = files.map((filename) => {
  const filePath = path.join(memosDir, filename);
  const content = fs.readFileSync(filePath, "utf-8");
  const firstLine = content.split("\n")[0].replace(/^#\s*/, "");
  const title = firstLine || filename.replace(".md", "");
  return {
    name: filename.replace(".md", ""),
    title,
    path: `/memos/${filename}`,
  };
});

fs.writeFileSync(outputFile, JSON.stringify(memos, null, 2));
console.log(`✅ Generated ${outputFile} with ${memos.length} entries`);
