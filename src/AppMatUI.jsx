import * as React from "react";
import { SWRConfig } from "swr";
import { Container } from "@mui/material";
import SelectNewsPaper from "../Components/SelectNewsPaper";
import DisplayNewspaper from "../Components/DisplayNewspaper";
import NewspaperProvider from "../Components/NewspaperContext";

export default function AppMatUI() {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <NewspaperProvider>
        <Container maxWidth="xl">
          <SelectNewsPaper />
          <DisplayNewspaper />
        </Container>
      </NewspaperProvider>
    </SWRConfig>
  );
}
