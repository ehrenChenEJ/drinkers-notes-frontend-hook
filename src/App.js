import React,{ useState } from 'react';
import './App.css';
import styled from '@emotion/styled';

// Component
import ListCard from './view/ListCard';

const Container = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wallpapaer = styled.div`
  /* background-color: blue; */
  position: relative;
  box-shadow: 0 1px 3px 0 #999999;
  box-sizing:border-box;
  min-width: 320px;
  padding-top: 10px;
  
`;

const ToolBox = styled.div`
  background-color: #ffdeeb;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

const AddBtn = styled.div`
  background-color: #ff5c8a;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
    &:hover{
      background-color: #ff1053;
    }
`;

const AddIcon = styled.div`
  background-color: white;
  width: 80%;
  height: 10px;
  position: absolute;
  top:calc(50% - 5px);
  left: 10%;
  border-radius: 10px;
`;

const AddIcon2 = styled.div`
  background-color: white;
  width: 80%;
  height: 10px;
  position: absolute;
  transform:rotate(90deg);
  top:calc(50% - 5px);
  left: 10%;
  border-radius: 10px;
`;




const App = () =>{
  const [listcard , setListCards] = useState(2);
  const listcardNum = Array.from({length:listcard});

  // click the plus btn to add the list item
  const addListItem = () => {
    setListCards(listcard+1);
    // TODO: 如果增加後端功能這邊應該要加上存至使用者帳號
  };
  

  return (
    <Container>
      <Wallpapaer>
        <ListCard
          listcardNum = {listcardNum}
        />
        <ToolBox>
          <AddBtn onClick={addListItem}>
            <AddIcon/>
            <AddIcon2/>
          </AddBtn>
        </ToolBox>
      </Wallpapaer>
    </Container>
  );
}

export default App;
