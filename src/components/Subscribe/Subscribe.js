import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { Button } from "../../components/Button/Button.styles";
import Input from "../../components/Input/Input";
import { Container } from "./Subscribe.styles";

export default function Subscribe({ text }) {
  return (
    <Container>
      <h3>{text}</h3>
      <form>
        <Input label="Email address" name="email" type="email" required />
        <Button type="submit" big>
          GET STARTED
          <ArrowForwardIosIcon />
        </Button>
      </form>
    </Container>
  );
}
