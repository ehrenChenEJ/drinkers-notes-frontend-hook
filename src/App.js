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
  cursor: pointer;
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

const BackIcon = styled.div`
  border: solid black;
  border-width: 0 10px 10px 0;
  padding: 15px;
  position: absolute;
  top: 29%;
  left: 15%;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  border-radius: 5px;
`;

const BackIcon2 = styled.div`
  border: solid black;
  border-width: 0 10px 10px 0;
  position: absolute;
  width: 60%;
  top: 43%;
  left: 20%; 
  border-radius: 10px;
`;

const theme = {
  noAdd:{
    backgroundColor:'gray',
    bg4ToolBox:'lightgrey',
  },
  allowAdd:{
    backgroundColor:'#ff5c8a',
    bg4ToolBox:'#ffdeeb',
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

  // // 頁面是否為編輯狀態
  // // Edited & Editing
  const[currentEdit, setCurrentEdit] = useState('Edited');
  const handleCurrentEditState = (currentEdit) =>{
    setCurrentEdit(currentEdit);
  };

  

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <Wallpapaer>
          {/* 列表頁 */}
          {currentPage === 'ListCard' && (
            <ListCard
              listcardNum = {listcardNum}
              handleCurrentPageChange = {handleCurrentPageChange}
            />
          )}
          {/* 列表詳細頁 */}
          {currentPage === 'CardDetail'&&(
            <CardDetail 
              handleCurrentPageChange = {handleCurrentPageChange}
              handleCurrentEditState = {handleCurrentEditState}
              currentEdit = {currentEdit}
            />
          )}
          <ToolBox>
            {/* 列表頁用新增功能 */}
            {currentPage === 'ListCard' && (
              <AddBtn onClick={addListItem}>
                <AddIcon/>
                <AddIcon2/>
              </AddBtn>
            )}
            {/* 詳細用返回功能 */}
            {currentPage === "CardDetail" &&(
              <AddBtn 
                onClick={()=> {
                  handleCurrentPageChange('ListCard');
                  handleCurrentEditState('Edited');
                }}
              >
                <BackIcon/>
                <BackIcon2/>
              </AddBtn>
            )}
          </ToolBox>
        </Wallpapaer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
