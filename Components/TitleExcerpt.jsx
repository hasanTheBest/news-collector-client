/* eslint-disable react/prop-types */
// import * as React from "react";
import { Link, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TitleExcerpt({ title, url, item }) {
  const { title: headline, link, excerpt, time } = item;

  const theme = useTheme();

  let columns = 12;
  if (useMediaQuery(theme.breakpoints.up("md"))) columns = 6;
  // if (useMediaQuery(theme.breakpoints.up("lg"))) columns = 4;

  return (
    <Box gridColumn={`span ${columns}`}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h4">
            <Link href={link} sx={{ color: "inherit", textDecoration: "none" }}>
              {headline}
            </Link>
          </Typography>
          {time && (
            <Typography
              component="time"
              color="text.secondary"
              variant="caption"
            >
              {time + " :: "}
            </Typography>
          )}
          <Link href={url} sx={{ fontSize: 12, textDecoration: "none" }}>
            {title}
          </Link>
          <Typography component="p" variant="body2">
            {excerpt + "..."}
            <Link href={link} sx={{ textDecoration: "none" }}>
              See more
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
