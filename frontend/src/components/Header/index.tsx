import { Container, LogoZoetrope, Profile, SearchIcon } from "./style";

export default function Header(){
    return(
        <Container>
            <Profile source={require('../../assets/Chat/ProfilePic.svg')}/>
            <LogoZoetrope source={require('../../assets/Chat/Logo.svg')}/>
            <SearchIcon source={require('../../assets/Chat/SearchIcon.svg')}/>
        </Container>
    )
}