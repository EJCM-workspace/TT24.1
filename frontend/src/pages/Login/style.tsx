import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin-bottom: 20px;
  background-color: #c6c6c6;
`;

export const LogoZoe = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TitleZoe = styled.Text`
  font-size: 36px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 60px;
`;

export const Inputs = styled.View`
  width: 100%;
  gap: 8px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  padding: 12px 8px;
  border-width: 1px;
  border-color: grey;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export const InputStyles = styled.TextInput`
  width: 100%;
  height: 40px;
  font-size: 20px;
  outline-width: 0;
`;

export const InputTitle = styled.Text`
  font-size: 20px;
  font-weight: 400;
`;

export const PasswordEye = styled.Image`
  width: 24px;
  height: 26px;
`;

export const ButtonStyle = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  height: 46px;
  border-radius: 5px;
  background-color: #007c82;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 500;
`;

export const ForgotPassword = styled.Text`
  font-size: 14px;
  font-weight: 400;
  align-self: flex-end;
`;

export const EnterWithContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
  flex-direction: row;
  gap: 10px;
`;

export const EnterWithText = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;

export const EnterWithBar = styled.View`
  height: 1px;
  width: 35%;
  background-color: grey;
`;

export const AllSocialMedia = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const SocialMediaContainer = styled.View`
  width: 162px;
  height: 46px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: grey;
  border-radius: 5px;
`;

export const SocialMediaText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #222831;
  opacity: 0.8;
`;

export const SocialMediaImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const RegisterTextContainer = styled.View`
  flex-direction: row;
  margin-top: 60px;
  gap: 10px;
`;

export const RegisterText = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;
