export default function Hexagon({
  letter,
  color,
  setColor,
}: {
  letter: string;
  color: string;
  setColor: (c: string) => void;
}) {
  const color1 = "bg-emerald-200";
  const color2 = "bg-amber-200";

  const onClick = () => {
    if (color === "bg-white") {
      setColor(color1);
    } else if (color === color1) {
      setColor(color2);
    } else {
      setColor("bg-white");
    }
  };

  return (
    <div className="w-33 h-38 bg-black clip-hexagon flex items-center justify-center">
      <div
        onClick={onClick}
        className={`border text-7xl w-32 h-36 hover:brightness-90 ${color} clip-hexagon flex items-center justify-center font-semibold`}
      >
        {letter}
      </div>
    </div>
  );
}
