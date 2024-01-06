import * as React from "react";
import { Container } from "@mui/material";
import SelectNewsPaper from "../Components/SelectNewsPaper";
import DisplayNewspaper from "../Components/DisplayNewspaper";

export default function AppMatUI() {
  return (
    <Container maxWidth="xl">
      <SelectNewsPaper />
      <DisplayNewspaper />
    </Container>
  );
}
