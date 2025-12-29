import Hexagon from "./components/Hexagon";
import { useState } from "react";
import Triangle from "./components/Triangle";

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
  const total = 25;
  const [colors, setColors] = useState<string[]>(() =>
    Array.from({ length: total }, () => "#FFFFFF")
  );

  const switchLanguage = (lang : string) => {
    if (lang === selected) return;

    setSelected(lang);
    setLetters(
      generateLetters(lang === "ar" ? arabicLetters : englishLetters)
    );
    setColors(Array.from({ length: total }, () => "#FFFFFF"));
  };

  const rows = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  const [colorOne, setColorOne] = useState("#A7E1B8");
  const [colorTwo, setColorTwo] = useState("#16A34A");

  return (
    <div className="w-screen h-screen flex flex-col justify-center" style={{ backgroundColor: colorOne }}>
      {/* Language Switcher */}
      <div className={`flex justify-center -mt-20 ${selected === "ar" ? "flex-row-reverse" : "flex-row"} gap-4 z-10`}>
        <div className="flex flex-row-reverse border border-gray-400 overflow-hidden rounded-xl shadow-sm bg-white!">
          <button
            onClick={() => switchLanguage("ar")}
            className={`px-6 py-2 font-extrabold! transition-all duration-200 hover:brightness-90 ${
              selected === "ar"
                ? "bg-emerald-800! text-white!"
                : "bg-white! text-emerald-900!"
            }`}
          >
            عربي
          </button>

          <button
            onClick={() => switchLanguage("en")}
            className={`px-6 py-2 font-extrabold! transition-all duration-200 hover:brightness-90 ${
              selected === "en"
                ? "bg-amber-800! text-white!"
                : "bg-white! text-amber-900!"
            }`}
          >
            English
          </button>
        </div>
        <button
          onClick={() => setColors(Array.from({ length: total }, () => "#FFFFFF"))}
          className="px-4 py-2 rounded bg-red-200! text-red-900! hover:brightness-90"
        >
          {selected === "ar" ? "إعادة اللعبة" : "Reset Game"}
        </button>
      </div>

      {/* Hex Grid */}
      <div className="hex-grid z-10">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`hex-row ${rowIndex % 2 === 1 ? "offset" : ""}`}
          >
            {row.map((letter, i) => {
              const index = rowIndex * 5 + i;
              return (
                <Hexagon
                  key={index}
                  letter={letter}
                  color={colors[index]}
                  colorOne={colorOne}
                  colorTwo={colorTwo}
                  setColor={(c) =>
                    setColors((prev) => {
                      const copy = [...prev];
                      copy[index] = c;
                      return copy;
                    })
                  }
                />
              );
            })}
          </div>
        ))}
        <div className="absolute top-[42%] left-20 bg-white/60 p-3 rounded shadow-md z-20">
          <fieldset className="mb-3">
            <legend className="text-sm font-semibold mb-2">Team One</legend>
            <div className="flex gap-2">
                {[
                "#A7E1B8",
                "#BEEBFF",
                "#FFBFD0",
                "#FFEBA0",
                ].map((c) => (
                <label key={c} className="flex items-center cursor-pointer">
                  <input
                  type="radio"
                  name="bgColor"
                  value={c}
                  checked={colorOne === c}
                  onChange={() => setColorOne(c)}
                  className="sr-only"
                  />
                  <span
                  className={`w-8 h-6 inline-block border ${
                    colorOne === c ? "ring-2 ring-offset-1 ring-amber-400" : ""
                  }`}
                  style={{ backgroundColor: c }}
                  />
                </label>
                ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold mb-2">Team Two</legend>
            <div className="flex gap-2">
              {["#16A34A", "#0369A1", "#BE185D", "#D97706"].map((c) => (
                <label key={c} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="accentColor"
                    value={c}
                    checked={colorTwo === c}
                    onChange={() => setColorTwo(c)}
                    className="sr-only"
                  />
                  <span
                    className={`w-8 h-6 inline-block border ${
                      colorTwo === c ? "ring-2 ring-offset-1 ring-emerald-400" : ""
                    }`}
                    style={{ backgroundColor: c }}
                  />
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
      <Triangle className="triangle-left" color={colorTwo}/>
      <Triangle className="triangle-right" color={colorTwo}/>
    </div>
  );
}

export default App;
