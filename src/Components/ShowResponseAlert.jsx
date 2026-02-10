/* eslint-disable react/display-name */
/*
import React, { useMemo } from "react";
import { useNewspaper } from "../Context/NewspaperContext";
import { favicons, getHostName } from "../utilites/faviconsConfig";
import { useSnackbar } from "notistack";

const ShowResponseAlert = React.memo(() => {
  const { newsData } = useNewspaper();
  const { enqueueSnackbar } = useSnackbar();

  const newsDataIndex = newsData.length === 0 ? 0 : newsData.length - 1;
  const resType = newsData[newsDataIndex]?.type;
  const resUrl = resType === "success" && newsData[newsDataIndex]?.url;
  const resErrorName = resType === "error" && newsData[newsDataIndex]?.name;
  const resErrorMessage =
    resType === "error" && newsData[newsDataIndex]?.message;

  const hostName = resUrl && getHostName(resUrl);
  const newspaperName = favicons[hostName]?.title;

  const alertMessage = useMemo(
    function alertMessage() {
      if (resType === "success") {
        return `${newspaperName} is loaded successfully.`;
      } else if (resType === "error") {
        return `${resErrorName}.\n${resErrorMessage}`;
      } else {
        return "Unknown error occurs.";
      }
    },
    [resType, newspaperName, resErrorName, resErrorMessage]
  );

  useMemo(() => {
    if (resType) {
      enqueueSnackbar(alertMessage, {
        autoHideDuration: 5000,
        variant: resType,
        preventDuplicate: true,
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
      });
    }
  }, [resType, enqueueSnackbar, alertMessage]);

  return null;
});

export default ShowResponseAlert;
*/

import React, { useEffect } from "react";
import { useNewspaper } from "../Context/NewspaperContext";
import { favicons, getHostName } from "../utilites/faviconsConfig";
import { useSnackbar } from "notistack";

const ShowResponseAlert = () => {
  const { newsData } = useNewspaper();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!newsData.length) return;

    const lastItem = newsData[newsData.length - 1];
    const { type } = lastItem;

    let message = "Unknown error occurred.";

    if (type === "success") {
      const hostName = getHostName(lastItem.url);
      const newspaperName = favicons[hostName]?.title ?? hostName;
      message = `${newspaperName} loaded successfully.`;
    } else if (type === "error") {
      message = `${lastItem.name ?? "Error"}: ${lastItem.message ?? ""}`;
    }

    enqueueSnackbar(message, {
      autoHideDuration: 5000,
      variant: type ?? "default",
      preventDuplicate: true,
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
    });
  }, [newsData, enqueueSnackbar]);

  return null;
};

export default ShowResponseAlert;

