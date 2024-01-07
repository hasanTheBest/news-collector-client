/* eslint-disable react/prop-types */
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Link, useMediaQuery } from "@mui/material";

export default function TitleImage({ title, url, item }) {
  const { title: headline, link, imgSrc, time } = item;

  const theme = useTheme();

  let columns = 12;
  if (useMediaQuery(theme.breakpoints.up("md"))) columns = 6;
  if (useMediaQuery(theme.breakpoints.up("xl"))) columns = 3;

  return (
    <Box gridColumn={`span ${columns}`}>
      <Card variant="outlined" sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: 400, lineHeight: 1.25 }}
            >
              <Link
                href={link}
                sx={{ color: "inherit", textDecoration: "none" }}
              >
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
            <Link
              href={url}
              sx={{
                fontSize: 12,
                textDecoration: "none",
                textWrap: "nowrap",
              }}
            >
              {title}
            </Link>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={imgSrc}
          alt={headline}
        />
      </Card>
    </Box>
  );
}
