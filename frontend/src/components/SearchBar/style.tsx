import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #222831;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  border: 0;
  background: transparent;
  outline-width: 0;
  font-size: 1.125rem;
  flex: 1;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;