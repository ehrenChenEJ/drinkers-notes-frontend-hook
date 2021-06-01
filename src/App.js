import React from 'react';
import './App.css';
import styled from '@emotion/styled';

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

const ListCard = styled.div`
  background-color: white;
  width: 100%;
  height: calc(100vh - 110px);
  /* display: flex;
  justify-content: center; */
  overflow-y:scroll;
`;

const ListItem = styled.div`
  /* width: 90%; */
  /* background-color: yellowgreen; */
  border: 1px solid lightgrey;
  border-radius: 2px;
  height: 100px;
  margin: 0 10px 10px 10px;
  padding:5px;
  display: flex;
  justify-content: space-between;
`;

const ItemImg = styled.div`
  width: 40%;
  background-color: lightpink;
  height: 100%;
`;

const ItemName = styled.div`
  background-color: greenyellow;
  width: 60%;
  margin-left: 5px;
  height: 100%;
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
  return (
    <Container>
      <Wallpapaer>
        <ListCard>
          <ListItem>
            <ItemImg/>
            <ItemName/>
          </ListItem>
        </ListCard>
        <ToolBox>
          <AddBtn>
            <AddIcon/>
            <AddIcon2/>
          </AddBtn>
        </ToolBox>
      </Wallpapaer>
    </Container>
  );
}

export default App;
