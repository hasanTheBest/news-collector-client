/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";

export default function DisplaySubLeadNews({ title, url, item, colSpan }) {
  const { title: headline, link, excerpt, time, imgSrc } = item;
  return (
    <Card>
      <CardActionArea href={link}>
        {imgSrc && (
          <CardMedia
            component="img"
            height={80 * colSpan}
            image={imgSrc}
            alt={headline}
          />
        )}
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {time && time + " :: "}
            <Link href={url} color="inherit" sx={{ textDecoration: "none" }}>
              {title.split(" ").splice(0, 3).join(" ")}
            </Link>
          </Typography>
          <Typography gutterBottom variant="h5" component="h4">
            {headline}
          </Typography>
          {excerpt && (
            <Typography variant="body2" color="text.secondary">
              {excerpt}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
