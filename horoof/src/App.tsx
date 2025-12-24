import "./App.css";
import Hexagon from "./components/Hexagon";
import { useState } from "react";

function App() {
  const arabicLetters = [
    "أ", "ب", "ت", "ث", "ج", "ح", "خ",
    "د", "ذ", "ر", "ز",
    "س", "ش", "ص", "ض", "ط", "ظ",
    "ع", "غ",
    "ف", "ق", "ك", "ل", "م", "ن",
    "هـ", "و", "ي",
  ];

  // Generate 25 random letters ONCE when component mounts
  const [letters] = useState(() =>
    Array.from({ length: 25 }, () =>
      arabicLetters[Math.floor(Math.random() * arabicLetters.length)]
    )
  );

  // Split letters into rows for the staggered hex grid
  const rows = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  return (
    <div className="hex-grid">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`hex-row ${rowIndex % 2 === 1 ? "offset" : ""}`}
        >
          {row.map((letter, i) => (
            <Hexagon key={i} letter={letter} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
