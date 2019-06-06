import React, { memo } from "react";
import { List, ListSubheader, Paper } from "@material-ui/core";

import IngredientListItem from "./IngredientListItem";

const IngredientList = memo(props => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List subheader={<ListSubheader>Ingredients</ListSubheader>}>
          {props.items.map((ingredients, idx) => (
            <IngredientListItem
              {...ingredients}
              key={`IngredientItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default IngredientList;
