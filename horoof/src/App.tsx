import "./App.css";
import Hexagon from "./components/Hexagon";
import { useState } from "react";

function App() {
  const arabicLetters = [
    "أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز",
    "س","ش","ص","ض","ط","ظ","ع","غ","ف","ق",
    "ك","ل","م","ن","هـ","و","ي",
  ];

  const englishLetters = [
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z",
  ];

  const generateLetters = (source: string[]) =>
    Array.from({ length: 25 }, () =>
      source[Math.floor(Math.random() * source.length)]
    );

  const [selected, setSelected] = useState("ar");
  const [letters, setLetters] = useState(() =>
    generateLetters(arabicLetters)
  );

  const switchLanguage = (lang : string) => {
    if (lang === selected) return;

    setSelected(lang);
    setLetters(
      generateLetters(lang === "ar" ? arabicLetters : englishLetters)
    );
  };

  const rows = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  return (
    <>
      {/* Language Switcher */}
      <div className="flex justify-center -mt-20">
        <div className="flex flex-row-reverse border border-gray-400 overflow-hidden rounded-xl shadow-sm bg-white">
          <button
            onClick={() => switchLanguage("ar")}
            className={`px-6 py-2 font-extrabold! transition-all duration-200 hover:brightness-90 ${
              selected === "ar"
                ? "bg-emerald-800! text-white"
                : "bg-white! text-emerald-900"
            }`}
          >
            عربي
          </button>

          <button
            onClick={() => switchLanguage("en")}
            className={`px-6 py-2 font-extrabold! transition-all duration-200 hover:brightness-90 ${
              selected === "en"
                ? "bg-amber-800! text-white"
                : "bg-white! text-amber-900"
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Hex Grid */}
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
    </>
  );
}

export default App;
