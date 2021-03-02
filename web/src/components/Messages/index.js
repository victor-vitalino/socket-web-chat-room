import React from "react";
import Scroll from "react-scroll-to-bottom";
import Message from "../Message";

function Messages({ messagesData, name }) {
  return (
    <Scroll>
      {messagesData.map((msg, i) => (
        <Message msg={msg} name={name} key={i} />
      ))}
    </Scroll>
  );
}

export default Messages;

/*
 */
