import { CardActions, IconButton, Menu, Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { Box, display } from "@mui/system";
import React from "react";
import { MenuItem } from "@mui/base";

function NewsSocialShare({ shareUrl }) {
  const copyUrlToClipboard = (url) => navigator.clipboard.writeText(url);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const SocialMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box sx={{ display: "flex", gap: 1, paddingX: "10px" }}>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={18} round />
        </WhatsappShareButton>
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon size={18} round />
        </FacebookMessengerShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={18} round />
        </LinkedinShareButton>
      </Box>
    </Menu>
  );

  return (
    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Tooltip title="Add to favorites">
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Copy url to clipboard">
          <IconButton
            aria-label="copy url to clipboard"
            onClick={() => copyUrlToClipboard(shareUrl)}
          >
            <ContentCopyIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share">
          <IconButton aria-label="share">
            <ShareIcon
              sx={{ fontSize: 16 }}
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            />
          </IconButton>
        </Tooltip>

        {SocialMenu}
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={18} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <XIcon size={18} round />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={18} round />
        </TelegramShareButton>

        {/* <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={18} round />
        </WhatsappShareButton>
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon size={18} round />
        </FacebookMessengerShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={18} round />
        </LinkedinShareButton> */}
      </Box>
    </CardActions>
  );
}

export default NewsSocialShare;
