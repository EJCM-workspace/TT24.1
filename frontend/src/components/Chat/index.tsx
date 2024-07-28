import React from "react";
import { Banner } from "../Banner";
import { SearchBar } from "../SearchBar";
import { Container } from "./style";

export const Chat = () => {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  const data = [
    {
      img: require("../../assets/Chat/Mask Group-1.png"),
      name: "Vikings - Brasil",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
    {
      img: require("../../assets/Chat/Mask Group-2.png"),
      name: "O segredo além do jardim",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
    {
      img: require("../../assets/Chat/Mask Group-3.png"),
      name: "Triss Merigold",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
    {
      img: require("../../assets/Chat/Mask Group.png"),
      name: "Homem-aranha no aranha...",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
  ];

  return (
    <div>
      <Container>
        <SearchBar value={searchBarValue} setValue={setSearchBarValue} />
        {data
          .filter((item) => {
            return item.name.includes(searchBarValue);
          })
          .map((item, index) => (
            <Banner
              img={item.img}
              name={item.name}
              content={item.message}
              key={index}
            />
          ))}
      </Container>
    </div>
  );
};