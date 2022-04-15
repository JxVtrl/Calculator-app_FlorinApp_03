import React from "react";
import { Container } from './styles'
import { InputPad, Screen } from "../../components";

export function Main() {
  return (
    <Container>
      <Screen />
      <InputPad />
    </Container>
  );
}