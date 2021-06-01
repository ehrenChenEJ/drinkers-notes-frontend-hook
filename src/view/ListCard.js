import React from 'react';
import styled from '@emotion/styled';
const ListCardBlock = styled.div`
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

const ListCard = ({
  listcardNum,
}) => {
  // console.log(listcards);

  return(
    <ListCardBlock>
      {listcardNum.map((_,index)=>(
        <ListItem key={index}>
          <ItemImg/>
          <ItemName/>
        </ListItem>
      ))}
    </ListCardBlock>
  );

};

export default ListCard;