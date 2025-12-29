function Triangle({className, color}: {className?: string, color?: string}) {
  return (
    <div className={className} style={{ backgroundColor: color }}/>
  );
}

export default Triangle;
