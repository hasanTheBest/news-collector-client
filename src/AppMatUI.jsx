import { SWRConfig } from "swr";
import { Container } from "@mui/material";
import SelectNewsPaper from "../Components/SelectNewsPaper";
import DisplayNews from "../Components/DisplayNews";
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
          <DisplayNews />
        </Container>
      </NewspaperProvider>
    </SWRConfig>
  );
}
