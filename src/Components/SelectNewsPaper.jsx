/*
import React from "react";
import { Grid } from "@mui/material";

import SelectNewsCategory from "./SelectNewsCategory";
import SelectNewspaperName from "./SelectNewspaperName";

const SelectNewsPaper = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" mb={6}>
        
        <Grid item lg={3} xl={2}>
          <SelectNewsCategory />
        </Grid>

        
        <Grid container direction="column" item lg={9} xl={10}>
          <SelectNewspaperName />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SelectNewsPaper;
*/

import { Grid } from "@mui/material";
import SelectNewsCategory from "./SelectNewsCategory";
import SelectNewspaperName from "./SelectNewspaperName";

const SelectNewspaper = () => {
  return (
    <Grid container mb={6}>
      <Grid item xs={12} lg={3} xl={2}>
        <SelectNewsCategory />
      </Grid>

      <Grid item xs={12} lg={9} xl={10}>
        <SelectNewspaperName />
      </Grid>
    </Grid>
  );
};

export default SelectNewspaper;
