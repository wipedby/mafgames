import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import { GameFromServer } from "../game/gameInterface";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Props {
  currentGame: GameFromServer;
}

export const Player: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.currentGame.users.map((userMapping: any) =>
        Object.keys(userMapping).map((id) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              {console.log(userMapping)}
              <ListItemText
                primary={userMapping[id]}
                secondary={"id:" + (id == "-1" ? "скрыт" : id)}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))
      )}
    </List>
  );
};
