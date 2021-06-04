import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  /* border: 1px solid red; */
`;

const CircleProgress = styled.circle`
  stroke: #ff1053;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const CircleBackground = styled.circle`
  stroke: #ddd;
  fill: none;
`;

const CircleText = styled.text`
  font-size: 2rem;
  font-weight: bold;
  fill: #ff1053;
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
      viewBox={viewBox}
    >
      <CircleBackground
        cx = {sqSize/2}
        cy = {sqSize/2}
        r = {radius}
        strokeWidth = {strokeWidth}
      />
      <CircleProgress
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth = {strokeWidth}
        transform = {`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }}
      />
      <CircleText
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {percentage/20}
      </CircleText>
  </SVG>
  );
};

export default Test;