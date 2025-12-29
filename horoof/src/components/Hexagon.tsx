export default function Hexagon({
  letter,
  color,
  setColor,
  colorOne, 
  colorTwo,
}: {
  letter: string;
  color: string;
  setColor: (c: string) => void;
  colorOne: string;
  colorTwo: string;
}) {

  const onClick = () => {
    if (color === "#FFFFFF") {
      setColor(colorOne);
    } else if (color === colorOne) {
      setColor(colorTwo);
    } else {
      setColor("#FFFFFF");
    }
  };

  return (
    <div className="w-33 h-38 bg-black clip-hexagon flex items-center justify-center">
      <div
        onClick={onClick}
        className={`border text-7xl w-32 h-36 hover:brightness-90 clip-hexagon flex items-center justify-center font-semibold`}
        style={{ backgroundColor: color }}
      >
        {letter}
      </div>
    </div>
  );
}
