import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  TitleContainer,
  Content,
  Input,
  Title,
  FormContainer,
  Button,
} from "./styles";

function Join() {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();
  const history = useHistory();

  const handleStart = () => {
    if (!user || !room) {
      alert("Preencha os dados");
      return;
    }
    history.push(`/chat?user=${user}&room=${room}`);
  };
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Entrar no ChatApp</Title>
        </TitleContainer>
        <FormContainer>
          <Input
            type="text"
            placeholder="Username"
            onChange={(event) => setUser(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Room Name"
            onChange={(event) => setRoom(event.target.value)}
          />
        </FormContainer>

        <Button type="submit" onClick={handleStart}>
          Criar sala
        </Button>
      </Content>
    </Container>
  );
}

export default Join;
