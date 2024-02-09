import { Button, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

function NewsSocialShare({ shareUrl }) {
  const copyUrlToClipboard = (url) => navigator.clipboard.writeText(url);
  return (
    <CardActions>
      <IconButton
        aria-label="add to favorites"
        onClick={() => copyUrlToClipboard(shareUrl)}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon
          size={18}
          round
          // iconFillColor="#000"
          // bgStyle={{ fill: "gray" }}
        />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <XIcon size={18} round />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={18} round />
      </WhatsappShareButton>
      <FacebookMessengerShareButton url={shareUrl}>
        <FacebookMessengerIcon size={18} round />
      </FacebookMessengerShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={18} round />
      </LinkedinShareButton>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={18} round />
      </TelegramShareButton>
    </CardActions>
  );
}

export default NewsSocialShare;
