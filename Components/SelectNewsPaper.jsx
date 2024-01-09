import React from "react";
import { Grid } from "@mui/material";

import SelectNewsCategory from "./SelectNewsCategory";
import SelectNewspaperName from "./SelectNewspaperName";

const SelectNewsPaper = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" mb={6}>
        {/* News categories */}
        <Grid item lg={3} xl={2}>
          <SelectNewsCategory />
        </Grid>

        {/* Newspaper Names */}
        <Grid container direction="column" item lg={9} xl={10}>
          <SelectNewspaperName />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SelectNewsPaper;
