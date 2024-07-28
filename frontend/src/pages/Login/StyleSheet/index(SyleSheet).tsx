import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styled(Em StyleSheet)";
import { useState } from "react";

export default function LoginStyleSheet() {
    const [passwordSafe, setPasswordSafe] = useState(false);
    const mudarSenha = () => {
        setPasswordSafe(!passwordSafe)
    }
    return (
        <View style={styles.container}>
            {/*Logo e Titulo*/}
            <View style={styles.containerLogo}>
                <Image style={styles.logoZoe} source={require('../../assets/logoZoetrope.svg')} />
            </View>
            <Text style={styles.TitleZoe}>Zoetrope</Text>

            {/*Input de E-mail e Senha*/}
            <View style={styles.inputs}>
                <Text style={styles.inputTitle}>Email</Text>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Escreva seu E-mail" style={styles.inputStyles}></TextInput>
                </View>

                <Text style={styles.inputTitle}>Senha</Text>
                <View style={styles.containerInput}>
                    <TextInput secureTextEntry={passwordSafe} placeholder="Escreva sua Senha" style={styles.inputStyles}></TextInput>
                    {/*Logica de mudar icone de esconder senha*/}
                    {passwordSafe ? (
                        <Pressable onPress={mudarSenha}><Image style={styles.passwordEye} source={require('../../assets/eyeOpen.svg')} /></Pressable>) : (<Pressable onPress={mudarSenha}><Image style={styles.passwordEye} source={require('../../assets/eyeClose.svg')} /></Pressable>)
                    }
                </View>

                {/*Esqueci a Senha*/}
                <Pressable>
                    <Text style={styles.forgotPassword}>Esqueci a Senha</Text>
                </Pressable>
            </View>

            {/*Botao de Entrar*/}
            <Pressable style={styles.ButtonStyle}>
                <Text style={styles.textButton}>Entrar</Text>
            </Pressable>

             {/*"Entrar Com"*/}
            <View style={styles.enterWithContainer}>
                <View style={styles.enterWithBar} />
                <Text style={styles.enterWithText}>Entre com</Text>
                <View style={styles.enterWithBar} />
            </View>
            <View style={styles.allsocialmedia}>
                <Pressable style={styles.socialMediaContainer}>
                    <Image style={styles.socialMediaImage} source={require('../../assets/facebookIcon.svg')} />
                    <Text style={styles.socialMediaText}>Facebook</Text>
                </Pressable>
                <Pressable style={styles.socialMediaContainer}>
                    <Image style={styles.socialMediaImage} source={require('../../assets/googleIcon.svg')} />
                    <Text style={styles.socialMediaText}>Google</Text>
                </Pressable>
            </View>
    
            <View style={styles.RegisterTextContainer}>
                <Text style={styles.RegisterText}>Não é registrado?</Text> <Pressable><Text>Crie uma Conta</Text></Pressable>
            </View>


        </View>
    )
}