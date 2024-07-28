import { Chat } from "../../components/Chat";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Content } from "./style";

export default function ChatPage() {
    return (
        <Container>
            <Header />
            <Content>
                <Chat/>
            </Content>
            <Footer />
        </Container>
    )
}