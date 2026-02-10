/* eslint-disable /*
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link, useMediaQuery, useTheme } from "@mui/material";
import { getFavicon, getNewspaperTitle } from "../utilites/faviconsConfig";
import NewsSocialShare from "./NewsSocialShare";

export default function DisplayNewsItem({ url, item, newsIndex }) {
  const { title: headline, link, excerpt, time, imgSrc } = item;

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 0,
        border: 1,
        borderColor: "grey.200",
      }}
    >
      <CardActionArea href={link} target="_blank">
        {imgSrc && (
          <CardMedia
            component="img"
            height={newsIndex === 0 && smUp ? 300 : 160}
            image={imgSrc}
            alt={headline}
          />
        )}
        <CardContent>
          <Typography
            sx={{
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            color="text.secondary"
            gutterBottom
          >
            {time && time + " | "}
            <img
              src={getFavicon(url)}
              width={12}
              height={12}
              style={{ margin: "0 3px" }}
            />
            <Link href={url} color="inherit" sx={{ textDecoration: "none" }}>
              {getNewspaperTitle(url)}
            </Link>
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            {headline}
          </Typography>
          {excerpt && (
            <Typography variant="body2" color="text.secondary">
              {excerpt}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>

      
      <NewsSocialShare shareUrl={link} />
    </Card>
  );
}
*/

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  Link,
  useTheme,
} from "@mui/material";
import { getFavicon, getNewspaperTitle } from "../utilites/faviconsConfig";
import NewsSocialShare from "./NewsSocialShare";

const DisplayNewsItem = ({ url, item, newsIndex, isFeatured }) => {
  const { title, link, excerpt, time, imgSrc } = item;
  const theme = useTheme();

  const mediaHeight = isFeatured ? 300 : 160;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: 1,
        borderColor: "divider",
      }}
      elevation={0}
    >
      <CardActionArea
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {imgSrc && (
          <CardMedia
            component="img"
            height={mediaHeight}
            image={imgSrc}
            alt={title}
          />
        )}

        <CardContent>
          <Typography
            variant="caption"
            color="text.secondary"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            gutterBottom
          >
            {time && `${time} | `}
            <img
              src={getFavicon(url)}
              alt={getNewspaperTitle(url)}
              width={12}
              height={12}
              style={{ margin: "0 4px" }}
            />
            <Typography component="span">
              {getNewspaperTitle(url)}
            </Typography>
          </Typography>

          <Typography variant="h6" component="h4" gutterBottom>
            {title}
          </Typography>

          {excerpt && (
            <Typography variant="body2" color="text.secondary">
              {excerpt}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>

      <NewsSocialShare shareUrl={link} />
    </Card>
  );
};

export default DisplayNewsItem;

