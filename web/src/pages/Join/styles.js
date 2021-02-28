import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 50vw;

  background-color: #fff;
  border-radius: 5px;
  position: relative;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #27ae60;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`;
export const Input = styled.input`
  padding: 10px 10px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid #bdc3c7;
`;
export const Button = styled.button`
  width: 40vw;
  height: 35px;
  background-color: #27ae60;
  border: none;
  border-radius: 5px;
  text-decoration: none;

  color: #fff;
  transform: 0.3s opacity ;

  :hover {
    opacity: 0.8;
  }
`;
