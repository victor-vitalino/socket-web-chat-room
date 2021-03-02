import React from "react";

import {
  Container,
  CurentUserText,
  UserText,
  MessageBox,
  MessageText,
} from "./styles";

function Message({ msg, name }) {
  let { user, text } = msg;
  let currentUser = name === user ? true : false;
  console.log(msg, name, "consoled");

  return (
    <Container currentUser={currentUser}>
      <MessageBox currentUser={currentUser}>
        <MessageText currentUser={currentUser}>{text}</MessageText>
      </MessageBox>
      {!currentUser && <UserText>{user}</UserText>}
    </Container>
  );
}

export default Message;

/*
 <Container currentUser={currentUser}>
      {currentUser && <CurentUserText>{currentUser}</CurentUserText>}
     
      {!currentUser && <UserText>{{ user }}</UserText>}
    </Container>
    */
