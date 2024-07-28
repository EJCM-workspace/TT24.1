import React from "react";
import { Container, Content, Icon, Message, NameText, NumberOfMessages } from "./style";


type Props = {
  img: any;
  name: string;
  content: string;
};

export const Banner = ({ img, name, content }: Props) => {
  return (
    <Container>
      <Icon source={img} ></Icon>
      <Content>
        <NameText>{name}</NameText>
        <Message>{content}</Message>
      </Content>
      <NumberOfMessages>15</NumberOfMessages>
    </Container>
  );
};