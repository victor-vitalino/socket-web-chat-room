import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import {
  Container,
  Content,
  MessageContainer,
  FormContainer,
  InputMessage,
  ButtonSendMessage,
  InputContainer,
} from "./styles";

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "192.168.0.105:3333";

  // connect with server
  useEffect(() => {
    const handleState = () => {
      const { name, room } = queryString.parse(location.search);
      setName(name);
      setRoom(room);
      socket = io(ENDPOINT);

      socket.emit("join", { name, room }, () => {});
    };
    handleState();
  }, [ENDPOINT, location.search]);

  //receive messages from server
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  console.log(message, messages);

  return (
    <Container>
      <Content>
        <MessageContainer>
          {messages.map((msg, i) => (
            <div key={i}>
              <p>
                <b>{msg.user}</b>:{msg.text}
              </p>
            </div>
          ))}
        </MessageContainer>
        <FormContainer>
          <InputContainer>
            <InputMessage
              type="text"
              value={message}
              placeholder="Envie uma mensagem"
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
            />
          </InputContainer>
          <ButtonSendMessage onClick={(event) => sendMessage(event)}>
            Enviar
          </ButtonSendMessage>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default Chat;
