import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #27ae60;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 90%;
  height: 87vh;
  border-radius: 15px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  background-color: #eeea;
  width: 100%;
  height: 90%;
  padding: 10px;
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;

  height: 10%;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 85%;
  height: 100%;
  margin-right: 2px;

  padding-left: 10px;
  border: none;

  border-bottom-width: 0px;

  transition: 1s border-bottom ease;
  ::after {
    border-bottom-width: 100%;

    border-bottom: 10px solid #27ae60;
  }
`;

export const InputMessage = styled.input`
  height: 100%;
  border: 0;
  border-bottom: 1px solid transparent;
  background: transparent;
  color: #27ae60;
  font-size: 16px;
  width: 15rem;
  padding-left: 15px;
  transition: all 0.8s ease-in-out;
  ::placeholder {
    color: #27ae60;
    font-size: 16px;
  }
  :focus {
    border-bottom: 1px solid #27ae60;
    width: 100%;
  }
`;

export const ButtonSendMessage = styled.button`
  border: none;
  border-radius: 0px 5px 5px 0px;
  width: 15%;
  height: 100%;

  color: #fff;
  background-color: #27ae60;
  transition: 0.5s opacity ease;
  :hover {
    opacity: 0.8;
  }
`;
