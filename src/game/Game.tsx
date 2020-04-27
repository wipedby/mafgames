import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { GameResponse } from "./gameInterfaces";

// import {} from "../core/"
// import
// import Brightness3Icon from "@material-ui/icons/Brightness3";
// import ExtraButton from "./ExtraButtons";
// import PlayerContainer from "../containers/PlayerContainer";
// import Player from "./Player";
// import { setGame } from "../store/game/actions";

interface Props {
  selectIsChanged: () => void;
  loadedGameList: GameResponse;
}

interface RootState {
  isOn: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Game: React.FC<Props> = (props) => {
  const selectIsOn = (state: RootState) => state.isOn;
  const isOn = useSelector(selectIsOn);

  const dispatch = useDispatch();

  console.log(isOn);
  // const counter = useSelector((state) => state.game);
  const classes = useStyles();

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const changeLabelWidth = () => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  };

  return (
    <Box m={2}>
      <Grid container>
        <Grid item xs={6}>
          {console.log(props.loadedGameList)}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
              Логи
            </InputLabel>
            <Select
              //   value={props.game.id}
              // onChange={() => }
              onChange={props.selectIsChanged}
              labelWidth={labelWidth}
              inputProps={{
                name: "value",
                id: "outlined-age-simple",
              }}
              onOpen={changeLabelWidth}
            >
              {/* {console.log(typeof props.loadedGameList.games)} */}
              {console.log(props.loadedGameList.games[0])}
              {props.loadedGameList.games.length === 0 ||
              props.loadedGameList.games.length === null ? (
                <MenuItem value="none">
                  <em>Нет игр</em>
                </MenuItem>
              ) : (
                props.loadedGameList.games.map(({ id }) => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          {/* <ExtraButton /> */}
        </Grid>
      </Grid>
      {/* <PlayerContainer game={props.game} /> */}
    </Box>
  );
};