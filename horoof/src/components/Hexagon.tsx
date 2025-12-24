import { useState } from "react";

export default function Hexagon({ letter }: { letter: string }) {
  const [hexagonColor, setHexagonColor] = useState("bg-white");

  const color1 = "bg-emerald-200";
  const color2 = "bg-amber-200";

  const onClick = () => {
    if (hexagonColor === "bg-white") {
      setHexagonColor(color1);
    } else if (hexagonColor === color1) {
      setHexagonColor(color2);
    } else {
      setHexagonColor("bg-white");
    }
  };

  return (
    <div className="w-33 h-38 bg-black clip-hexagon flex items-center justify-center">
      <div
        onClick={onClick}
        className={`border text-7xl w-32 h-36 hover:brightness-90 ${hexagonColor} clip-hexagon flex items-center justify-center font-semibold`}
      >
        {letter}
      </div>
    </div>
  );
}
