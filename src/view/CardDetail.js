import React from 'react';
import styled from '@emotion/styled';

import CircleProgress from '../component/CircleProgress';


const DetailWrapper = styled.div`
  position: relative;
  min-width: 320px;
  border: 1px solid black;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  width: 100%;
`;

const Rate = styled.div`
  /* background-color: red; */
  font-size: 1rem;
  /* display: flex; */
  /* justify-content: center; */
  /* width: 20%; */
  display: inline-block;
  padding-left: 10px;
`;

const Price = styled.div`
  font-size: 1rem;
  /* width: 50%; */
  display: inline-block;
  /* background-color: blue; */
`;

const Img = styled.img`
  width: 100%;
  margin: 1rem 0;
`; 

const LocationBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const InforTitle = styled.li`
  font-size: 1rem;
  background-color: lightgrey;
  width: 7rem;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0.5rem 0;
  list-style-type: none;
`;

const InforContent = styled.li`
  font-size: 1rem;
  flex-grow: 1;
  width: calc(100% - 10rem);
  margin-bottom: 0.5rem;
  list-style-type: none;
  margin-left: 0.5rem;
  /* border: 1px solid red; */
  padding: 0.5rem 0;
`;

const LevelBar = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  // for chrome and safari
  ::-webkit-progress-bar{
    background-color: lightgray;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  ::-webkit-progress-value{
    background-color: #ff1053;
    border-radius: 10px;
  }
  // for firefox
  ::-moz-progress-bar{
    background-color: #ff1053;
    border-radius: 10px;
  }
  // for ie
  color: #ff1053; 
  margin: auto 0.5rem;
`;




// 點入要帶入index
// 之後要call api 來取得內容
const CardDetail = ({
  sqSize,
  percentage,
  viewBox,
  strokeWidth,
  radius,
  dashArray,
  dashOffset,
}) => {
  // const sqSize = 10;
  // const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // const strokeWidth = 2;
  // const percentage = 20;
  // const radius = (sqSize - strokeWidth) / 2;
  // const dashArray = radius * Math.PI * 2;
  // const dashOffset = dashArray - dashArray * percentage / 100;
 

  return(
    <DetailWrapper>
      <Title>酒類名稱</Title>
      <CircleProgress
        sqSize = {200}
        viewBox = {viewBox}
        strokeWidth = {30}
        radius = {80}
        dashArray = {dashArray}
        dashOffset = {dashOffset}
        percentage = {50}
      />
      <Img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Girls%27_Generation_at_DMC_Festival_2015_MBC_Radio_DJ_Concert_02.jpg"/>
      <Rate>4/5</Rate><Price>參考價:$100</Price>
      <LocationBlock>
        <InforTitle>產區</InforTitle>
        <InforContent>Mosel</InforContent>
        <InforTitle>國家</InforTitle>
        <InforContent>德國</InforContent>
        <InforTitle>酒莊(廠)</InforTitle>
        <InforContent>Selbach-Oster</InforContent>
        <InforTitle>葡萄酒品種</InforTitle>
        <InforContent>Riesling(100%)</InforContent>
        <InforTitle>購買通路</InforTitle>
        <InforContent>全聯</InforContent>
        <InforTitle>年份</InforTitle>
        <InforContent>2017</InforContent>
        <InforTitle>酒精濃度</InforTitle>
        <InforContent>10%</InforContent>
        <InforTitle>甜度</InforTitle>
        <InforContent>
          1<LevelBar max="5" value="2"/>5
        </InforContent>
        <InforTitle>酸度</InforTitle>
        <InforContent>
          1<LevelBar max="5" value="1"/>5
        </InforContent>
        <InforTitle>飽滿度</InforTitle>
        <InforContent>
          1<LevelBar max="5" value="3"/>5
        </InforContent>
        <InforTitle>適合搭配食物</InforTitle>
        <InforContent>
        </InforContent>
      </LocationBlock>
    </DetailWrapper>
  );
};
export default CardDetail;