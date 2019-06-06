import React, { memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const AddIngredient = memo(props => (
  <Paper style={{ padding: 16 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Ingredients here..."
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          type="button"
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={props.onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
));

export default AddIngredient;
