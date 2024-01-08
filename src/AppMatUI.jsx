import * as React from "react";
import { Container } from "@mui/material";
import SelectNewsPaper from "../Components/SelectNewsPaper";
import DisplayNewspaper from "../Components/DisplayNewspaper";
import NewspaperProvider from "../Components/NewspaperContext";

export default function AppMatUI() {
  return (
    <NewspaperProvider>
      <Container maxWidth="xl">
        <SelectNewsPaper />
        <DisplayNewspaper />
      </Container>
    </NewspaperProvider>
  );
}
