import React from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Icon,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/reactjs-landing-page">ubabank</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Faça login em sua conta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Senha</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Entrar</FormButton>
              <Text>Esqueci a senha</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
