const CircularProgressBar = ({ size = 3, percent, strokeWidth = 0.25 }) => {
  const halfSize = size / 2;
  const radius = halfSize - strokeWidth;
  return (
    <div className="left-24px absolute top-[-1.5vw]">
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${halfSize}vw`}
          cy={`${halfSize}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${halfSize}vw`}
          cy={`${halfSize}vw`}
          stroke={percent >= 80 ? "green" : percent >= 55 ? "orange" : "red"}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${radius * 2 * 3.14}vw`}
          strokeDashoffset={`${
            radius * 2 * Math.PI - (percent * radius * 2 * 3.14) / 100
          }vw`}
          fill="none"
          style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
        />
        <text
          x={`${halfSize}vw`}
          y={`${halfSize}vw`}
          fill="white"
          fontSize="1vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
