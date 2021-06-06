import React from 'react';
import styled from '@emotion/styled';

import CircleProgress from '../component/CircleProgress';


const DetailWrapper = styled.div`
  position: relative;
  min-width: 320px;
  /* border: 1px solid black; */
  /* padding: 0 10px; */
  /* padding-left: 0.3rem; */
  width: 100vw;
  /* margin: 0 auto; */
  height: calc(100vh - 110px);
  overflow-y: scroll;
  /* margin: 0; */
`;

const Title = styled.div`
  font-size: 2rem;
  width: 100%;
  margin-left: 1rem;
`;

const RatePriceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Rate = styled.div`
  font-size: 1rem;
`;

const Price = styled.div`
  font-size: 1.5rem;
`;

const Img = styled.img`
  width: 100%;
  /* margin: px 0; */
  /* height: 250px; */
  /* align-items: center; */
`; 

const ImgContainer = styled.div`
  /* border: 1px solid red; */
  width: 90vw;
  /* overflow:hidden; */
  /* width: 90%; */
  /* margin: 0 auto; */
  /* margin: 2rem 0; */
  display: flex;
  /* justify-content: center; */
  padding: 1rem 0px 1rem 1rem;

`;

const LocationBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  padding-left: 1rem;
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
  /* border: 1px solid red; */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 50%;
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

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  color:black;
  background: pink;
  width: 150px;
  height: 50px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;




// 點入要帶入index
// 之後要call api 來取得內容
const CardDetail = ({
  sqSize = 120,
  percentage = 20,
  viewBox,
  strokeWidth=12,
  radius = 45,
  dashArray,
  dashOffset,
  handleCurrentPageChange
}) => {

  return(
    <DetailWrapper>
      <Title>酒類名稱</Title>
      <ImgContainer>
        <Img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Girls%27_Generation_at_DMC_Festival_2015_MBC_Radio_DJ_Concert_02.jpg"/>
      </ImgContainer>
      {/* <Rate>4/5</Rate> */}
      <RatePriceBlock>
        <CircleProgress
          // 外層正方形的長度
          sqSize = {sqSize}
          // svg viewbox 的大小
          viewBox = {viewBox}
          // 圈圈寬度
          strokeWidth = {strokeWidth}
          // 圓的直徑
          radius = {radius}
          dashArray = {dashArray}
          dashOffset = {dashOffset}
          // 百分比
          percentage = {percentage}
        />
        <Price>參考價:$100</Price>
      </RatePriceBlock>
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
      <ButtonBlock>
        <Button onClick={()=> handleCurrentPageChange('ListCard')}>返回</Button><Button>編輯</Button>
      </ButtonBlock>
    </DetailWrapper>
  );
};
export default CardDetail;