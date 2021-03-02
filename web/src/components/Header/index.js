import React from "react";
import { useHistory } from "react-router-dom";

import { Container, TextRoom, CloseButton } from "./styles";

function Header({ room, socket }) {
  const history = useHistory();
  const disconectRoom = () => {
    socket.emit("disconect", () => history.push("/"));
  };
  return (
    <Container>
      <TextRoom>{room}</TextRoom>
      <CloseButton onClick={disconectRoom}>X</CloseButton>
    </Container>
  );
}

export default Header;
