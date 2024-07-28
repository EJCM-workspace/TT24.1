import { Image } from "react-native";
import { Container, Icon } from "./style";

export default function Footer(){
    return(
        <Container>
          <Icon source={require('../../assets/Chat/mdi-light_home.svg')}/>
          <Icon source={require('../../assets/Chat/mdi-light_account.svg')}/>
          <Icon source={require('../../assets/Chat/Icon-chat.svg')}/>
          <Icon source={require('../../assets/Chat/mdi-light_bell.svg')}/>
        </Container>
    )
}