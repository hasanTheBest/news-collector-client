import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import SelectNewsPaper from "../Components/SelectNewsPaper";

export default function AppMatUI() {
  return (
    <Container maxWidth="sm">
      <SelectNewsPaper />
    </Container>
  );
}
