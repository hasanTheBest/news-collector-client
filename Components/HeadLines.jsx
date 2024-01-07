/* eslint-disable react/prop-types */
import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  Link,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";

const HeadLines = ({ title, url, item }) => {
  const { title: headline, link, imgSrc, excerpt, time } = item;

  const theme = useTheme();

  let columns = 12,
    rows = 4;
  if (useMediaQuery(theme.breakpoints.up("md"))) columns = 6;
  // if (useMediaQuery(theme.breakpoints.up("xl"))) columns = ;

  /* 3:2 ratio - for image, title, excerpt */
  return (
    <Box gridColumn={`span ${columns}`} gridRow={`span ${rows}`}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
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
          <Link
            href={url}
            sx={{
              fontSize: 12,
              textDecoration: "none",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Link>
        </CardContent>
        <CardMedia
          component="img"
          // height="194"
          image={imgSrc}
          alt={headline}
        />
        <CardContent>
          <Typography paragraph variant="body2" color="text.secondary">
            {excerpt}
            <Link href={link} sx={{ textDecoration: "none" }}>
              ...Read More
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HeadLines;
