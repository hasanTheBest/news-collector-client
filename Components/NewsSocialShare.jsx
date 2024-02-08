import { Button, CardActions } from "@mui/material";

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
  return (
    <CardActions>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={20} round />
        <FacebookShareCount url={shareUrl} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <XIcon size={20} round />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={20} round />
      </WhatsappShareButton>
      <FacebookMessengerShareButton url={shareUrl}>
        <FacebookMessengerIcon size={20} round />
      </FacebookMessengerShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={20} round />
      </LinkedinShareButton>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={20} round />
      </TelegramShareButton>
    </CardActions>
  );
}

export default NewsSocialShare;
