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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HeadLines = ({ title, url, item }) => {
  const { title: headline, link, imgSrc, excerpt, time } = item;
  /* 3:2 ratio - for image, title, excerpt */
  return (
    <Box gridColumn="span 6" gridRow="span 4">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {headline}
          </Typography>
          {time && (
            <Typography
              component="time"
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {time + " :: "}
            </Typography>
          )}
          <Typography
            component="a"
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {title}
          </Typography>
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
            <Box component="a">...Read More</Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HeadLines;
