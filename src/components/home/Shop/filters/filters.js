import "./filters.scss";
import { useState, useEffect } from "react";
import ArrowUp from "../../../../images/arrow-up.svg";
import ArrowDown from "../../../../images/arrow-down2.svg";
import SearchFilter from "../../../../images/search-filter.svg";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// import {filterList} from "../../../../apis/apiCalls"
// import {CircularProgress} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Filters = (props) => {
  const classes = useStyles();

  const { filtersList } = props;
  const [toggleList, setToggleList] = useState(true);
  const [isShown, setIsShown] = useState(-1);

  const handleListToggler = (e) => {
    console.log(e.target);
  };

  return (
    <div className="filters-div">
      <div className="color-filters">
        {filtersList.map((item, index) => {
          return (
            <div onClick={() => setIsShown(index)}>
              <ListItem
                key={index}
                id={index}
                className="filter-list-item"
                button
                onClick={handleListToggler}
              >
                {index === isShown && toggleList ? (
                  <img src={ArrowUp} alt="" />
                ) : (
                  <img src={ArrowDown} alt="" />
                )}
                <ListItemText
                  primary={item.label}
                  style={{ marginLeft: "10px" }}
                />
                <img src={SearchFilter} alt="Search" />
              </ListItem>
              <Collapse
                id={index}
                in={index === isShown && toggleList}
                timeout="auto"
                unmountOnExit
              >
                <List cArrowDownomponent="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" column>
                        {item.tags.map((item, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              value={item.name}
                              control={<Checkbox color="black" />}
                              label={item.name}
                              labelPlacement="end"
                            />
                          );
                        })}
                      </FormGroup>
                    </FormControl>
                  </ListItem>
                </List>
              </Collapse>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
