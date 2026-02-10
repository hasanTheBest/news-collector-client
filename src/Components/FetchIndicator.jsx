/*
import React from "react";
import { useNewspaper } from "../Context/NewspaperContext";
import Chip from "@mui/material/Chip";

import { Box, CircularProgress } from "@mui/material";
import { favicons } from "../utilites/faviconsConfig";

const FetchIndicator = () => {
  const { fetchIndicator, newsData } = useNewspaper();

  return (
    <React.Fragment>
      {fetchIndicator.length !== newsData.length && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            position: "fixed",
            bottom: 0,
          }}
        >
          <Chip
            icon={<CircularProgress color="inherit" size={16} />}
            label={
              favicons[fetchIndicator[newsData.length]?.toLowerCase()]["title"]
            }
            variant="filled"
            color="info"
          />
        </Box>
      )}
    </React.Fragment>
  );
};

export default FetchIndicator;
*/

import { Box, Chip, CircularProgress } from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";
import { favicons } from "../utilites/faviconsConfig";

const FetchIndicator = () => {
  const { fetchIndicator } = useNewspaper();

  if (!fetchIndicator.length) return null;

  const currentSource = fetchIndicator[0];
  const faviconData = favicons?.[currentSource?.toLowerCase()];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        bottom: 16,
        zIndex: 1300,
      }}
    >
      <Chip
        icon={<CircularProgress color="inherit" size={16} />}
        label={faviconData?.title ?? "Loading news..."}
        color="info"
      />
    </Box>
  );
};

export default FetchIndicator;

