import React,{ useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

// Component
import ListCard from './view/ListCard';
import CardDetail from './view/CardDetail';

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
  /* background-color: #ffdeeb; */
  background-color: ${({theme})=> theme.bg4ToolBox};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

const AddBtn = styled.div`
  /* background-color: #ff5c8a; */
  background-color: ${({theme})=>theme.backgroundColor};
  height: 100px;
  width: 100px;
  border-radius: 50px;
  position: relative;
  /* cursor: pointer; */
  cursor: ${({theme})=>theme.cursor};
    &:hover{
      background-color: ${({theme})=>theme.backgroundColor};
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

const theme = {
  noAdd:{
    backgroundColor:'gray',
    bg4ToolBox:'lightgrey',
    cursor:'not-allowed'
  },
  allowAdd:{
    backgroundColor:'#ff5c8a',
    bg4ToolBox:'#ffdeeb',
    cursor:'pointer'
  }
};



const App = () =>{
  const [listcard , setListCards] = useState(2);
  const listcardNum = Array.from({length:listcard});

  const [sweetNess, setSweet] = useState(1);
  const [sourNess, setSour] = useState(2);
  const [fulNess, setFul] = useState(3);

  // click the plus btn to add the list item
  const addListItem = () => {
    setListCards(listcard+1);
    // TODO: 如果增加後端功能這邊應該要加上存至使用者帳號(save to userid??)
  };

  // 使用theme預設調整toolbox狀態
  const[currentTheme,setCurrentTheme]= useState('allowAdd');

  // 更改頁面
  const [currentPage, setCurrentPage] = useState('ListCard');
  const handleCurrentPageChange = (currentPage) =>{
    setCurrentPage(currentPage);
    // 詳細頁的時候 toolbox 變灰
    setCurrentTheme(currentPage === 'ListCard'? 'allowAdd':'noAdd');
  };

  

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <Wallpapaer>
          {currentPage === 'ListCard' && (
            <ListCard
              listcardNum = {listcardNum}
              handleCurrentPageChange = {handleCurrentPageChange}
            />
          )}
          {currentPage === 'CardDetail'&&(
            <CardDetail handleCurrentPageChange = {handleCurrentPageChange}/>
          )}
          <ToolBox>
            {/* <AddBtn onClick={addListItem}> */}
            {currentPage === 'ListCard' && (
              <AddBtn onClick={addListItem}>
                <AddIcon/>
                <AddIcon2/>
              </AddBtn>
            )}
            {currentPage === "CardDetail" &&(
              <AddBtn>
                <AddIcon/>
                <AddIcon2/>
              </AddBtn>
            )}
          </ToolBox>
        </Wallpapaer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
