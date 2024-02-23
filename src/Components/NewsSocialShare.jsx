/* eslint-disable react/prop-types */
import { CardActions, IconButton, Menu, Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useTheme } from "@mui/material/styles";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon,
} from "react-share";
import { Box } from "@mui/system";
import React from "react";
import { useSnackbar } from "notistack";

function NewsSocialShare({ shareUrl }) {
  const { enqueueSnackbar } = useSnackbar();

  // mui theme
  const muiTheme = useTheme();

  // copy url to clipboard
  const copyUrlToClipboard = (url) => {
    navigator.clipboard.writeText(url);

    // show snackbar confirming copy url
    enqueueSnackbar("Url is copied to clipboard.", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
    });
  };

  // share button popup
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // more share items
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
      <Box sx={{ display: "flex", gap: 1, paddingX: "10px", flexWrap: "wrap" }}>
        <Tooltip title="Share to Whatsapp">
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={18} round />
          </WhatsappShareButton>
        </Tooltip>

        {/* App Id is needed */}
        <Tooltip title="Share to Facebook Messenger">
          <FacebookMessengerShareButton url={shareUrl} appId="4567891">
            <FacebookMessengerIcon size={18} round />
          </FacebookMessengerShareButton>
        </Tooltip>

        <Tooltip title="Share to LinkedIn">
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={18} round />
          </LinkedinShareButton>
        </Tooltip>

        <Tooltip title="Share to Tumblr">
          <TumblrShareButton url={shareUrl}>
            <TumblrIcon size={18} round />
          </TumblrShareButton>
        </Tooltip>

        <Tooltip title="Share to Instapaper">
          <InstapaperShareButton url={shareUrl}>
            <InstapaperIcon size={18} round />
          </InstapaperShareButton>
        </Tooltip>

        <Tooltip title="Line">
          <LineShareButton url={shareUrl}>
            <LineIcon size={18} round />
          </LineShareButton>
        </Tooltip>

        <Tooltip title="Pinterest">
          <PinterestShareButton url={shareUrl} media={shareUrl}>
            <PinterestIcon size={18} round />
          </PinterestShareButton>
        </Tooltip>

        <Tooltip title="Pocket">
          <PocketShareButton url={shareUrl}>
            <PocketIcon size={18} round />
          </PocketShareButton>
        </Tooltip>

        <Tooltip title="Reddit">
          <RedditShareButton url={shareUrl}>
            <RedditIcon size={18} round />
          </RedditShareButton>
        </Tooltip>

        <Tooltip title="Viber">
          <ViberShareButton url={shareUrl}>
            <ViberIcon size={18} round />
          </ViberShareButton>
        </Tooltip>

        <Tooltip title="Email">
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={18} round />
          </EmailShareButton>
        </Tooltip>

        <Tooltip title="Share to VK">
          <VKShareButton url={shareUrl}>
            <VKIcon size={18} round />
          </VKShareButton>
        </Tooltip>

        <Tooltip title="Workplace">
          <WorkplaceShareButton url={shareUrl}>
            <WorkplaceIcon size={18} round />
          </WorkplaceShareButton>
        </Tooltip>

        <Tooltip title="Share to Gab">
          <GabShareButton url={shareUrl}>
            <GabIcon size={18} round />
          </GabShareButton>
        </Tooltip>

        <Tooltip title="Hatena">
          <HatenaShareButton url={shareUrl}>
            <HatenaIcon size={18} round />
          </HatenaShareButton>
        </Tooltip>

        <Tooltip title="Live Journal">
          <LivejournalShareButton url={shareUrl}>
            <LivejournalIcon size={18} round />
          </LivejournalShareButton>
        </Tooltip>

        <Tooltip title="Mail RU">
          <MailruShareButton url={shareUrl}>
            <MailruIcon size={18} round />
          </MailruShareButton>
        </Tooltip>

        <Tooltip title="Share to OK">
          <OKShareButton url={shareUrl}>
            <OKIcon size={18} round />
          </OKShareButton>
        </Tooltip>
      </Box>
    </Menu>
  );

  return (
    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Tooltip title="Add to favorites">
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Copy url to clipboard">
          <IconButton
            aria-label="copy url to clipboard"
            onClick={() => copyUrlToClipboard(shareUrl)}
          >
            <ContentCopyIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share">
          <IconButton
            aria-label="share"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <ShareIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Tooltip>

        {SocialMenu}
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Tooltip title="Share to Facebook">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon
              size={20}
              round
              iconFillColor={muiTheme.palette.text.secondary}
              bgStyle={{
                fill: "transparent",
              }}
            />
          </FacebookShareButton>
        </Tooltip>

        <Tooltip title="Share to X/Twitter">
          <TwitterShareButton url={shareUrl}>
            <XIcon
              size={20}
              round
              iconFillColor={muiTheme.palette.text.secondary}
              bgStyle={{
                fill: "transparent",
              }}
            />
          </TwitterShareButton>
        </Tooltip>

        <Tooltip title="Share to Telegram">
          <TelegramShareButton url={shareUrl}>
            <TelegramIcon
              size={20}
              round
              iconFillColor={muiTheme.palette.text.secondary}
              bgStyle={{
                fill: "transparent",
              }}
            />
          </TelegramShareButton>
        </Tooltip>
      </Box>
    </CardActions>
  );
}

export default NewsSocialShare;
