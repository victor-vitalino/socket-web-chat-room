import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 35px;

  background-color: #27ae60;
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
`;

export const TextRoom = styled.p`
  font-size: 16px;
  color: #fff;
`;

export const CloseButton = styled.button`
  color: #fff;
  font-weight: bold;
  background-color: transparent;
  border: none;
`;
