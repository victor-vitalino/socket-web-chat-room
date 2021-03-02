import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.currentUser ? "flex-end" : "flex-start")};
  margin-top: 5px;

  ::before {
    content: "";

    display: inline-flex;
    position: absolute;
    width: 0;
    height: 0;
    vertical-align: bottom;
    left: ${(props) => !props.currentUser && "-3px"};
    right: ${(props) => props.currentUser && "-3px"};

    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: ${(props) => props.currentUser && "5px solid #27ae60"};
    border-right: ${(props) => !props.currentUser && "5px solid  #ddd"};
  }
`;

export const UserText = styled.p``;

export const MessageBox = styled.div`
  background-color: ${(props) => (props.currentUser ? "#27ae60" : "#ddd")};
  height: auto;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
`;

export const MessageText = styled.p``;
export const CurentUserText = styled.p``;
