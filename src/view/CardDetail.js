import React,{useState} from 'react';
import styled from '@emotion/styled';

import CircleProgress from '../component/CircleProgress';


const DetailWrapper = styled.div`
  position: relative;
  min-width: 320px;
  width: 100vw;
  height: calc(100vh - 110px);
  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: 2rem;
  width: 90%;
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
`; 

const ImgContainer = styled.div`
  width: 90vw;
  display: flex;
  padding: 1rem 0px 1rem 1rem;

`;

const LocationBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  padding-left: 1rem;
  width: 95%;
  margin: 0 auto;
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
  padding: 0.5rem 0;
`;

const LevelBar = styled.progress`
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
  margin: 1rem auto;
  /* border: 1px solid red; */
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

const DetailInput = styled.input`

`;

const DetailSelect = styled.select`

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
  // handleCurrentPageChange,
  handleCurrentEditState,
  currentEdit
}) => {

  console.log(currentEdit);
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
      
        {/* <Button onClick={()=> handleCurrentPageChange('ListCard')}>返回</Button> */}
        {/* <Button onClick={()=>handleCurrentEditState('Editing')}>編輯</Button> */}
        {currentEdit === 'Edited' &&(
          <ButtonBlock>
            <Button onClick={()=>handleCurrentEditState('Editing')}>編輯</Button>
          </ButtonBlock>
        )}
        {
          currentEdit === 'Editing' &&(
            <ButtonBlock>
              <Button onClick={()=>handleCurrentEditState('Edited')}>完成</Button>
              <Button onClick={()=>handleCurrentEditState('Edited')}>取消</Button>
            </ButtonBlock>
        )}
      
    </DetailWrapper>
  );
};
export default CardDetail;