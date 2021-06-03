import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  #progressInput {
  margin: 20px auto;
  width: 30%;
}

.circle-background,
.circle-progress {
  fill: none;
}

.circle-background {
  stroke: #ddd;
}

.circle-progress {
  stroke: #ff1053;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.circle-text {
  font-size: 3em;
  font-weight: bold;
  fill: #ff1053;
}
`;

const CircleProgress = styled.circle`

`;

const Test = ({
  sqSize,
  percentage,
  viewBox = `0 0 ${sqSize} ${sqSize}`,
  strokeWidth,
  radius = (sqSize - strokeWidth) / 2,
  dashArray = radius * Math.PI * 2,
  dashOffset = dashArray - dashArray * percentage / 100,
}) => {

  return(
    <SVG
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`} />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }} />
      <text
        className="circle-text"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle">
        {`${percentage}%`
      }
    </text>
  </SVG>
  );
};

export default Test;