import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// import { Container } from './styles';

function Chat({ location }) {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();
  const ENDPOINT = "localhost:3333";

  useEffect(() => {
    const handleState = () => {
      const { user, room } = queryString.parse(location.search);
    let socket = io(ENDPOINT);
      setUser(user);
      setRoom(room);

      socket.emit("join", { user, room });
      console.log(socket)
    };
    handleState();
  }, [ENDPOINT, location.search]);
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
}

export default Chat;
