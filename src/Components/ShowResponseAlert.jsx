/* eslint-disable react/display-name */
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
