/* eslint-disable react/prop-types */
// import * as React from "react";
import { Link, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TitleMeta({ title, url, item }) {
  const { title: headline, link, excerpt, time } = item;

  const theme = useTheme();

  let columns = 12;
  if (useMediaQuery(theme.breakpoints.up("md"))) columns = 6;
  if (useMediaQuery(theme.breakpoints.up("xl"))) columns = 3;

  return (
    <Box gridColumn={`span ${columns}`}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 400 }}>
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
        </CardContent>
      </Card>
    </Box>
  );
}
