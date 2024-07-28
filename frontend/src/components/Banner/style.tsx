import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  background: #fff;
  padding: 9px;
  align-items: center;
  gap: 5px;
`;

export const Image = styled.Image`
  border-radius: 50%;
  overflow: hidden;
`;

export const Content = styled.View`
  display: flex;
  width: 75%;
  flex-direction: column;
`;

export const NumberOfMessages = styled.View`
  background: #007c82;
  font-size: 0.75rem;
  border-radius: 50%;
  align-self: flex-start;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  aspect-ratio: 1/1;
`;

export const NameText = styled.Text`
  font-size: 1.125rem;

`;

export const Message = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
`;

export const Icon = styled.Image`
  width:50px;
  height: 50px;
  background-color: grey;
  border-radius: 100px;
`;