import React from "react";
import { Container, Icon, Input } from "./style";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({ value, setValue }: Props) => {
  return (
    <Container>
      <Input
        placeholder="Buscar conversas"
        value={value}
        onChange={(event:any) => {
          setValue(event.target.value);
        }}
      />
      <Icon source={require('../../assets/Chat/SearchIcon.svg')}/>
    </Container>
  );
};