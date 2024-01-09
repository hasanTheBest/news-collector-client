/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const DisplayLeadNews = ({ title, url, item }) => {
  const { title: headline, link, imgSrc, excerpt, time } = item;
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          <Link href={link} sx={{ color: "inherit", textDecoration: "none" }}>
            {headline}
          </Link>
        </Typography>
        {time && (
          <Typography component="time" color="text.secondary" variant="caption">
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
      <CardMedia component="img" height="300" image={imgSrc} alt={headline} />
      <CardContent>
        <Typography paragraph variant="body2" color="text.secondary">
          {excerpt}
          <Link href={link} sx={{ textDecoration: "none" }}>
            ...Read More
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DisplayLeadNews;
