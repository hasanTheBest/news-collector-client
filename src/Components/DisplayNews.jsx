/* eslint-disable no-prototype-builtins */
import { Box, Typography, styled, useTheme } from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";
import DisplayNewsItem from "./DisplayNewsItem";
import React, { useEffect, useMemo, useReducer } from "react";
import LinearProgressBar from "./LinearProgressBar";
import { enqueueSnackbar } from "notistack";
import { getNewspaperTitle } from "../utilites/faviconsConfig";

const DisplayNews = React.memo(function DisplayNews() {
  const { newsError, newsData } = useNewspaper();

  const theme = useTheme();

  // Styles for container and item
  const styles = useMemo(
    () => ({
      GridContainer: {
        [theme.breakpoints.between("md", "xl")]: {
          gridTemplateColumns: "repeat(12, 1fr)",
        },
      },
    }),
    [theme]
  );

  const BoxWithStyles = styled("div")(({ newsIndex }) => ({
    [theme.breakpoints.up("xs")]: {
      gridColumn: "span 10",
    },
    [theme.breakpoints.up("sm")]: {
      gridColumn: newsIndex === 0 ? "span 10" : "span 5",
    },
    [theme.breakpoints.up("md")]: {
      gridColumn: newsIndex === 0 ? "span 8" : "span 4",
    },
    [theme.breakpoints.up("lg")]: {
      gridColumn: newsIndex === 0 ? "span 6" : "span 3",
    },
    [theme.breakpoints.up("xl")]: {
      gridColumn: newsIndex === 0 ? "span 4" : "span 2",
    },
  }));

  // show snackbar
  /* function showSnackbar(resType, url) {
    if (!resType) return;
    
    function alertMessage() {
      if (resType === "success") {
        return `${getNewspaperTitle(url)} is loaded successfully.`;
      } else if (resType === "error") {
        // return `${resErrorName}.\n${resErrorMessage}`;
        return `${resType}`;
      } else {
        return "Unknown error occurs.";
      }
    }

    enqueueSnackbar(alertMessage(), {
      autoHideDuration: 5000,
      variant: resType,
      preventDuplicate: true,
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
    });
  } */

  // useMemo(() => {}, [])

  /* const reducerAlert = (state, action) => {
    switch (state.type) {
      case "success":
        return enqueueSnackbar(`${getNewspaperTitle(action.url)} success`, {
          autoHideDuration: 5000,
          variant: "success",
          preventDuplicate: true,
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
        });
      case "error":
        return enqueueSnackbar(`${getNewspaperTitle(action.url)} failed`, {
          autoHideDuration: 5000,
          variant: "error",
          preventDuplicate: true,
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
        });

      default:
        return enqueueSnackbar(
          `${getNewspaperTitle(action.url)} undefined error.`,
          {
            autoHideDuration: 5000,
            preventDuplicate: true,
            anchorOrigin: { horizontal: "right", vertical: "bottom" },
          }
        );
    }
  }; */

  /* const reducerAlert = (state, action) => {
    switch (action.type) {
      case "success":
        return { type: action.type, url: action.url };
      case "error":
        return { type: action.type, url: action.url };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerAlert, {
    type: "",
    url: "",
  });

  useEffect(() => {
    const { type, url } = state;
    if (!type || !url) return;

    const alertMessage =
      type === "success"
        ? `${getNewspaperTitle(url)} is loaded successfully.`
        : `${getNewspaperTitle(url)} failed`;

    enqueueSnackbar(alertMessage, {
      autoHideDuration: 5000,
      variant: type === "success" ? "success" : "error",
      preventDuplicate: true,
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
    });
  }, [state]); */

  if (newsError) {
    return (
      <Typography variant="h1" color="error">
        Error is occurred...
      </Typography>
    );
  }

  if (!newsData.length) {
    return <LinearProgressBar />;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(10, 1fr)`}
      gap={2}
      sx={styles.GridContainer}
    >
      {newsData &&
        // newsData.map(({ title, url, news }) => {
        newsData.map(({ type, url, news }) => {
          // show snackbar
          // dispatch({ type, url });

          return (
            <React.Fragment key={Math.random()}>
              {Array.isArray(news) &&
                news.map((item, newsIndex) => {
                  return (
                    <BoxWithStyles key={Math.random()} newsIndex={newsIndex}>
                      <DisplayNewsItem
                        newsIndex={newsIndex}
                        item={item}
                        // type={type}
                        url={url}
                      />
                    </BoxWithStyles>
                  );
                })}
            </React.Fragment>
          );
        })}
    </Box>
  );
});

export default DisplayNews;
