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
